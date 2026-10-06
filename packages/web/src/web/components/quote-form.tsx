import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useState } from "react";
import { useCreateLead } from "../queries/leads";
import { contact, fleet, services } from "../lib/content";
import { useI18n } from "../lib/i18n";
import { whatsappLink } from "../lib/site";

const inputClass =
  "w-full rounded-xl border border-hairline bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-ink";

const labelClass = "mb-1.5 block font-display text-xs font-bold uppercase tracking-wider text-muted";

interface FormState {
  name: string;
  company: string;
  phone: string;
  email: string;
  service: string;
  capacity: string;
  location: string;
  date: string;
  message: string;
}

const emptyForm: FormState = {
  name: "",
  company: "",
  phone: "",
  email: "",
  service: "",
  capacity: "",
  location: "",
  date: "",
  message: "",
};

export function QuoteForm() {
  const { t, lang } = useI18n();
  const createLead = useCreateLead();
  const [form, setForm] = useState<FormState>(emptyForm);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const f = contact.form;
  const serviceOptions = services.map((service) => t(service.title));

  const update = (key: keyof FormState) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const summary = [
    `${t(f.name)}: ${form.name}`,
    form.company ? `${t(f.company)}: ${form.company}` : null,
    `${t(f.phone)}: ${form.phone}`,
    `${t(f.service)}: ${form.service}`,
    form.capacity ? `${t(f.capacity)}: ${form.capacity}` : null,
    form.location ? `${t(f.location)}: ${form.location}` : null,
    form.date ? `${t(f.date)}: ${form.date}` : null,
    form.message ? `${t(f.message)}: ${form.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    if (!form.name.trim() || !form.phone.trim() || !form.service) {
      setError(t(f.required));
      return;
    }
    createLead.mutate(
      {
        name: form.name,
        company: form.company || undefined,
        phone: form.phone,
        email: form.email || undefined,
        service: form.service,
        capacity: form.capacity || undefined,
        location: form.location || undefined,
        date: form.date || undefined,
        message: form.message || undefined,
        lang,
      },
      {
        onSuccess: () => setDone(true),
        onError: () => setError(t(f.errorText)),
      },
    );
  };

  if (done) {
    return (
      <div className="rounded-[1.5rem] border border-hairline bg-bone p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-accent-deep" />
        <h3 className="mt-5 text-2xl">{t(f.successTitle)}</h3>
        <p className="mx-auto mt-3 max-w-md text-muted">{t(f.successText)}</p>
        <p className="mx-auto mt-6 max-w-md text-sm text-muted">{t(f.successWhatsapp)}</p>
        <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={whatsappLink(`Hola Grúas L&L, envié una solicitud desde el sitio:\n\n${summary}`)}
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-accent"
          >
            WhatsApp
          </a>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => {
              setForm(emptyForm);
              setDone(false);
            }}
          >
            {t(f.another)}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[1.5rem] border border-hairline bg-white p-6 shadow-[0_20px_60px_rgba(16,19,20,0.07)] md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="lead-name">
            {t(f.name)} *
          </label>
          <input
            id="lead-name"
            className={inputClass}
            value={form.name}
            onChange={(e) => update("name")(e.target.value)}
            autoComplete="name"
            required
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="lead-company">
            {t(f.company)}
          </label>
          <input
            id="lead-company"
            className={inputClass}
            value={form.company}
            onChange={(e) => update("company")(e.target.value)}
            autoComplete="organization"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="lead-phone">
            {t(f.phone)} *
          </label>
          <input
            id="lead-phone"
            className={inputClass}
            value={form.phone}
            onChange={(e) => update("phone")(e.target.value)}
            inputMode="tel"
            autoComplete="tel"
            placeholder="8888-8888"
            required
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="lead-email">
            {t(f.email)}
          </label>
          <input
            id="lead-email"
            className={inputClass}
            value={form.email}
            onChange={(e) => update("email")(e.target.value)}
            type="email"
            autoComplete="email"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="lead-service">
            {t(f.service)} *
          </label>
          <select
            id="lead-service"
            className={inputClass}
            value={form.service}
            onChange={(e) => update("service")(e.target.value)}
            required
          >
            <option value="">—</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="lead-capacity">
            {t(f.capacity)}
          </label>
          <select
            id="lead-capacity"
            className={inputClass}
            value={form.capacity}
            onChange={(e) => update("capacity")(e.target.value)}
          >
            <option value="">{t(f.capacityUnknown)}</option>
            {fleet.map((unit) => (
              <option key={unit.id} value={unit.capacity}>
                {unit.capacity}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="lead-location">
            {t(f.location)}
          </label>
          <input
            id="lead-location"
            className={inputClass}
            value={form.location}
            onChange={(e) => update("location")(e.target.value)}
            placeholder={t({ es: "Cantón, provincia", en: "City, province" })}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="lead-date">
            {t(f.date)}
          </label>
          <input
            id="lead-date"
            className={inputClass}
            value={form.date}
            onChange={(e) => update("date")(e.target.value)}
            type="date"
          />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="lead-message">
            {t(f.message)}
          </label>
          <textarea
            id="lead-message"
            className={`${inputClass} min-h-32 resize-y`}
            value={form.message}
            onChange={(e) => update("message")(e.target.value)}
            placeholder={t(f.messagePlaceholder)}
          />
        </div>
      </div>

      {error ? <p className="mt-4 text-sm font-semibold text-red-600">{error}</p> : null}

      <button
        type="submit"
        className="btn btn-ink mt-6 w-full sm:w-auto"
        disabled={createLead.isPending}
      >
        {createLead.isPending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {t(f.submitting)}
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            {t(f.submit)}
          </>
        )}
      </button>
    </form>
  );
}
