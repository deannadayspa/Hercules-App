import { motion } from "motion/react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useRef } from "react";

const categories = [
  {
    label: "Hair",
    image: "https://images.unsplash.com/photo-1726555147240-61952754baeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  },
  {
    label: "Barber",
    image: "https://images.unsplash.com/photo-1635273051201-003748027b6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  },
  {
    label: "Nails",
    image: "https://images.unsplash.com/photo-1636826676107-7fe4e0001117?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  },
  {
    label: "Skin",
    image: "https://images.unsplash.com/photo-1737063935340-f9af0940c4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  },
  {
    label: "Hair Removal",
    image: "https://images.unsplash.com/photo-1701885881102-de58a9e6e0a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  },
  {
    label: "Lashes & Brows",
    image: "https://images.unsplash.com/photo-1551512167-b8834db1d639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  },
  {
    label: "Massage",
    image: "https://images.unsplash.com/photo-1649751295468-953038600bef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  },
  {
    label: "Facial",
    image: "https://images.unsplash.com/photo-1761718209835-c8586b7dcac0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
  },
];

export default function CategoryIcons() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === "left" ? -200 : 200, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-background py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            className="flex-shrink-0 w-9 h-9 rounded-full bg-white border border-border shadow-sm flex items-center justify-center hover:bg-[#00838F] hover:text-white transition-colors"
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide flex-1 pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer group"
              >
                <div className="w-[72px] h-[72px] rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#00838F] transition-all duration-200 shadow-md">
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-xs font-sans font-medium text-foreground/70 text-center whitespace-nowrap group-hover:text-[#00838F] transition-colors">
                  {cat.label}
                </span>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="flex-shrink-0 w-9 h-9 rounded-full bg-white border border-border shadow-sm flex items-center justify-center hover:bg-[#00838F] hover:text-white transition-colors"
          >
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
