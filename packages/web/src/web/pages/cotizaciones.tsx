import { KeyRound, Loader2, Lock, MessageCircle, Phone, RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";
import { useI18n } from "../lib/i18n";
import { site, whatsappLink } from "../lib/site";
import { useLeads } from "../queries/leads";

/** Panel interno: solicitudes recibidas desde el sitio. No indexable. */
export default function CotizacionesPage() {
  const { t, lang } = useI18n();
  const [input, setInput] = useState("");
  const [passcode, setPasscode] = useState("");
  const leads = useLeads(passcode, passcode.length > 0);

  useEffect(() => {
    document.title = `${t({ es: "Solicitudes recibidas", en: "Received requests" })} | ${site.shortName}`;
    let meta = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "robots");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", "noindex, nofollow");
    return () => meta?.setAttribute("content", "index, follow");
  }, [t]);

  const formatter = new Intl.DateTimeFormat(lang === "es" ? "es-CR" : "en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const authed = passcode.length > 0 && !leads.isError;

  return (
    <section className="min-h-screen bg-bone pb-20 pt-32 md:pt-40">
      <div className="container-x">
        <p className="eyebrow text-accent-deep">
          {t({ es: "Panel interno", en: "Internal panel" })}
        </p>
        <h1 className="mt-3 text-[clamp(1.8rem,4vw,2.8rem)]">
          {t({ es: "Solicitudes de cotización", en: "Quote requests" })}
        </h1>
        <p className="mt-3 max-w-2xl text-muted">
          {t({
            es: "Todas las solicitudes enviadas desde el formulario del sitio, de la más reciente a la más antigua.",
            en: "Every request submitted through the website form, newest first.",
          })}
        </p>

        {!authed ? (
          <form
            className="mt-10 max-w-md rounded-[1.5rem] border border-hairline bg-white p-7"
            onSubmit={(event) => {
              event.preventDefault();
              setPasscode(input.trim());
            }}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink">
              <Lock className="h-5 w-5 text-accent" />
            </span>
            <label
              htmlFor="passcode"
              className="mt-5 block font-display text-xs font-bold uppercase tracking-wider text-muted"
            >
              {t({ es: "Código de acceso", en: "Access code" })}
            </label>
            <input
              id="passcode"
              type="password"
              autoComplete="current-password"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              className="mt-2 w-full rounded-xl border border-hairline bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-ink"
              placeholder="••••••••"
            />
            {leads.isError ? (
              <p className="mt-3 text-sm font-semibold text-red-600">
                {t({ es: "Código incorrecto.", en: "Incorrect code." })}
              </p>
            ) : null}
            <button type="submit" className="btn btn-ink mt-6 w-full">
              <KeyRound className="h-4 w-4" />
              {t({ es: "Entrar", en: "Enter" })}
            </button>
          </form>
        ) : (
          <div className="mt-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="font-display text-sm font-bold text-muted">
                {leads.data
                  ? `${leads.data.length} ${t({ es: "solicitudes", en: "requests" })}`
                  : t({ es: "Cargando…", en: "Loading…" })}
              </p>
              <button
                type="button"
                onClick={() => leads.refetch()}
                className="btn btn-outline"
                disabled={leads.isFetching}
              >
                {leads.isFetching ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <RefreshCw className="h-4 w-4" />
                )}
                {t({ es: "Actualizar", en: "Refresh" })}
              </button>
            </div>

            {leads.isLoading ? (
              <div className="mt-8 flex items-center gap-3 text-muted">
                <Loader2 className="h-5 w-5 animate-spin" />
                {t({ es: "Cargando solicitudes…", en: "Loading requests…" })}
              </div>
            ) : leads.data && leads.data.length === 0 ? (
              <div className="mt-8 rounded-[1.25rem] border border-hairline bg-white p-8 text-center text-muted">
                {t({
                  es: "Todavía no hay solicitudes registradas.",
                  en: "No requests registered yet.",
                })}
              </div>
            ) : (
              <div className="mt-8 space-y-4">
                {leads.data?.map((lead) => (
                  <article
                    key={lead.id}
                    className="rounded-[1.25rem] border border-hairline bg-white p-6"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h2 className="font-display text-lg">
                          {lead.name}
                          {lead.company ? (
                            <span className="text-muted"> · {lead.company}</span>
                          ) : null}
                        </h2>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted">
                          {formatter.format(new Date(lead.createdAt))} · {lead.lang.toUpperCase()}
                        </p>
                      </div>
                      <span className="rounded-full bg-accent px-3 py-1 font-display text-xs font-extrabold text-ink">
                        {lead.service}
                      </span>
                    </div>

                    <dl className="mt-5 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
                      <div className="flex gap-2">
                        <dt className="text-muted">{t({ es: "Teléfono", en: "Phone" })}:</dt>
                        <dd className="font-semibold">{lead.phone}</dd>
                      </div>
                      {lead.email ? (
                        <div className="flex gap-2">
                          <dt className="text-muted">{t({ es: "Correo", en: "Email" })}:</dt>
                          <dd className="font-semibold break-all">{lead.email}</dd>
                        </div>
                      ) : null}
                      {lead.capacity ? (
                        <div className="flex gap-2">
                          <dt className="text-muted">{t({ es: "Capacidad", en: "Capacity" })}:</dt>
                          <dd className="font-semibold">{lead.capacity}</dd>
                        </div>
                      ) : null}
                      {lead.location ? (
                        <div className="flex gap-2">
                          <dt className="text-muted">{t({ es: "Ubicación", en: "Location" })}:</dt>
                          <dd className="font-semibold">{lead.location}</dd>
                        </div>
                      ) : null}
                      {lead.date ? (
                        <div className="flex gap-2">
                          <dt className="text-muted">{t({ es: "Fecha", en: "Date" })}:</dt>
                          <dd className="font-semibold">{lead.date}</dd>
                        </div>
                      ) : null}
                    </dl>

                    {lead.message ? (
                      <p className="mt-4 rounded-xl bg-bone p-4 text-sm leading-relaxed text-muted">
                        {lead.message}
                      </p>
                    ) : null}

                    <div className="mt-5 flex flex-wrap gap-3">
                      <a href={`tel:${lead.phone}`} className="btn btn-outline">
                        <Phone className="h-4 w-4" />
                        {t({ es: "Llamar", en: "Call" })}
                      </a>
                      <a
                        href={whatsappLink(
                          `Hola ${lead.name}, le escribimos de ${site.name} por su solicitud de cotización.`,
                        ).replace(
                          `wa.me/${site.whatsapp}`,
                          `wa.me/${lead.phone.replace(/\D/g, "").length > 8 ? lead.phone.replace(/\D/g, "") : `506${lead.phone.replace(/\D/g, "")}`}`,
                        )}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-ink"
                      >
                        <MessageCircle className="h-4 w-4" />
                        WhatsApp
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
