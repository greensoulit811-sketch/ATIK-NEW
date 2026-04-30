import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, Star } from "lucide-react";
import img1 from "@/assets/power_honey_1.png";
import img2 from "@/assets/power_honey_2.png";

const ProductHighlightSection = () => {
  const images = [img1, img2];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-[#fffdfa] relative overflow-hidden">
      {/* Subtle Dot Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.3]" 
        style={{ 
          backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', 
          backgroundSize: '24px 24px' 
        }}
      />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left Side: Auto Slider Image */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt="Power Honey Product"
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </AnimatePresence>

              {/* Text Overlay on Image */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={`text-${currentIndex}`}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    <span className="text-orange-400">বীর্য/পাত ভয়</span> <br />
                    আর নয়
                  </h3>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-block bg-[#fef3c7] text-[#92400e] px-4 py-1.5 rounded-md text-xs font-black tracking-widest uppercase mb-6">
                PREMIUM FORMULA
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
                <span className="text-[#3e2723]">শারীরিক দুর্বলতা দূর করে</span> <br />
                <span className="text-[#e65100]">ফিরে পান হারানো শক্তি!</span>
              </h2>

              <p className="text-lg text-[#5d4037] mb-8 leading-relaxed max-w-lg">
                Power Honey হলো বিশেষভাবে তৈরি একটি হারবাল হানি, যা ১২ বোতল ফুল কোর্স হিসেবে উপলব্ধ। এটি প্রাকৃতিক উপাদানে তৈরি এবং সম্পূর্ণ নিরাপদ।
              </p>

              {/* Trust Badge */}
              <div className="flex items-center gap-4 mb-10 bg-white/50 backdrop-blur-sm self-start p-3 rounded-xl border border-orange-100/50 inline-flex">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-bold text-[#5d4037]">
                  Trusted by 2500+ Customers
                </span>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#order"
                  className="inline-flex items-center justify-center gap-2 bg-[#d84315] hover:bg-[#bf360c] text-white font-bold text-lg px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-orange-900/20"
                >
                  অর্ডার করতে চাই
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="tel:01XXXXXXXXX"
                  className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#d84315]/20 hover:border-[#d84315] text-[#d84315] font-bold text-lg px-8 py-4 rounded-xl transition-all hover:bg-orange-50"
                >
                  <Phone className="w-5 h-5" />
                  সরাসরি কল করুন
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlightSection;
