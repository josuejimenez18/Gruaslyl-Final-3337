import { Info } from "lucide-react";
import { CtaBand } from "../components/cta-band";
import { PageHero } from "../components/page-hero";
import { Reveal } from "../components/reveal";
import { useSeo } from "../hooks/use-seo";
import { projects, projectsNote, seo } from "../lib/content";
import { useI18n } from "../lib/i18n";
import { breadcrumbJsonLd } from "../lib/schema-org";

export default function ProyectosPage() {
  const { t } = useI18n();

  useSeo({
    title: t(seo.projects.title),
    description: t(seo.projects.description),
    path: "/proyectos",
    image: "/images/proj-1.jpg",
    jsonLd: breadcrumbJsonLd([
      { name: t({ es: "Inicio", en: "Home" }), path: "/" },
      { name: t({ es: "Proyectos", en: "Projects" }), path: "/proyectos" },
    ]),
  });

  return (
    <>
      <PageHero
        eyebrow={t({ es: "Proyectos", en: "Projects" })}
        title={t({
          es: "Maniobras que respaldan nuestra experiencia",
          en: "Maneuvers that back our experience"
        })}
        text={t({
          es: "Una muestra del tipo de trabajos que ejecutamos en industria, construcción, energía y logística en todo el territorio nacional.",
          en: "A sample of the work we deliver in industry, construction, energy and logistics across the country.",
        })}
        image="/images/proj-4.jpg"
      />

      <section className="bg-white py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-7 md:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal as="article" key={project.title.es} delay={(index % 2) * 90}>
                <div className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-hairline">
                  <div className="relative aspect-16/10 overflow-hidden bg-ink">
                    <img
                      src={project.image}
                      alt={t(project.title)}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1 font-display text-xs font-extrabold uppercase tracking-wider text-ink">
                      {t(project.sector)}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <h2 className="font-display text-xl leading-snug">{t(project.title)}</h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                      {t(project.description)}
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-hairline pt-4 text-xs font-semibold uppercase tracking-wider text-muted">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 bg-accent" />
                        {t(project.equipment)}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <div className="flex gap-4 rounded-[1.25rem] bg-bone p-6">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-accent-deep" />
              <p className="text-sm leading-relaxed text-muted">{t(projectsNote)}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
