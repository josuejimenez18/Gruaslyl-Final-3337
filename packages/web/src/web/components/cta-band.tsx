import { ArrowRight, Phone } from "lucide-react";
import { Link } from "wouter";
import { ctaBand, ui } from "../lib/content";
import { useI18n } from "../lib/i18n";
import { site } from "../lib/site";
import { Reveal } from "./reveal";

export function CtaBand() {
  const { t } = useI18n();
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-accent px-6 py-12 md:px-14 md:py-16">
          <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full bg-white/25 blur-2xl" />
          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="text-[clamp(1.7rem,3.4vw,2.6rem)] text-ink">{t(ctaBand.title)}</h2>
              <p className="mt-4 text-ink/80">{t(ctaBand.text)}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <Link to="/contacto" className="btn btn-ink">
                {t(ui.quote)}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${site.phones[0]?.tel}`}
                className="btn border border-ink/25 text-ink hover:border-ink"
              >
                <Phone className="h-4 w-4" />
                {site.phones[0]?.label}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
