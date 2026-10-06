import { Clock3, Facebook, Instagram, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { footer, nav, ui } from "../lib/content";
import { useI18n } from "../lib/i18n";
import { site, whatsappLink } from "../lib/site";

function LangSwitch({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useI18n();
  return (
    <div
      className={`flex items-center gap-1 rounded-full border border-white/20 p-1 ${compact ? "" : "shrink-0"}`}
    >
      {(["es", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          className={`rounded-full px-2.5 py-0.5 font-display text-xs font-bold uppercase tracking-wider transition-colors ${
            lang === code ? "bg-accent text-ink" : "text-white/70 hover:text-white"
          }`}
          aria-label={code === "es" ? "Español" : "English"}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

function Header() {
  const { t } = useI18n();
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="hidden bg-ink-soft/95 py-2 text-xs text-steel backdrop-blur md:block">
        <div className="container-x flex items-center justify-between gap-6">
          <p className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-accent" />
            {t(ui.serviceAreaValue)}
          </p>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2">
              <Clock3 className="h-3.5 w-3.5 text-accent" />
              {t(ui.availability)}
            </span>
            {site.phones.map((phone) => (
              <a
                key={phone.tel}
                href={`tel:${phone.tel}`}
                className="flex items-center gap-2 font-semibold text-white transition-colors hover:text-accent"
              >
                <Phone className="h-3.5 w-3.5 text-accent" />
                {phone.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`transition-colors duration-300 ${scrolled || location === "/cotizaciones" ? "bg-ink/95 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur" : "bg-gradient-to-b from-black/70 to-transparent"}`}
      >
        <div className="container-x flex h-20 items-center justify-between gap-4 md:h-24">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt={site.name}
              className="h-16 w-auto md:h-[4.5rem]"
              width="87"
              height="80"
            />
            <span className="sr-only">{site.name}</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active = location === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`rounded-full px-3.5 py-2 font-display text-sm font-semibold transition-colors ${
                    active ? "text-accent" : "text-white/85 hover:text-accent"
                  }`}
                >
                  {t(item.label)}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <LangSwitch />
            </div>
            <Link to="/contacto" className="btn btn-accent hidden sm:inline-flex">
              {t(ui.quoteShort)}
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white lg:hidden"
              aria-label="Menu"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div className="border-t border-ink-line bg-ink/98 px-5 pb-6 pt-4 backdrop-blur lg:hidden">
          <nav className="flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="border-b border-white/10 py-3 font-display text-base font-semibold text-white"
              >
                {t(item.label)}
              </Link>
            ))}
          </nav>
          <div className="mt-5 flex items-center justify-between gap-3">
            <LangSwitch compact />
            <Link to="/contacto" className="btn btn-accent flex-1">
              {t(ui.quoteShort)}
            </Link>
          </div>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-steel">
            {site.phones.map((phone) => (
              <a key={phone.tel} href={`tel:${phone.tel}`} className="font-semibold text-white">
                {phone.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Footer() {
  const { t } = useI18n();
  return (
    <footer className="relative overflow-hidden bg-ink pt-16 pb-8 text-steel">
      <div className="grain" />
      <div className="container-x relative">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src="/images/logo.png"
              alt={site.name}
              className="h-12 w-auto"
              width="180"
              height="48"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">{t(footer.tagline)}</p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.facebook}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-accent hover:text-accent"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-accent hover:text-accent"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="eyebrow mb-5 text-white">{t(footer.quickLinks)}</h3>
            <ul className="space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="transition-colors hover:text-accent">
                    {t(item.label)}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contacto" className="transition-colors hover:text-accent">
                  {t(ui.contact)}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-5 text-white">{t(ui.contact)}</h3>
            <ul className="space-y-3 text-sm">
              {site.phones.map((phone) => (
                <li key={phone.tel}>
                  <a
                    href={`tel:${phone.tel}`}
                    className="flex items-center gap-2 transition-colors hover:text-accent"
                  >
                    <Phone className="h-4 w-4 text-accent" />
                    (+506) {phone.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <Mail className="h-4 w-4 text-accent" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-accent" />
                {t(ui.serviceAreaValue)}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-5 text-white">{t(ui.hours)}</h3>
            <p className="text-sm">{t(ui.hoursValue)}</p>
            <a
              href={whatsappLink(
                "Hola Grúas L&L, necesito información sobre alquiler de grúas.",
              )}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-accent mt-6 w-full"
            >
              {t(ui.whatsapp)}
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. {t(footer.rights)}
          </p>
          <p className="text-steel/70">
            {t({
              es: "Alquiler de grúas telescópicas y transporte de cargas · Costa Rica",
              en: "Telescopic crane rental and cargo transport · Costa Rica",
            })}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FloatingActions() {
  const { t } = useI18n();
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <a
        href={`tel:${site.phones[0]?.tel}`}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white shadow-lg transition-transform hover:-translate-y-1 sm:hidden"
        aria-label={t(ui.call)}
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={whatsappLink("Hola Grúas L&L, quisiera cotizar un servicio de grúa.")}
        target="_blank"
        rel="noreferrer noopener"
        className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-display text-sm font-bold text-[#08331b] shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition-transform hover:-translate-y-1"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.79-1.67-2.09-.17-.3-.02-.46.13-.61.15-.15.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.62-1.5-.85-2.05-.22-.53-.45-.46-.62-.47h-.53c-.2 0-.5.07-.75.37-.27.3-1.02 1-1.02 2.42s1.04 2.8 1.19 3c.15.2 2.05 3.28 5.02 4.47 2.47.98 2.97.78 3.5.73.53-.05 1.72-.7 1.97-1.38.25-.67.25-1.25.17-1.37-.07-.12-.27-.19-.57-.34zM12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.94.56 3.75 1.53 5.28L2 22l5.02-1.68a9.8 9.8 0 0 0 5.02 1.37c5.44 0 9.84-4.4 9.84-9.85C21.88 6.4 17.48 2 12.04 2z" />
        </svg>
        WhatsApp
      </a>
    </div>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location]);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
