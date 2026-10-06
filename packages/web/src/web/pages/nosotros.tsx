import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { CtaBand } from "../components/cta-band";
import { PageHero } from "../components/page-hero";
import { Reveal } from "../components/reveal";
import { SectionHeading } from "../components/section-heading";
import { useSeo } from "../hooks/use-seo";
import { about, hero, seo, ui } from "../lib/content";
import { useI18n } from "../lib/i18n";
import { breadcrumbJsonLd, localBusinessJsonLd } from "../lib/schema-org";
import { site } from "../lib/site";

export default function NosotrosPage() {
  const { t } = useI18n();

  useSeo({
    title: t(seo.about.title),
    description: t(seo.about.description),
    path: "/nosotros",
    image: "/images/about-1.jpg",
    jsonLd: [
      localBusinessJsonLd,
      breadcrumbJsonLd([
        { name: t({ es: "Inicio", en: "Home" }), path: "/" },
        { name: t({ es: "Nosotros", en: "About" }), path: "/nosotros" },
      ]),
    ],
  });

  return (
    <>
      <PageHero
        eyebrow={t(about.eyebrow)}
        title={t(about.title)}
        text={t(about.lead)}
        image="/images/about-1.jpg"
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="space-y-6 text-lg leading-relaxed text-muted">
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph.es}>{t(paragraph)}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120} className="mt-12">
              <div className="grid gap-6 sm:grid-cols-3">
                {hero.stats.map((stat) => (
                  <div key={stat.value} className="border-t-2 border-accent pt-4">
                    <p className="font-display text-3xl font-extrabold text-ink">{stat.value}</p>
                    <p className="mt-2 text-sm leading-snug text-muted">{t(stat.label)}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={200} className="mt-12">
              <Link to="/contacto" className="btn btn-ink">
                {t(ui.quote)}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={100} className="lg:col-span-5">
            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src="/images/about-2.jpg"
                alt={t({
                  es: "Cuadrilla de Grúas L&L en maniobra de montaje",
                  en: "Grúas L&L crew during an assembly maneuver",
                })}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-6 rounded-[1.5rem] bg-ink p-7">
              <p className="eyebrow text-accent">{t(ui.serviceArea)}</p>
              <p className="mt-3 font-display text-xl text-white">{t(ui.serviceAreaValue)}</p>
              <p className="mt-5 text-sm leading-relaxed text-steel">
                {t({
                  es: "Movilizamos equipos a cualquier provincia. Coordinamos rutas, permisos y horarios de ingreso según los requisitos de su planta u obra.",
                  en: "We mobilize equipment to any province. We coordinate routes, permits and access schedules according to your plant or site requirements.",
                })}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {site.capacities.map((capacity) => (
                  <span
                    key={capacity}
                    className="rounded-full border border-ink-line px-3 py-1 font-display text-xs font-bold text-accent"
                  >
                    {capacity}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bone py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow={t({ es: "Cómo trabajamos", en: "How we work" })}
            title={t({
              es: "Cuatro compromisos que sostienen cada maniobra",
              en: "Four commitments behind every maneuver",
            })}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {about.values.map((value, index) => (
              <Reveal key={value.title.es} delay={index * 70}>
                <div className="flex h-full gap-5 rounded-[1.25rem] bg-white p-7">
                  <span className="font-display text-2xl font-extrabold text-accent-deep">
                    0{index + 1}.
                  </span>
                  <div>
                    <h3 className="font-display text-lg">{t(value.title)}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{t(value.text)}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
