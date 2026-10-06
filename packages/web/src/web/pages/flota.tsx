import { ArrowRight, Info } from "lucide-react";
import { Link } from "wouter";
import { CtaBand } from "../components/cta-band";
import { PageHero } from "../components/page-hero";
import { Reveal } from "../components/reveal";
import { useSeo } from "../hooks/use-seo";
import { fleet, fleetNote, seo, ui } from "../lib/content";
import { useI18n } from "../lib/i18n";
import { breadcrumbJsonLd } from "../lib/schema-org";
import { site, whatsappLink } from "../lib/site";

export default function FlotaPage() {
  const { t } = useI18n();

  useSeo({
    title: t(seo.fleet.title),
    description: t(seo.fleet.description),
    path: "/flota",
    image: "/images/fleet-65t.jpg",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: t({ es: "Flota de grúas Grúas L&L S.A.", en: "Grúas L&L S.A. crane fleet" }),
        itemListElement: fleet.map((unit, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: t(unit.name),
        })),
      },
      breadcrumbJsonLd([
        { name: t({ es: "Inicio", en: "Home" }), path: "/" },
        { name: t({ es: "Flota", en: "Fleet" }), path: "/flota" },
      ]),
    ],
  });

  return (
    <>
      <PageHero
        eyebrow={t({ es: "Flota", en: "Fleet" })}
        title={t({
          es: "Grúas telescópicas de 5, 25, 55 y 65 toneladas",
          en: "Telescopic cranes of 5, 25, 55 and 65 tons",
        })}
        text={t({
          es: "Flota propia con mantenimiento preventivo documentado. Escogemos la unidad según el peso de la carga, el radio de trabajo y el acceso al sitio.",
          en: "Our own fleet with documented preventive maintenance. We choose the unit based on load weight, working radius and site access.",
        })}
        image="/images/fleet-65t.jpg"
      />

      <section className="bg-white py-14">
        <div className="container-x flex flex-wrap gap-3">
          {fleet.map((unit) => (
            <a
              key={unit.id}
              href={`#${unit.id}`}
              className="rounded-full border border-hairline px-5 py-2 font-display text-sm font-bold transition-colors hover:border-ink"
            >
              {unit.capacity}
            </a>
          ))}
        </div>
      </section>

      <section className="bg-white pb-20 md:pb-28">
        <div className="container-x space-y-8">
          {fleet.map((unit, index) => (
            <Reveal as="article" key={unit.id} id={unit.id} delay={index * 40}>
              <div className="overflow-hidden rounded-[1.75rem] border border-hairline bg-bone lg:grid lg:grid-cols-5">
                <div className="relative bg-ink lg:col-span-2">
                  <img
                    src={unit.image}
                    alt={t(unit.name)}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-accent px-4 py-1.5 font-display text-sm font-extrabold text-ink">
                    {unit.capacity}
                  </span>
                </div>

                <div className="p-6 md:p-9 lg:col-span-3">
                  <h2 className="text-[clamp(1.4rem,2.6vw,2rem)]">{t(unit.name)}</h2>
                  <p className="mt-4 text-muted">{t(unit.summary)}</p>

                  <div className="mt-8 grid gap-8 md:grid-cols-2">
                    <div>
                      <p className="eyebrow text-accent-deep">{t(ui.specs)}</p>
                      <dl className="mt-4 divide-y divide-hairline border-t border-hairline">
                        {unit.specs.map((spec) => (
                          <div key={spec.label.es} className="flex justify-between gap-4 py-2.5">
                            <dt className="text-sm text-muted">{t(spec.label)}</dt>
                            <dd className="text-right font-display text-sm font-bold">
                              {t(spec.value)}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    <div>
                      <p className="eyebrow text-accent-deep">{t(ui.applications)}</p>
                      <ul className="mt-4 space-y-2.5">
                        {unit.applications.map((application) => (
                          <li key={application.es} className="flex gap-3 text-sm leading-relaxed">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                            <span>{t(application)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <Link to="/contacto" className="btn btn-ink">
                      {t(ui.quote)}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href={whatsappLink(
                        t({
                          es: `Hola, necesito información sobre la grúa de ${unit.capacity}.`,
                          en: `Hello, I need information about the ${unit.capacity} crane.`,
                        }),
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline"
                    >
                      {t(ui.whatsapp)}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal>
            <div className="flex gap-4 rounded-[1.25rem] border border-hairline bg-white p-6">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-accent-deep" />
              <p className="text-sm leading-relaxed text-muted">
                {t(fleetNote)}{" "}
                <a href={`mailto:${site.email}`} className="font-semibold text-foreground underline">
                  {site.email}
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
