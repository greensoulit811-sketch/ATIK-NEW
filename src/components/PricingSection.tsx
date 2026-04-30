import { motion } from "framer-motion";
import { Truck, ShoppingCart, Clock } from "lucide-react";

const PricingSection = () => {
  return (
    <section className="py-20 bg-[#fffaf5]">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#d84315] mb-4">
            প্যাকেজ ও প্রাইস
          </h2>
          <p className="text-lg text-[#5d4037] font-medium">
            আপনার পছন্দের Power Honey প্যাকেজটি বেছে নিন
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Package 1 */}
          <motion.div
            className="bg-white rounded-3xl p-8 border-2 border-orange-100 shadow-sm text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-[#5d4037] mb-2">Power Honey</h3>
            <p className="text-orange-600 font-black text-2xl mb-4">6 Bottle</p>
            <div className="flex items-center justify-center gap-2 mb-8">
              <span className="text-4xl font-black text-[#3e2723]">1,490</span>
              <span className="text-2xl font-bold text-[#3e2723]">৳</span>
            </div>
            <a
              href="#order"
              className="block w-full bg-[#e65100] hover:bg-[#bf360c] text-white font-bold py-3 rounded-xl transition-colors"
            >
              অর্ডার করুন
            </a>
          </motion.div>

          {/* Package 2 - Best Value */}
          <motion.div
            className="bg-white rounded-3xl p-8 border-2 border-[#e65100] shadow-xl text-center relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#e65100] text-white text-xs font-black px-6 py-1.5 rounded-b-xl uppercase tracking-widest">
              Best Value
            </div>
            <h3 className="text-xl font-bold text-[#5d4037] mb-2 mt-4">Power Honey</h3>
            <p className="text-orange-600 font-black text-2xl mb-4">12 Bottle</p>
            <div className="flex items-center justify-center gap-2 mb-8">
              <span className="text-4xl font-black text-[#3e2723]">2,690</span>
              <span className="text-2xl font-bold text-[#3e2723]">৳</span>
            </div>
            <a
              href="#order"
              className="block w-full bg-[#e65100] hover:bg-[#bf360c] text-white font-bold py-3 rounded-xl transition-colors"
            >
              অর্ডার করুন
            </a>
          </motion.div>
        </div>
      </div>

      {/* Full Width Banner */}
      <div className="bg-[#bf360c] py-6 relative overflow-hidden">
        {/* Subtle dot pattern for banner */}
        <div 
          className="absolute inset-0 opacity-[0.1]" 
          style={{ 
            backgroundImage: 'radial-gradient(white 1px, transparent 1px)', 
            backgroundSize: '15px 15px' 
          }}
        />
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-white">
            {/* Left: Free Delivery */}
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-full">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <p className="text-xl md:text-2xl font-black italic">
                সীমিত সময়ের জন্য <span className="text-yellow-400 underline underline-offset-4">ফ্রি ডেলিভারি!</span>
              </p>
            </div>

            {/* Center: Countdown */}
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-1 flex items-center gap-1">
                <Clock className="w-3 h-3" /> অর্ডার শেষ হতে বাকি
              </span>
              <div className="bg-black/20 backdrop-blur-md border border-white/10 px-6 py-2 rounded-lg text-2xl md:text-3xl font-mono font-bold tracking-tighter">
                02:09:27
              </div>
            </div>

            {/* Right: CTA */}
            <a
              href="#order"
              className="bg-white text-[#bf360c] hover:bg-orange-50 font-black text-lg px-8 py-3 rounded-full flex items-center gap-3 transition-all hover:scale-105 shadow-lg"
            >
              অর্ডার করুন
              <ShoppingCart className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
