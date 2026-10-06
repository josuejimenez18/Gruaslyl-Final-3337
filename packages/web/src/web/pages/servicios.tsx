import { ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";
import { CtaBand } from "../components/cta-band";
import { PageHero } from "../components/page-hero";
import { Reveal } from "../components/reveal";
import { SectionHeading } from "../components/section-heading";
import { useSeo } from "../hooks/use-seo";
import { sectors, seo, services, ui } from "../lib/content";
import { useI18n } from "../lib/i18n";
import { breadcrumbJsonLd, serviceJsonLd } from "../lib/schema-org";

export default function ServiciosPage() {
  const { t } = useI18n();

  useSeo({
    title: t(seo.services.title),
    description: t(seo.services.description),
    path: "/servicios",
    image: "/images/svc-izaje.jpg",
    jsonLd: [
      ...services.map((service) =>
        serviceJsonLd(t(service.title), t(service.summary), "/servicios"),
      ),
      breadcrumbJsonLd([
        { name: t({ es: "Inicio", en: "Home" }), path: "/" },
        { name: t({ es: "Servicios", en: "Services" }), path: "/servicios" },
      ]),
    ],
  });

  return (
    <>
      <PageHero
        eyebrow={t({ es: "Servicios", en: "Services" })}
        title={t({
          es: "Izaje, montaje y transporte con un solo proveedor",
          en: "Lifting, assembly and transport from a single provider",
        })}
        text={t({
          es: "Definimos el equipo correcto para cada maniobra y ejecutamos con operadores certificados, plan de izaje y respaldo documental para su obra o planta.",
          en: "We define the right equipment for each maneuver and execute with certified operators, a lift plan and full documentation for your site or plant.",
        })}
        image="/images/svc-izaje.jpg"
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container-x space-y-16 md:space-y-24">
          {services.map((service, index) => (
            <Reveal
              as="article"
              key={service.slug}
              id={service.slug}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-[1.5rem] bg-ink">
                <img
                  src={service.image}
                  alt={t(service.title)}
                  className="aspect-4/3 h-full w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute left-5 top-5 rounded-full bg-accent px-3 py-1 font-display text-xs font-extrabold text-ink">
                  0{index + 1}
                </span>
              </div>

              <div>
                <p className="eyebrow text-accent-deep">
                  {t({ es: "Servicio", en: "Service" })} 0{index + 1}
                </p>
                <h2 className="mt-4 text-[clamp(1.6rem,3.2vw,2.4rem)]">{t(service.title)}</h2>
                <p className="mt-5 text-muted">{t(service.summary)}</p>
                <ul className="mt-7 space-y-3">
                  {service.bullets.map((bullet) => (
                    <li key={bullet.es} className="flex gap-3 text-sm leading-relaxed">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-deep" />
                      <span>{t(bullet)}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contacto" className="btn btn-ink mt-9">
                  {t(ui.quote)}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-20 md:py-24">
        <div className="grain" />
        <div className="container-x relative">
          <SectionHeading
            tone="dark"
            align="center"
            eyebrow={t({ es: "Sectores", en: "Sectors" })}
            title={t({
              es: "Sectores donde trabajamos todos los días",
              en: "Sectors we work in every day",
            })}
            text={t({
              es: "Adaptamos la logística, los permisos y la documentación al tipo de sitio donde se ejecuta la maniobra.",
              en: "We adapt logistics, permits and documentation to the type of site where the lift takes place.",
            })}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector, index) => (
              <Reveal key={sector.es} delay={index * 60}>
                <div className="flex h-full items-center gap-4 rounded-[1.25rem] border border-ink-line bg-ink-soft px-6 py-5">
                  <span className="h-8 w-1.5 hatch" />
                  <p className="font-display text-base font-bold text-white">{t(sector)}</p>
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
