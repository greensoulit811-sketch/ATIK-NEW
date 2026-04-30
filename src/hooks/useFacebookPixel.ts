import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

let pixelInitialized = false;

export const useFacebookPixel = () => {
  const [settings, setSettings] = useState<{ id: string | null; testCode: string | null }>({ id: null, testCode: null });

  useEffect(() => {
    const fetchSettings = async () => {
      const { data } = await supabase
        .from("site_settings")
        .select("key, value")
        .in("key", ["fb_pixel_id", "fb_test_event_code"]);
      
      if (data) {
        const id = data.find(s => s.key === "fb_pixel_id")?.value || null;
        const testCode = data.find(s => s.key === "fb_test_event_code")?.value || null;
        console.log("FB Pixel Settings:", { id, testCode });
        setSettings({ id, testCode });
      }
    };
    fetchSettings();
  }, []);

  useEffect(() => {
    if (!settings.id || pixelInitialized) return;

    // Load Facebook Pixel script
    const script = document.createElement("script");
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window,document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${settings.id}');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);

    // Add noscript fallback to body
    const noscript = document.createElement("noscript");
    const img = document.createElement("img");
    img.height = 1;
    img.width = 1;
    img.style.display = "none";
    img.src = `https://www.facebook.com/tr?id=${settings.id}&ev=PageView&noscript=1`;
    noscript.appendChild(img);
    document.body.appendChild(noscript);

    pixelInitialized = true;
  }, [settings.id]);

  return settings;
};

export const trackFBEvent = (eventName: string, params?: Record<string, unknown>) => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", eventName, params);
  } else {
    console.warn(`FB Pixel not loaded. Failed to track: ${eventName}`);
  }
};

export const sendServerEvent = async (eventData: {
  event_name: string;
  customer_name: string;
  phone: string;
  value: number;
  currency?: string;
  content_name?: string;
  test_event_code?: string;
}) => {
  try {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
    
    // Fetch test event code from DB if not provided
    let finalTestCode = eventData.test_event_code;
    if (!finalTestCode) {
      const { data } = await supabase
        .from("site_settings")
        .select("value")
        .eq("key", "fb_test_event_code")
        .single();
      if (data?.value) finalTestCode = data.value;
    }

    const response = await fetch(`${supabaseUrl}/functions/v1/facebook-capi`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${supabaseKey}`,
      },
      body: JSON.stringify({
        ...eventData,
        test_event_code: finalTestCode,
        source_url: window.location.href,
        fbc: getCookie("_fbc") || undefined,
        fbp: getCookie("_fbp") || undefined,
      }),
    });

    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "Failed to send CAPI event");
    return result;
  } catch (err) {
    console.error("CAPI event failed:", err);
    return null;
  }
};

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : null;
}
