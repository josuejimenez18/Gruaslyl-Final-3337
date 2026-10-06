import { ShieldCheck } from "lucide-react";
import { CtaBand } from "../components/cta-band";
import { PageHero } from "../components/page-hero";
import { Reveal } from "../components/reveal";
import { useSeo } from "../hooks/use-seo";
import { safety, seo } from "../lib/content";
import { useI18n } from "../lib/i18n";
import { breadcrumbJsonLd } from "../lib/schema-org";

export default function SeguridadPage() {
  const { t } = useI18n();

  useSeo({
    title: t(seo.safety.title),
    description: t(seo.safety.description),
    path: "/seguridad",
    image: "/images/svc-montaje.jpg",
    jsonLd: breadcrumbJsonLd([
      { name: t({ es: "Inicio", en: "Home" }), path: "/" },
      { name: t({ es: "Seguridad", en: "Safety" }), path: "/seguridad" },
    ]),
  });

  return (
    <>
      <PageHero
        eyebrow={t(safety.eyebrow)}
        title={t(safety.title)}
        text={t(safety.lead)}
        image="/images/svc-montaje.jpg"
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {safety.items.map((item, index) => (
              <Reveal key={item.title.es} delay={(index % 3) * 80}>
                <div className="flex h-full flex-col rounded-[1.25rem] border border-hairline bg-bone p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink">
                    <ShieldCheck className="h-5 w-5 text-accent" />
                  </span>
                  <h2 className="mt-5 font-display text-lg leading-snug">{t(item.title)}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{t(item.text)}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-ink p-8 md:p-12">
              <div className="grain" />
              <div className="relative max-w-3xl">
                <p className="eyebrow text-accent">
                  {t({ es: "Documentación", en: "Documentation" })}
                </p>
                <p className="mt-4 text-xl leading-relaxed text-white md:text-2xl">
                  {t(safety.note)}
                </p>
              </div>
              <div className="absolute bottom-0 right-0 h-full w-2 hatch" />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
