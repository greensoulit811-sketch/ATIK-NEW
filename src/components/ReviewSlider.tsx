import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useCallback } from "react";

const reviews = [
  { name: "ফারহানা আক্তার", loc: "ঢাকা", text: "প্যাকেজিং সুন্দর ছিল। প্রডাক্ট হাতে পেয়ে খুব খুশি হয়েছি।" },
  { name: "মোঃ রাশেদ", loc: "চট্টগ্রাম", text: "অসাধারণ প্রডাক্ট। ডেলিভারিও খুব দ্রুত পেয়েছি।" },
  { name: "সাবরিনা ইসলাম", loc: "সিলেট", text: "প্রডাক্ট কোয়ালিটি অসাধারণ। একদম অরিজিনাল জিনিস।" },
];

const ReviewSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            ক্রেতাদের মতামত 💬
          </h2>
          <p className="text-muted-foreground">ইতিমধ্যে যারা আমাদের থেকে কিনেছেন</p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation buttons */}
          <button
            onClick={scrollPrev}
            className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Slider */}
          <div className="overflow-hidden px-2" ref={emblaRef}>
            <div className="flex gap-4">
              {reviews.map((r, i) => (
                <div
                  key={i}
                  className="flex-none w-[85%] sm:w-[45%] lg:w-[33%]"
                >
                  <div className="bg-card rounded-2xl p-5 border border-border h-full flex flex-col">
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-foreground text-sm leading-relaxed mb-4 flex-1">"{r.text}"</p>
                    <div className="text-xs border-t border-border pt-3">
                      <span className="font-semibold text-foreground">{r.name}</span>
                      <span className="text-muted-foreground"> — {r.loc}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSlider;

