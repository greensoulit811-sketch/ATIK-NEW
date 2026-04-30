import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";
import certificateImg from "@/assets/quality_certificates_honey_1777525078938.png";

const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-[#fffaf5] relative overflow-hidden">
      {/* Dot Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.4]" 
        style={{ 
          backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }}
      />

      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="bg-white p-3 rounded-xl shadow-sm border border-orange-100">
              <ShieldCheck className="w-10 h-10 text-[#e65100]" />
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-[#c62828] mb-6 leading-tight">
            ফলাফল না পেলে মূল্য ফেরত দেওয়া হবে!
          </h2>

          <div className="space-y-2 mb-10">
            <p className="text-xl md:text-2xl font-bold text-[#4e342e]">
              সেবনের মাত্র ১ ঘণ্টার মধ্যে প্রাথমিক ফলাফল অনুভব করা যাবে।
            </p>
            <p className="text-lg md:text-xl font-medium text-[#5d4037] opacity-90">
              শরীরের শক্তি ও সহনশীলতা বৃদ্ধি করে, মুড ও আকাঙ্ক্ষা উন্নত করতে সাহায্য করে।
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mb-12 relative inline-block"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="p-2 bg-white rounded-lg shadow-xl border border-orange-100">
            <img 
              src={certificateImg} 
              alt="Quality Certificates" 
              className="rounded-md w-full max-w-2xl mx-auto"
            />
          </div>
          {/* Decorative glow */}
          <div className="absolute -inset-4 bg-orange-200/20 blur-3xl -z-10 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#order"
            className="inline-flex items-center gap-2 bg-[#e65100] hover:bg-[#bf360c] text-white font-bold text-xl px-10 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-orange-900/20"
          >
            অর্ডার করতে চাই
            <ArrowRight className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
