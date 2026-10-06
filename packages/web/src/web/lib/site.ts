/** Datos maestros de la empresa. Cambiar aquí actualiza todo el sitio. */
export const site = {
  name: "Grúas L&L S.A.",
  shortName: "Grúas L&L",
  legalName: "Grúas L&L Sociedad Anónima",
  domain: "https://www.gruaslyl.co.cr",
  email: "gruaslopezylopez@gmail.com",
  phones: [
    { label: "8820-4956", tel: "+50688204956" },
    { label: "8682-9321", tel: "+50686829321" },
    { label: "8403-5151", tel: "+50684035151" },
  ],
  whatsapp: "50688204956",
  facebook: "https://www.facebook.com/share/1BmBY7mjAR/?mibextid=wwXIfr",
  instagram: "https://www.instagram.com/gruas.lyl",
  foundedYear: 2013,
  capacities: ["5 - 10 T", "25 T", "55 T", "65 T"],
} as const;

export function whatsappLink(text: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
