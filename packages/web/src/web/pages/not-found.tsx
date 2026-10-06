import { ArrowRight, Home } from "lucide-react";
import { Link } from "wouter";
import { nav, ui } from "../lib/content";
import { useI18n } from "../lib/i18n";

export default function NotFoundPage() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden bg-ink pb-24 pt-40 md:pt-52">
      <div className="grain" />
      <div className="container-x relative">
        <p className="eyebrow text-accent">Error 404</p>
        <h1 className="mt-4 max-w-3xl text-[clamp(2rem,5vw,3.6rem)] text-white">
          {t({
            es: "Esta página no existe o cambió de dirección",
            en: "This page doesn't exist or has moved",
          })}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-steel">
          {t({
            es: "Revise el menú principal o escríbanos y le ayudamos a encontrar lo que necesita.",
            en: "Check the main menu or contact us and we'll help you find what you need.",
          })}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link to="/" className="btn btn-accent">
            <Home className="h-4 w-4" />
            {t({ es: "Ir al inicio", en: "Go home" })}
          </Link>
          <Link to="/contacto" className="btn btn-ghost">
            {t(ui.quote)}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 flex flex-wrap gap-2.5 border-t border-white/15 pt-8">
          {nav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="rounded-full border border-white/20 px-4 py-1.5 font-display text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
            >
              {t(item.label)}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
