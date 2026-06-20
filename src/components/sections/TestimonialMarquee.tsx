import type { Testimonial } from "@/lib/types";
import TestimonialCard from "@/components/ui/TestimonialCard";

function Column({
  items,
  animation,
  className = "",
}: {
  items: Testimonial[];
  animation: string;
  className?: string;
}) {
  return (
    <div
      className={`mask-fade-y relative h-[34rem] overflow-hidden ${className}`}
    >
      <div
        className={`flex flex-col gap-5 ${animation} hover:[animation-play-state:paused]`}
      >
        {/* duplicated for a seamless infinite loop */}
        {[...items, ...items].map((t, i) => (
          <TestimonialCard key={`${t.id}-${i}`} item={t} />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialMarquee({
  items,
  className = "",
}: {
  items: Testimonial[];
  className?: string;
}) {
  const left = items.filter((_, i) => i % 2 === 0);
  const right = items.filter((_, i) => i % 2 === 1);

  return (
    <div className={`grid gap-5 sm:grid-cols-2 ${className}`}>
      {/* left column scrolls up, right column scrolls down */}
      <Column items={left} animation="animate-marquee-up" />
      <Column
        items={right}
        animation="animate-marquee-down"
        className="hidden sm:block"
      />
    </div>
  );
}
