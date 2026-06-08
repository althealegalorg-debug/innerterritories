import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Briefcase,
  Sparkles,
  Heart,
  Globe2,
  GraduationCap,
  Mail,
  Phone,
  CalendarDays,
  Instagram,
  Linkedin,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";
import logoAsset from "@/assets/logo.asset.json";
import heroAbstract from "@/assets/hero-abstract.jpg";
import aboutArchitecture from "@/assets/about-architecture.jpg";
import courseChronopathy from "@/assets/course-chronopathy.jpg";
import courseSomatic from "@/assets/course-somatic.jpg";
import courseGlobal from "@/assets/course-global.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Inner Territories — The body is the first territory of peace" },
      {
        name: "description",
        content:
          "A proprietary pedagogy integrating neuroscience, arts, and somatic practices to transform individuals and organizations from the inside out.",
      },
      { property: "og:title", content: "Inner Territories — Pedagogy & Peacebuilding" },
      {
        property: "og:description",
        content: "Peace begins within. Founded by Camila Salazar Forero.",
      },
    ],
  }),
  component: Landing,
});

const NAV = [
  { id: "about", label: "About" },
  { id: "methodology", label: "Methodology" },
  { id: "pillars", label: "Pillars" },
  { id: "academy", label: "Academy" },
  { id: "contact", label: "Contact" },
];

