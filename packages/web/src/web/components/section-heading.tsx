import { Reveal } from "./reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  text?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  tone = "light",
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const isDark = tone === "dark";
  return (
    <Reveal
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow ? (
        <p className={`eyebrow mb-4 ${isDark ? "text-accent" : "text-accent-deep"}`}>
          <span className="inline-block h-2 w-2 -translate-y-[2px] bg-accent mr-3" />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-[clamp(1.9rem,4vw,3.1rem)] ${isDark ? "text-white" : "text-foreground"}`}
      >
        {title}
      </h2>
      {text ? (
        <p className={`mt-5 text-lg ${isDark ? "text-steel" : "text-muted"}`}>{text}</p>
      ) : null}
    </Reveal>
  );
}
