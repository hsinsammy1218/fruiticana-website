import type { Metadata } from "next";
import Image from "next/image";
import type { SVGProps } from "react";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/ui/Logo";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Fruiticana by email, phone, or mail: fruiticana1@hotmail.com, 203-709-0992, 16 Pleasant St, Waterbury, CT 06706.",
  alternates: { canonical: "/contact" },
};

const FRUIT_HEART_SRC = "/images/brand/fruit-heart-logo.webp";

type ContactRow = {
  label: string;
  value: string | null;
  href?: string;
  icon: "email" | "phone" | "address";
};

const contactRows: ContactRow[] = [
  {
    label: "Email",
    value: site.contact.email,
    href: site.contact.email ? `mailto:${site.contact.email}` : undefined,
    icon: "email",
  },
  {
    label: "Phone",
    value: site.contact.phone,
    href: site.contact.phone
      ? `tel:+1${site.contact.phone.replace(/\D/g, "")}`
      : undefined,
    icon: "phone",
  },
  {
    label: "Address",
    value: site.contact.address,
    icon: "address",
  },
];

const iconBase = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function EmailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconBase} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconBase} {...props}>
      <path d="M8 3h3l1.5 4.5-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2L22 14v3a2 2 0 0 1-2 2A15 15 0 0 1 5 7a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

function PinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconBase} {...props}>
      <path d="M12 21s-7-5.2-7-11a7 7 0 1 1 14 0c0 5.8-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

const icons = {
  email: EmailIcon,
  phone: PhoneIcon,
  address: PinIcon,
} as const;

export default function ContactPage() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden"
    >
      {/* Packaging wash: yellow → lime → moss */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background: `
            radial-gradient(ellipse 70% 55% at 12% 18%, rgba(252, 225, 74, 0.95) 0%, transparent 58%),
            radial-gradient(ellipse 55% 50% at 88% 12%, rgba(255, 140, 0, 0.28) 0%, transparent 52%),
            radial-gradient(ellipse 60% 55% at 78% 78%, rgba(193, 0, 24, 0.16) 0%, transparent 55%),
            linear-gradient(
              155deg,
              #fceb96 0%,
              #fce98d 24%,
              #eaf86c 52%,
              #c6e84a 78%,
              #9ed63f 100%
            )
          `,
        }}
      />

      {/* Soft fruit-dot pattern for atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.22]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 18% 72%, #c10018 0 0.35rem, transparent 0.4rem),
            radial-gradient(circle at 42% 28%, #ff8c00 0 0.28rem, transparent 0.33rem),
            radial-gradient(circle at 64% 64%, #7ec42a 0 0.4rem, transparent 0.45rem),
            radial-gradient(circle at 82% 36%, #c10018 0 0.22rem, transparent 0.27rem),
            radial-gradient(circle at 28% 46%, #ff8c00 0 0.2rem, transparent 0.25rem)
          `,
        }}
      />

      <Container className="relative grid min-h-[min(84svh,44rem)] items-center gap-8 py-12 sm:gap-10 sm:py-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] lg:gap-4 lg:py-16 xl:gap-6">
        <div className="relative z-10 max-w-2xl">
          <div className="hero-rise text-green-deep">
            <Logo asLink={false} size="hero" className="text-green-deep" />
          </div>

          <h1
            id="contact-heading"
            className="hero-rise hero-rise-delay-1 mt-6 font-display text-[clamp(2rem,5.2vw,3.4rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-green-deep"
          >
            Ways to reach us
          </h1>

          <p className="hero-rise hero-rise-delay-2 mt-4 max-w-lg text-lg leading-snug text-ink sm:text-xl">
            Email, call, or write — school questions go straight to Fruiticana in
            Waterbury, Connecticut.
          </p>

          <ul className="mt-8 list-none space-y-3 p-0 sm:mt-9 sm:space-y-3.5">
            {contactRows.map((row, index) => {
              const Icon = icons[row.icon];
              const value = row.value ?? "Coming soon";
              const shellClass = cn(
                "reveal flex w-full items-center gap-4 rounded-xl2 border border-green-deep/15 bg-lime/80 px-4 py-4 shadow-soft backdrop-blur-[2px] transition duration-300 sm:gap-5 sm:px-5 sm:py-5",
                row.href &&
                  "hover:-translate-y-0.5 hover:border-berry/40 hover:bg-card hover:shadow-hover",
              );

              return (
                <li
                  key={row.label}
                  className={shellClass}
                  style={{ transitionDelay: `${index * 70}ms` }}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
                      row.icon === "email" && "bg-berry text-on-deep",
                      row.icon === "phone" && "bg-orange text-green-deep",
                      row.icon === "address" && "bg-green-deep text-on-deep",
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-green-600">
                      {row.label}
                    </p>
                    <p className="mt-1 break-words font-display text-lg font-semibold leading-snug text-green-deep sm:text-xl">
                      {row.href ? (
                        <a
                          href={row.href}
                          className="rounded-sm underline-offset-4 transition hover:underline focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-green-deep"
                        >
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div
          className="hero-float relative mx-auto w-full max-w-[19rem] sm:max-w-[23rem] lg:-ml-4 lg:max-w-[26rem] lg:justify-self-end xl:max-w-[28rem]"
          aria-hidden="true"
        >
          <div className="pointer-events-none absolute inset-[8%] -z-10 rounded-full bg-[radial-gradient(circle,rgba(255,140,0,0.35),rgba(234,248,108,0.55)_42%,transparent_72%)]" />
          <div className="pointer-events-none absolute -left-6 top-10 h-24 w-24 rounded-full bg-berry/25 blur-2xl sm:h-28 sm:w-28" />
          <div className="pointer-events-none absolute -right-4 bottom-8 h-28 w-28 rounded-full bg-orange/30 blur-2xl sm:h-32 sm:w-32" />
          <Image
            src={FRUIT_HEART_SRC}
            alt=""
            width={1100}
            height={1069}
            priority
            sizes="(max-width: 1024px) 70vw, 448px"
            className="relative mx-auto h-auto w-full drop-shadow-[0_18px_40px_rgba(15,47,18,0.22)]"
          />
        </div>
      </Container>

      <div className="brand-bar" aria-hidden="true" />
    </section>
  );
}
