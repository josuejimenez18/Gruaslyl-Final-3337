import { Clock3, Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "../components/page-hero";
import { QuoteForm } from "../components/quote-form";
import { Reveal } from "../components/reveal";
import { useSeo } from "../hooks/use-seo";
import { contact, seo, ui } from "../lib/content";
import { useI18n } from "../lib/i18n";
import { breadcrumbJsonLd, localBusinessJsonLd } from "../lib/schema-org";
import { site, whatsappLink } from "../lib/site";

export default function ContactoPage() {
  const { t } = useI18n();

  useSeo({
    title: t(seo.contact.title),
    description: t(seo.contact.description),
    path: "/contacto",
    jsonLd: [
      localBusinessJsonLd,
      breadcrumbJsonLd([
        { name: t({ es: "Inicio", en: "Home" }), path: "/" },
        { name: t({ es: "Contacto", en: "Contact" }), path: "/contacto" },
      ]),
    ],
  });

  const waText = t({
    es: "Hola, necesito cotizar un servicio de grúa.",
    en: "Hello, I'd like a quote for crane service.",
  });

  return (
    <>
      <PageHero
        eyebrow={t(contact.eyebrow)}
        title={t(contact.title)}
        text={t(contact.lead)}
        image="/images/svc-alquiler.jpg"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <div className="rounded-[1.75rem] border border-hairline bg-bone p-6 md:p-9">
              <h2 className="font-display text-2xl">
                {t({ es: "Solicitud de cotización", en: "Quote request" })}
              </h2>
              <p className="mt-2 text-sm text-muted">
                {t({
                  es: "Los campos con * son obligatorios. Respondemos en horario laboral y atendemos emergencias 24/7.",
                  en: "Fields marked * are required. We reply during business hours and handle emergencies 24/7.",
                })}
              </p>
              <div className="mt-8">
                <QuoteForm />
              </div>
            </div>
          </Reveal>

          <div className="space-y-6 lg:col-span-5">
            <Reveal delay={80}>
              <div className="rounded-[1.5rem] bg-ink p-7">
                <p className="eyebrow text-accent">{t(ui.phone)}</p>
                <div className="mt-4 space-y-3">
                  {site.phones.map((phone) => (
                    <a
                      key={phone.tel}
                      href={`tel:${phone.tel}`}
                      className="flex items-center gap-3 font-display text-xl font-bold text-white transition-colors hover:text-accent"
                    >
                      <Phone className="h-4 w-4 text-accent" />
                      (+506) {phone.label}
                    </a>
                  ))}
                </div>
                <a
                  href={whatsappLink(waText)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-accent mt-7 w-full"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t(ui.whatsapp)}
                </a>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="space-y-5 rounded-[1.5rem] border border-hairline p-7">
                <div className="flex gap-4">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent-deep" />
                  <div>
                    <p className="eyebrow text-muted">{t(ui.emailLabel)}</p>
                    <a
                      href={`mailto:${site.email}`}
                      className="mt-1 block font-display font-bold underline decoration-accent decoration-2 underline-offset-4"
                    >
                      {site.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-deep" />
                  <div>
                    <p className="eyebrow text-muted">{t(ui.serviceArea)}</p>
                    <p className="mt-1 text-sm">{t(ui.serviceAreaValue)}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-accent-deep" />
                  <div>
                    <p className="eyebrow text-muted">{t(ui.hours)}</p>
                    <p className="mt-1 text-sm">{t(ui.hoursValue)}</p>
                  </div>
                </div>

                <div className="border-t border-hairline pt-5">
                  <p className="eyebrow text-muted">{t(ui.followUs)}</p>
                  <div className="mt-3 flex gap-3">
                    <a
                      href={site.facebook}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Facebook"
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-hairline transition-colors hover:border-ink hover:bg-ink hover:text-accent"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href={site.instagram}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-hairline transition-colors hover:border-ink hover:bg-ink hover:text-accent"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-[1.5rem] bg-accent p-7">
                <p className="font-display text-lg font-bold text-ink">
                  {t({ es: "¿Es una emergencia?", en: "Is it an emergency?" })}
                </p>
                <p className="mt-2 text-sm text-ink/80">
                  {t({
                    es: "Llámenos directamente. Coordinamos movilización de equipo fuera de horario y fines de semana.",
                    en: "Call us directly. We coordinate equipment mobilization after hours and on weekends.",
                  })}
                </p>
                <a href={`tel:${site.phones[0]?.tel}`} className="btn btn-ink mt-5 w-full">
                  <Phone className="h-4 w-4" />
                  {t(ui.call)}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
