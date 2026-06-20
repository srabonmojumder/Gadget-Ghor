import PageBanner from "@/components/ui/PageBanner";
import CtaBand from "@/components/sections/CtaBand";

export type LegalSection = { heading: string; paragraphs: string[] };

export default function LegalDoc({
  title,
  crumb,
  updated,
  intro,
  sections,
}: {
  title: string;
  crumb: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageBanner title={title} subtitle={intro} crumbs={[{ label: crumb }]} />
      <section className="bg-ink-950 py-20 lg:py-28">
        <div className="container-x">
          <p className="text-sm text-ink-400">Last updated: {updated}</p>
          <div className="mt-8 max-w-3xl space-y-10">
            {sections.map((s, i) => (
              <div key={i}>
                <h2 className="text-xl font-bold text-white sm:text-2xl">
                  <span className="text-accent">
                    {String(i + 1).padStart(2, "0")}.
                  </span>{" "}
                  {s.heading}
                </h2>
                {s.paragraphs.map((p, j) => (
                  <p key={j} className="mt-3 leading-relaxed text-muted">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
