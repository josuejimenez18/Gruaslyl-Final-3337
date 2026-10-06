import { ArrowRight, ArrowUpRight, Clock3, HardHat, Phone, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { CtaBand } from "../components/cta-band";
import { Reveal } from "../components/reveal";
import { SectionHeading } from "../components/section-heading";
import { useSeo } from "../hooks/use-seo";
import {
  about,
  fleet,
  hero,
  projects,
  sectors,
  seo,
  services,
  trustCards,
  ui,
} from "../lib/content";
import { useI18n } from "../lib/i18n";
import { localBusinessJsonLd } from "../lib/schema-org";
import { site } from "../lib/site";

const icons = { clock: Clock3, shield: ShieldCheck, hardhat: HardHat };

function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden rounded-b-[2rem] bg-ink md:rounded-b-[3.5rem]">
      <img
        src="/images/hero.jpg"
        alt={t({
          es: "Grúa telescópica Zoomlion ZTC550V5-2 de Grúas L&L S.A. en Costa Rica",
          en: "Grúas L&L S.A. Zoomlion ZTC550V5-2 telescopic crane in Costa Rica",
        })}
        className="absolute inset-0 h-full w-full object-cover"
        width="1920"
        height="960"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/55 to-ink/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/10 md:via-ink/55" />
      <div className="grain" />

      <div className="container-x relative pb-28 pt-40 md:pb-40 md:pt-52">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            {t(hero.badge)}
          </p>
        </Reveal>
        <Reveal delay={90}>
          <h1 className="mt-7 max-w-4xl text-[clamp(2.4rem,6vw,4.8rem)] text-white">
            {t(hero.title)}
          </h1>
        </Reveal>
        <Reveal delay={170}>
          <p className="mt-6 max-w-xl text-lg text-steel">{t(hero.subtitle)}</p>
        </Reveal>
        <Reveal delay={250}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link to="/contacto" className="btn btn-accent">
              {t(ui.quote)}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={`tel:${site.phones[0]?.tel}`} className="btn btn-ghost">
              <Phone className="h-4 w-4" />
              {site.phones[0]?.label}
            </a>
          </div>
        </Reveal>

        <Reveal delay={330}>
          <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {hero.stats.map((stat) => (
              <div key={stat.value}>
                <dt className="font-display text-3xl font-extrabold text-accent md:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-xs leading-snug text-steel md:text-sm">{t(stat.label)}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

function TrustCards() {
  const { t } = useI18n();
  return (
    <section className="relative z-10 -mt-14 md:-mt-20">
      <div className="container-x">
        <div className="grid gap-6 rounded-[1.75rem] border border-hairline bg-white p-6 shadow-[0_30px_80px_rgba(16,19,20,0.12)] md:grid-cols-3 md:p-10">
          {trustCards.map((card, index) => {
            const Icon = icons[card.icon];
            return (
              <Reveal key={card.icon} delay={index * 90} className="flex flex-col">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink">
                  <Icon className="h-5 w-5 text-accent" />
                </span>
                <h3 className="mt-4 font-display text-lg">{t(card.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t(card.text)}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Capacities() {
  const { t } = useI18n();
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={t({ es: "Nuestra flota", en: "Our fleet" })}
            title={t({
              es: "De 5 a 65 toneladas, la capacidad que su maniobra necesita",
              en: "From 5 to 65 tons, the capacity your lift needs",
            })}
          />
          <Reveal delay={120}>
            <Link to="/flota" className="btn btn-outline shrink-0">
              {t(ui.seeFleet)}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {fleet.map((unit, index) => (
            <Reveal key={unit.id} delay={index * 80}>
              <Link
                to="/flota"
                className="group block h-full overflow-hidden rounded-[1.25rem] border border-hairline bg-bone transition-colors hover:border-ink"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-ink">
                  <img
                    src={unit.image}
                    alt={t(unit.name)}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 font-display text-xs font-extrabold text-ink">
                    {unit.capacity}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base leading-snug">{t(unit.name)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{t(unit.summary)}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden bg-ink py-20 md:py-28">
      <div className="grain" />
      <div className="container-x relative">
        <SectionHeading
          tone="dark"
          eyebrow={t({ es: "Servicios", en: "Services" })}
          title={t({
            es: "Todo el ciclo del movimiento de carga",
            en: "The full cargo handling cycle",
          })}
          text={t({
            es: "Un solo proveedor para izar, montar y trasladar. Menos coordinación para usted, menos tiempo perdido en obra.",
            en: "A single provider to lift, assemble and haul. Less coordination for you, less downtime on site.",
          })}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-ink-line bg-ink-soft">
                <div className="relative aspect-16/9 overflow-hidden">
                  <img
                    src={service.image}
                    alt={t(service.title)}
                    className="h-full w-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-soft via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl text-white">{t(service.title)}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-steel">
                    {t(service.summary)}
                  </p>
                  <Link
                    to="/servicios"
                    className="mt-5 inline-flex items-center gap-2 font-display text-sm font-bold text-accent"
                  >
                    {t(ui.seeMore)}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  const { t } = useI18n();
  return (
    <section className="bg-bone py-20 md:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-[1.5rem]">
            <img
              src="/images/about-1.jpg"
              alt={t({
                es: "Flota de grúas telescópicas lista para trabajar",
                en: "Telescopic crane fleet ready to work",
              })}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden w-52 overflow-hidden rounded-[1.25rem] border-4 border-bone md:block">
            <img
              src="/images/about-2.jpg"
              alt={t({ es: "Montaje de prefabricados", en: "Precast assembly" })}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -left-3 top-6 h-24 w-1.5 hatch" />
        </Reveal>

        <div>
          <SectionHeading
            eyebrow={t(about.eyebrow)}
            title={t({
              es: "Por qué las empresas nos vuelven a llamar",
              en: "Why companies call us again",
            })}
            text={t(about.lead)}
          />
          <ol className="mt-10 space-y-6">
            {about.values.map((value, index) => (
              <Reveal as="li" key={value.title.es} delay={index * 70} className="flex gap-5">
                <span className="font-display text-2xl font-extrabold text-accent-deep">
                  0{index + 1}.
                </span>
                <div>
                  <h3 className="font-display text-lg">{t(value.title)}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{t(value.text)}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={260}>
            <Link to="/nosotros" className="btn btn-ink mt-10">
              {t({ es: "Conocer la empresa", en: "About the company" })}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SectorsStrip() {
  const { t } = useI18n();
  return (
    <section className="border-y border-hairline bg-white py-10">
      <div className="container-x flex flex-col gap-6 md:flex-row md:items-center">
        <p className="eyebrow shrink-0 text-muted">
          {t({ es: "Sectores que atendemos", en: "Sectors we serve" })}
        </p>
        <div className="flex flex-wrap gap-2.5">
          {sectors.map((sector) => (
            <span
              key={sector.es}
              className="rounded-full border border-hairline px-4 py-1.5 font-display text-sm font-semibold text-foreground"
            >
              {t(sector)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsPreview() {
  const { t } = useI18n();
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={t({ es: "Proyectos", en: "Projects" })}
            title={t({
              es: "Maniobras ejecutadas en todo el país",
              en: "Maneuvers executed across the country",
            })}
          />
          <Reveal delay={120}>
            <Link to="/proyectos" className="btn btn-outline shrink-0">
              {t(ui.seeAll)}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => (
            <Reveal key={project.title.es} delay={index * 80}>
              <article className="group h-full overflow-hidden rounded-[1.25rem] border border-hairline">
                <div className="relative aspect-4/3 overflow-hidden bg-ink">
                  <img
                    src={project.image}
                    alt={t(project.title)}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <p className="eyebrow text-accent-deep">
                    {t(project.sector)} · {t(project.equipment)}
                  </p>
                  <h3 className="mt-3 font-display text-base leading-snug">{t(project.title)}</h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Index() {
  const { t } = useI18n();
  useSeo({
    title: t(seo.home.title),
    description: t(seo.home.description),
    path: "/",
    jsonLd: localBusinessJsonLd,
  });

  return (
    <>
      <Hero />
      <TrustCards />
      <Capacities />
      <ServicesSection />
      <WhySection />
      <SectorsStrip />
      <ProjectsPreview />
      <CtaBand />
    </>
  );
}

export default Index;