function Logo({ light = true }: { light?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-3 group">
      <img
        src={logoAsset.url}
        alt="Inner Territories"
        width={40}
        height={40}
        className="h-10 w-10 object-contain"
      />
      <span
        className="font-serif text-xl tracking-tight"
        style={{ color: light ? "var(--ivory)" : "var(--forest)" }}
      >
        Inner Territories
      </span>
    </a>
  );
}

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("reveal-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    el.querySelectorAll<HTMLElement>(".reveal").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

function Landing() {
  const ref = useReveal();
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={ref} id="top" className="bg-ivory text-ink">
      {/* NAV */}
      <header
        className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(13,40,24,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(247,243,237,0.08)" : "1px solid transparent",
        }}
      >
        <nav className="container-it flex items-center justify-between h-20">
          <Logo light />
          <ul className="hidden md:flex items-center gap-10">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className="text-[0.78rem] tracking-[0.18em] uppercase text-ivory/80 hover:text-gold transition-colors"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="md:hidden text-ivory"
            onClick={() => setNavOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {navOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
        {navOpen && (
          <div className="md:hidden bg-forest border-t border-ivory/10">
            <ul className="container-it py-6 space-y-4">
              {NAV.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    onClick={() => setNavOpen(false)}
                    className="block text-sm tracking-[0.18em] uppercase text-ivory/80"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ backgroundColor: "var(--forest)" }}
      >
        <img
          src={heroAbstract}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 70% 40%, rgba(29,106,74,0.35), transparent 60%), linear-gradient(180deg, rgba(13,40,24,0.5), rgba(13,40,24,0.95))",
          }}
        />
        <div className="container-it relative z-10 pt-32 pb-24">
          <div className="max-w-4xl">
            <p className="eyebrow text-gold fade-in-up" style={{ animationDelay: "0ms" }}>
              Global Pedagogy · Peacebuilding · Est. 2018
            </p>
            <h1
              className="mt-8 font-serif text-ivory text-[2.6rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.04] tracking-[-0.015em] fade-in-up"
              style={{ animationDelay: "120ms", fontWeight: 300 }}
            >
              The body is the first
              <br />
              <em className="italic text-gold/95 font-light">territory of peace.</em>
            </h1>
            <div
              className="mt-10 hairline fade-in-up"
              style={{ animationDelay: "260ms" }}
            />
            <p
              className="mt-8 max-w-2xl text-ivory/75 text-lg leading-relaxed fade-in-up"
              style={{ animationDelay: "320ms" }}
            >
              A proprietary pedagogy integrating neuroscience, arts, and somatic practices to
              transform individuals and organizations from the inside out.
            </p>
            <div
              className="mt-12 flex flex-wrap items-center gap-6 fade-in-up"
              style={{ animationDelay: "440ms" }}
            >
              <a href="#methodology" className="btn btn-gold">
                Discover the Methodology
                <ArrowUpRight size={16} />
              </a>
              <span className="text-ivory/60 font-serif italic text-lg">
                Peace begins within.
              </span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 z-10">
          <div className="container-it flex items-center justify-between text-[0.7rem] tracking-[0.24em] uppercase text-ivory/40">
            <span>Inner Territories</span>
            <span className="hidden md:inline">Bogotá · Miami · Global</span>
            <span>Scroll ↓</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 md:py-40" style={{ backgroundColor: "var(--ivory)" }}>
        <div className="container-it grid md:grid-cols-12 gap-12 md:gap-20 items-start">
          <div className="md:col-span-5 reveal md:sticky md:top-32">
            <p className="eyebrow" style={{ color: "var(--forest-2)" }}>
              01 — Foundation
            </p>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-forest leading-[1.05]" style={{ color: "var(--forest)" }}>
              An institutional pedagogy, lived in the field.
            </h2>
            <div className="mt-8 hairline" />
            <div className="mt-12 aspect-[4/5] overflow-hidden rounded-[4px]">
              <img
                src={aboutArchitecture}
                alt="Architectural form"
                width={1024}
                height={1280}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-7 md:pt-16 reveal">
            <p className="font-serif text-2xl md:text-[1.7rem] leading-[1.5] text-ink/90">
              Founded by{" "}
              <span className="italic" style={{ color: "var(--forest-2)" }}>
                Camila Salazar Forero
              </span>{" "}
              — lawyer, historian, and Master in Conflict, Memory, and Peace.
            </p>
            <p className="mt-8 text-base leading-[1.8] text-ink/75">
              Since 2018, this proprietary methodology unifies neuroscience, artistic practices,
              meditative-somatic approaches, and philosophy to transform individuals and
              organizations. Born from years of hands-on field experience, our pedagogy is not
              mere theory: it is lived evidence, proven in real territories where humanity needs
              it most.
            </p>
            <p className="mt-6 text-base leading-[1.8] text-ink/75">
              We believe that lasting peace, genuine well-being, and peak human performance always
              begin in the same place: the body.
            </p>

            <div className="mt-14 grid grid-cols-3 gap-8 border-t border-ink/10 pt-10">
              {[
                { k: "2018", v: "Founded" },
                { k: "4", v: "Continents" },
                { k: "7+", v: "Field domains" },
              ].map((s) => (
                <div key={s.k}>
                  <div
                    className="font-serif text-4xl md:text-5xl"
                    style={{ color: "var(--forest)" }}
                  >
                    {s.k}
                  </div>
                  <div className="mt-2 eyebrow text-ink/60">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section
        id="methodology"
        className="py-28 md:py-40 border-t border-ink/10"
        style={{ backgroundColor: "var(--ivory)" }}
      >
        <div className="container-it">
          <div className="max-w-3xl reveal">
            <p className="eyebrow" style={{ color: "var(--forest-2)" }}>
              02 — Empirical Evidence
            </p>
            <h2
              className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]"
              style={{ color: "var(--forest)" }}
            >
              Proven Field Experience & Empirical Evidence
            </h2>
            <div className="mt-8 hairline" />
            <p className="mt-8 text-lg text-ink/75 leading-relaxed">
              A decade of fieldwork across continents, communities, institutions, and conflict
              zones. Each engagement refines a single method — embodied, replicable, measurable.
            </p>
          </div>

          <ol className="mt-20 divide-y divide-ink/10 border-y border-ink/10">
            {[
              {
                y: "2018",
                t: "Women's Healing Network",
                d: "Theater-therapy programs with women survivors of sexual violence in armed conflicts.",
              },
              {
                y: "India",
                t: "Rural & Indigenous Communities",
                d: "Female empowerment and sexual/reproductive rights workshops across rural India.",
              },
              {
                y: "Dharamsala",
                t: "Tibetan Refugee Monks",
                d: "Peacebuilding workshops with monastic communities in exile.",
              },
              {
                y: "Carceral",
                t: "Penitentiary Centers",
                d: "Somatic transformation and rehabilitation projects executed inside prisons.",
              },
              {
                y: "Elder",
                t: "Nursing Homes & Elderly Care",
                d: "Somatic and emotional regulation methodologies applied in long-term care.",
              },
              {
                y: "Schools",
                t: "Voces por la Paz",
                d: "Peace education, child rights protection, and prevention of forced recruitment.",
              },
              {
                y: "Corporate",
                t: "Business Organizations",
                d: "Tailored programs unlocking peak performance through deep human well-being.",
              },
            ].map((row, i) => (
              <li key={row.t} className="reveal py-8 md:py-10 grid grid-cols-12 gap-6 group">
                <div
                  className="col-span-2 md:col-span-1 font-serif text-2xl md:text-3xl"
                  style={{ color: "var(--gold)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="col-span-10 md:col-span-3">
                  <p className="eyebrow text-ink/60">{row.y}</p>
                  <h3
                    className="mt-2 font-serif text-2xl md:text-[1.7rem]"
                    style={{ color: "var(--forest)" }}
                  >
                    {row.t}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-8 md:pl-8 md:border-l border-ink/10">
                  <p className="text-ink/75 leading-[1.8] text-base md:text-[1.02rem]">
                    {row.d}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PILLARS */}
      <section
        id="pillars"
        className="py-28 md:py-40"
        style={{ backgroundColor: "var(--forest)" }}
      >
        <div className="container-it">
          <div className="max-w-3xl reveal">
            <p className="eyebrow" style={{ color: "var(--gold)" }}>
              03 — Verticals
            </p>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-ivory leading-[1.05]">
              Our Pillars of Action
            </h2>
            <div className="mt-8 hairline" />
            <p className="mt-8 text-lg text-ivory/70 leading-relaxed">
              Five interconnected domains, one methodology — adapted with precision to every
              audience, scale, and territory.
            </p>
          </div>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ivory/10 border border-ivory/10">
            {[
              {
                tag: "01 · Corporate",
                accent: "#7F77DD",
                icon: Briefcase,
                title: "Corporate Wellness",
                sub: "Inner Territories for Business",
                text:
                  "Organizational well-being programs, B2B workshops, and keynotes. The professional role is merely an extension of the personal self — and the personal self must be cultivated from within to unlock true performance.",
              },
              {
                tag: "02 · Women",
                accent: "#D85A30",
                icon: Sparkles,
                title: "Gender & Female Chronopathy",
                sub: "Inner Territories for Women",
                text:
                  "Healing female chronopathy — the modern obsession with linear productivity — by using neuroscience and the menstrual cycle to our advantage. Hack the system and embrace our cyclic nature as a superpower.",
              },
              {
                tag: "03 · Family",
                accent: "#1D9E75",
                icon: Heart,
                title: "Childhood & Family",
                sub: "Inner Territories for Kids & Families",
                text:
                  "Emotional regulation and neuroscience for parents and children. Providing tools for new generations to know, understand, and inhabit their bodies consciously from an early age.",
              },
              {
                tag: "04 · Social",
                accent: "#185FA5",
                icon: Globe2,
                title: "Social Action & Humanitarian Impact",
                sub: "Inner Territories Social",
                text:
                  "Peacebuilding projects, human rights advocacy, and eradication of gender-based violence in partnership with international NGOs and Rotary International.",
              },
              {
                tag: "05 · Academy",
                accent: "#BA7517",
                icon: GraduationCap,
                title: "Digital Academy",
                sub: "Inner Territories Academy",
                text:
                  "Interdisciplinary global courses expanding across the founder's domains: country histories, world cultures, and tailored global travel consulting.",
              },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <article
                  key={c.title}
                  className="reveal group relative bg-forest p-10 md:p-12 flex flex-col transition-colors duration-500 hover:bg-[#0F2E1C]"
                >
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[3px]"
                    style={{ backgroundColor: c.accent }}
                  />
                  <div className="flex items-center justify-between">
                    <span
                      className="eyebrow"
                      style={{ color: c.accent, letterSpacing: "0.22em" }}
                    >
                      {c.tag}
                    </span>
                    <Icon size={20} className="text-ivory/40 group-hover:text-gold transition" />
                  </div>
                  <h3 className="mt-10 font-serif text-[1.9rem] md:text-[2.1rem] text-ivory leading-[1.1]">
                    {c.title}
                  </h3>
                  <p
                    className="mt-3 font-serif italic text-base"
                    style={{ color: c.accent }}
                  >
                    {c.sub}
                  </p>
                  <p className="mt-6 text-ivory/70 leading-[1.75] text-[0.95rem] flex-1">
                    {c.text}
                  </p>
                </article>
              );
            })}
            {/* fill last cell on lg */}
            <div className="hidden lg:block bg-forest p-12 relative">
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px]"
                style={{ backgroundColor: "var(--gold)" }}
              />
              <p className="eyebrow text-gold">Inner Territories</p>
              <p className="mt-10 font-serif text-3xl text-ivory leading-[1.15]">
                One method.
                <br />
                <em className="italic text-gold/90">Five territories.</em>
              </p>
              <p className="mt-6 text-ivory/60 text-sm leading-relaxed">
                Each pillar applies the same proprietary pedagogy — calibrated to its audience,
                scale, and stakes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMY */}
      <section id="academy" className="py-28 md:py-40" style={{ backgroundColor: "var(--ivory)" }}>
        <div className="container-it">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 reveal">
            <div className="max-w-2xl">
              <p className="eyebrow" style={{ color: "var(--forest-2)" }}>
                04 — Digital Academy
              </p>
              <h2
                className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]"
                style={{ color: "var(--forest)" }}
              >
                Start Your Transformation
              </h2>
              <div className="mt-8 hairline" />
            </div>
            <p className="md:max-w-sm text-ink/70 leading-relaxed">
              World-class, interdisciplinary programs — bilingual, science-led, and built for
              global practitioners.
            </p>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-8">
            {[
              {
                img: courseChronopathy,
                tag: "Neuroscience · Women",
                title: "Female Chronopathy & Neuroscience",
                desc:
                  "How to use your cycle to your advantage — power posing, brain hacking, and glimmers.",
                cta: "Join the Waitlist",
              },
              {
                img: courseSomatic,
                tag: "Somatic · Bilingual",
                title: "Emotional Regulation & Somatic Arts",
                desc:
                  "A bilingual framework designed for mothers, children, and conscious upbringing.",
                cta: "Learn More",
              },
              {
                img: courseGlobal,
                tag: "History · Culture",
                title: "Global History, Culture & Travel",
                desc:
                  "Interdisciplinary digital courses and e-books exploring global history and heritage.",
                cta: "Join the Waitlist",
              },
            ].map((c) => (
              <article
                key={c.title}
                className="reveal group flex flex-col bg-white/40 border border-ink/10 rounded-[4px] overflow-hidden hover:border-forest/40 transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-1">
                  <p className="eyebrow text-ink/55">{c.tag}</p>
                  <h3
                    className="mt-5 font-serif text-[1.75rem] leading-[1.15]"
                    style={{ color: "var(--forest)" }}
                  >
                    {c.title}
                  </h3>
                  <p className="mt-4 text-ink/70 leading-[1.7] text-[0.95rem] flex-1">
                    {c.desc}
                  </p>
                  <a href="#contact" className="mt-8">
                    <button className="btn btn-outline-ink w-full" style={{ borderColor: "var(--gold)", color: "var(--forest)" }}>
                      {c.cta}
                      <ArrowUpRight size={14} />
                    </button>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-28 md:py-40 relative overflow-hidden"
        style={{ backgroundColor: "var(--forest)" }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(212,175,55,0.18), transparent 45%), radial-gradient(circle at 80% 70%, rgba(29,106,74,0.4), transparent 50%)",
          }}
        />
        <div className="container-it relative grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7 reveal">
            <p className="eyebrow text-gold">05 — Trabajemos Juntos</p>
            <h2 className="mt-6 font-serif text-5xl md:text-6xl lg:text-[5rem] text-ivory leading-[1.02]">
              Let's Work
              <br />
              <em className="italic text-gold/95">Together.</em>
            </h2>
            <div className="mt-8 hairline" />
            <p className="mt-8 max-w-xl text-ivory/70 text-lg leading-relaxed">
              For partnerships, institutional inquiries, keynotes, and bespoke programs across
              corporate, social, and educational territories.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <a href="mailto:theinnerterritories@gmail.com" className="btn btn-gold">
                <Mail size={16} /> Contact Us via Email
              </a>
              <a
                href="https://calendly.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-gold"
              >
                <CalendarDays size={16} /> Schedule a Consultation
              </a>
            </div>
          </div>

          <div className="md:col-span-5 md:pt-4 reveal">
            <div className="border border-ivory/15 rounded-[4px] p-8 md:p-10 backdrop-blur-sm bg-forest/40">
              <p className="eyebrow text-ivory/50">Direct Contact</p>
              <ul className="mt-8 space-y-6">
                <li className="flex items-start gap-4">
                  <Mail size={18} className="text-gold mt-1 shrink-0" />
                  <div>
                    <p className="eyebrow text-ivory/40">Email</p>
                    <a
                      href="mailto:theinnerterritories@gmail.com"
                      className="mt-1 block font-serif text-ivory text-xl hover:text-gold transition"
                    >
                      theinnerterritories@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone size={18} className="text-gold mt-1 shrink-0" />
                  <div>
                    <p className="eyebrow text-ivory/40">Phone</p>
                    <a
                      href="tel:+13058039665"
                      className="mt-1 block font-serif text-ivory text-xl hover:text-gold transition"
                    >
                      +1 305 803 9665
                    </a>
                  </div>
                </li>
              </ul>
              <div className="mt-10 pt-8 border-t border-ivory/10 flex items-center gap-4">
                <span className="eyebrow text-ivory/40">Follow</span>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 inline-flex items-center justify-center border border-ivory/20 text-ivory/80 hover:text-forest hover:bg-gold hover:border-gold transition rounded-[4px]"
                  >
                    <Instagram size={16} />
                  </a>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 inline-flex items-center justify-center border border-ivory/20 text-ivory/80 hover:text-forest hover:bg-gold hover:border-gold transition rounded-[4px]"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-12 border-t border-ivory/10"
        style={{ backgroundColor: "var(--forest)" }}
      >
        <div className="container-it grid grid-cols-1 md:grid-cols-3 items-center gap-6 text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <Logo light />
          </div>
          <p className="font-serif italic text-ivory/70 text-center">
            Inner Territories · <span className="text-gold">Peace begins within.</span>
          </p>
          <div className="flex gap-3 justify-center md:justify-end">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 inline-flex items-center justify-center border border-ivory/20 text-ivory/70 hover:text-forest hover:bg-gold hover:border-gold transition rounded-[4px]"
            >
              <Instagram size={14} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 inline-flex items-center justify-center border border-ivory/20 text-ivory/70 hover:text-forest hover:bg-gold hover:border-gold transition rounded-[4px]"
            >
              <Linkedin size={14} />
            </a>
          </div>
        </div>
        <p className="container-it mt-8 text-[0.7rem] tracking-[0.22em] uppercase text-ivory/30 text-center">
          © {new Date().getFullYear()} Inner Territories · All rights reserved
        </p>
      </footer>
    </div>
  );
}
