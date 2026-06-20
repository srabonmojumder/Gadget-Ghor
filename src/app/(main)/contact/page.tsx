import { Phone, Mail, MapPin, Clock } from "lucide-react";
import PageBanner from "@/components/ui/PageBanner";
import ContactForm from "@/components/sections/ContactForm";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/data/site";
import GridBackdrop from "@/components/ui/GridBackdrop";

export const metadata = { title: "Contact Us" };

const INFO = [
  { icon: Phone, label: "Phone", value: SITE.phone, href: `tel:${SITE.phone}` },
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  { icon: MapPin, label: "Address", value: SITE.address },
  { icon: Clock, label: "Working Hours", value: "24/7 Customer Support" },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Questions, feedback or just want to say hi? Our team is here for you around the clock."
        crumbs={[{ label: "Contact Us" }]}
      />

      <section className="bg-ink-950 py-20 lg:py-28">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Get in touch
              </h2>
              <p className="mt-3 text-muted">
                Reach out through any channel below or send us a message — we
                reply within 24 hours, usually much faster.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {INFO.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="card p-5">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent text-ink-950">
                        <Icon size={20} />
                      </span>
                      <p className="mt-4 text-sm text-ink-400">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-medium text-white transition hover:text-accent"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-white">
                          {item.value}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-ink-950 pb-20 lg:pb-28">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-900">
            <GridBackdrop />
            <div className="relative z-10 grid h-72 place-items-center text-center sm:h-96">
              <div>
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-accent text-ink-950">
                  <MapPin size={26} />
                </span>
                <p className="mt-4 text-lg font-semibold text-white">
                  Visit our flagship store
                </p>
                <p className="mt-1 text-muted">{SITE.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
