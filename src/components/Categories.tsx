import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES } from "@/data/site";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

export default function Categories() {
  return (
    <section id="categories" className="bg-ink-50 py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Categories"
          title={
            <>
              Discover Innovation,{" "}
              <span className="text-highlight">Experience</span> the Future
            </>
          }
          subtitle="Explore our curated range of cutting-edge electronics — from smartphones to smart-home devices, designed to elevate your lifestyle."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <Reveal key={cat.name} delay={(i % 3) * 0.06}>
                <a
                  href="#featured"
                  className="card card-hover group flex h-full flex-col overflow-hidden rounded-3xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-ink-100">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute left-3 top-3 grid h-10 w-10 place-items-center rounded-xl bg-brand-400 text-ink-950 shadow-lg">
                      <Icon size={20} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-lg font-semibold text-ink-950">
                        {cat.name}
                      </h3>
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink-100 text-ink-600 transition-all group-hover:bg-ink-950 group-hover:text-white">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                    <p className="mt-2 line-clamp-2 text-sm text-ink-500">
                      {cat.desc}
                    </p>
                    <span className="mt-3 text-xs font-semibold uppercase tracking-wide text-brand-600">
                      {cat.count}
                    </span>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
