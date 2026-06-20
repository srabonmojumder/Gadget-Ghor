import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Category } from "@/lib/types";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href="/shop"
      className="card card-hover group flex h-full flex-col overflow-hidden"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-ink-850">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
        <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-ink-950/70 text-white backdrop-blur transition group-hover:bg-accent group-hover:text-ink-950">
          <ArrowUpRight size={16} />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-semibold text-white">{category.name}</h3>
          <span className="chip">{category.count}+ items</span>
        </div>
        <p className="mt-2 line-clamp-2 text-sm text-muted">{category.desc}</p>
      </div>
    </Link>
  );
}
