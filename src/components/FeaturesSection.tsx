import { motion } from "framer-motion";
import { Check } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    "বিশেষ মুহূর্তে দুর্বলতা চিরতরে দূর করে এবং স্ত্রীর কাছে আপনাকে করে তোলে সেরা পুরুষ।",
    "পুরুষত্ব ধরে রাখে এবং শারীরিক শক্তি বাড়ায়।",
    "কাজের মধ্যে মনোযোগ বৃদ্ধি করে, ক্লান্তি দূর করে এবং হারানো শক্তি ফিরিয়ে আনে।",
    "শতভাগ খাঁটি মধু ও প্রাকৃতিক উপাদান, কোনো পার্শ্বপ্রতিক্রিয়া নেই।",
    "রক্ত সঞ্চালন ত্বরান্বিত করে, আকাঙ্ক্ষা বৃদ্ধি করে এবং মানসিক মুডকে প্রফুল্ল রাখে, বিশেষ মুহূর্ত আরও উপভোগ্য করে।",
  ];

  return (
    <section className="py-20 bg-[#0a0a0a] text-white overflow-hidden relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block border border-orange-500/50 rounded-full px-4 py-1 mb-6">
            <span className="text-orange-500 text-xs font-bold tracking-wider">পাওয়ার হানি</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            এর কার্যকারিতা ও উপকারিতা
          </h2>
        </motion.div>

        <div className="space-y-0 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`flex items-start gap-4 py-6 ${
                index !== features.length - 1 ? "border-b border-white/10" : ""
              }`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mt-1 flex-shrink-0">
                <Check className="w-5 h-5 text-orange-500 stroke-[3px]" />
              </div>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                {feature}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="#order"
            className="inline-block bg-[#f59e0b] hover:bg-[#d97706] text-black font-bold text-xl px-12 py-4 rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
          >
            অর্ডার করতে চাই
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
