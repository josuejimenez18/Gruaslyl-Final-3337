interface PageHeroProps {
  eyebrow: string;
  title: string;
  text?: string;
  image?: string;
}

/** Encabezado oscuro para páginas internas. */
export function PageHero({ eyebrow, title, text, image = "/images/hero.jpg" }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-b-[2rem] bg-ink pb-16 pt-36 md:rounded-b-[3rem] md:pb-24 md:pt-44">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/80 to-ink" />
      <div className="grain" />
      <div className="container-x relative">
        <p className="eyebrow text-accent">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-[clamp(2.1rem,5.4vw,4rem)] text-white">{title}</h1>
        {text ? <p className="mt-6 max-w-2xl text-lg text-steel">{text}</p> : null}
        <div className="mt-10 h-1.5 w-28 hatch" />
      </div>
    </section>
  );
}
