import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({ component: Home });

const bookingUrl = 'https://l.bttr.to/Qgs5P';

const services = [
  {
    number: '01',
    title: 'Functional blood chemistry reviews',
    description:
      'A thoughtful look at your existing lab work through a functional wellness lens, helping you ask better questions and understand where extra support may be useful.',
  },
  {
    number: '02',
    title: 'Personalized supplement protocols',
    description:
      'Practical, individualized supplement guidance designed to complement your wider care plan and support the goals that matter most to you.',
  },
  {
    number: '03',
    title: 'Lifestyle coaching',
    description:
      'Compassionate coaching around food, sleep, movement, stress, and the small, sustainable shifts that help you feel more at home in your body.',
  },
  {
    number: '04',
    title: 'Blood sugar coaching',
    description:
      'Personalized education and daily-life strategies to support steadier energy, balanced habits, and a clearer understanding of your body’s patterns.',
  },
];

const credentials = [
  'Functional Medicine Certified Health Coach',
  'Master Blood Chem with Em Functional Blood Chemistry Course',
  'Preconception, Pregnancy, Postpartum Bloodwork Masterclass',
];

function Home() {
  return (
    <div className="min-h-screen bg-cream font-body text-black">
      <a
        href="#main-content"
        className="sr-only z-50 bg-cream px-4 py-3 text-black focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <Services />
        <About />
        <Credentials />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="border-b border-sage bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-x-5 px-5 py-4 sm:px-8 lg:grid-cols-[auto_1fr_auto] lg:px-12">
        <a
          href="#top"
          className="font-display text-lg uppercase tracking-[0.18em] sm:text-xl"
          aria-label="Kathleen Wyne Wellness, back to top"
        >
          Kathleen Wyne
          <span className="ml-2 text-sm lowercase italic tracking-[0.1em] text-sage">
            wellness
          </span>
        </a>

        <nav
          aria-label="Primary navigation"
          className="order-3 col-span-2 mt-4 border-t border-sage/40 pt-3 lg:order-none lg:col-span-1 lg:mt-0 lg:border-0 lg:pt-0"
        >
          <ul className="flex items-center justify-center gap-7 text-xs font-semibold uppercase tracking-[0.14em] sm:gap-10">
            <li>
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <a
          href={bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 rounded-full border border-black bg-mauve px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.12em] text-cream transition-colors hover:bg-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black sm:px-6 sm:py-3"
        >
          Book a consult
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="scroll-mt-20 bg-sage">
      <div className="mx-auto grid min-h-[calc(100svh-7.5rem)] max-w-7xl items-center gap-5 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-20">
        <div className="mx-auto w-full max-w-[29rem] lg:mx-0">
          <img
            src="/images/kathleen-wyne-wellness-logo.png"
            alt="Kathleen Wyne Wellness"
            width="813"
            height="813"
            className="h-auto w-full"
            fetchPriority="high"
          />
        </div>

        <div className="pb-6 text-center lg:pb-0 lg:pl-10 lg:text-left">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-cream">
            Functional wellness coaching
          </p>
          <h1 className="font-script text-6xl leading-[0.95] text-cream sm:text-7xl lg:text-[5.9rem]">
            Embrace a Healthier,
            <span className="relative mt-3 block">
              Happier You!
              <img
                aria-hidden="true"
                src="/images/swoosh.svg"
                className="absolute -bottom-3 left-1/2 h-3 w-[72%] -translate-x-1/2 lg:left-0 lg:translate-x-0"
              />
            </span>
          </h1>
          <p className="mx-auto mt-12 max-w-xl text-lg leading-8 lg:mx-0 lg:text-xl lg:leading-9">
            Are you struggling with chronic illness, fatigue, or anxiety and
            looking for answers? I’m here to walk with you on a path toward
            hope, greater understanding, and healing.
          </p>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="button-primary mt-8"
          >
            Book a Free Coaching Consult
          </a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="scroll-mt-8 bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Support shaped around you</p>
          <h2 className="section-title mt-3">Creating a safe place to heal</h2>
          <img
            aria-hidden="true"
            src="/images/swoosh.svg"
            className="mx-auto mt-1 h-3 w-56"
          />
          <p className="mt-8 text-lg leading-8">
            I support women navigating chronic illness, fatigue, postnatal
            depletion, anxiety, and depression with an approach that is
            personal, practical, and rooted in compassionate partnership.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-stone bg-stone md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="bg-cream p-7 sm:p-10">
              <p className="font-display text-sm font-semibold tracking-[0.2em] text-sage">
                {service.number}
              </p>
              <h3 className="mt-4 font-display text-3xl font-medium leading-tight sm:text-4xl">
                {service.title}
              </h3>
              <p className="mt-4 max-w-xl leading-7">{service.description}</p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-6 text-slateblue">
          Coaching is available online and in person in Northern California.
          We’ll talk through the best fit during your consultation.
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-8 bg-sage py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -left-4 -top-4 h-full w-full border border-cream sm:-left-6 sm:-top-6" />
          <img
            src="/images/kathleen-headshot.jpg"
            alt="Kathleen Wyne smiling outdoors"
            width="1067"
            height="1600"
            loading="lazy"
            className="relative aspect-[2/3] w-full object-cover"
          />
        </div>

        <div>
          <p className="eyebrow text-cream">Meet your coach</p>
          <h2 className="section-title mt-3 text-cream">Hi, I’m Kathleen!</h2>
          <img
            aria-hidden="true"
            src="/images/swoosh.svg"
            className="mt-1 h-3 w-48"
          />
          <div className="mt-8 space-y-5 text-lg leading-8">
            <p>
              I live in Northern California with my husband and son. I’m here to
              support you as you look for answers around chronic fatigue,
              miscarriage, depression, or anxiety—and help you take your next
              steps with greater clarity and confidence.
            </p>
            <p>
              My own healing journey began in 2016. As I overhauled my diet and
              lifestyle, I learned how powerful it can be to understand the root
              causes and patterns that may be holding us back from vibrant
              health.
            </p>
            <p>
              Today, I bring that lived experience together with specialized
              training to offer compassionate support, useful education, and
              realistic solutions that fit your life.
            </p>
          </div>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="button-secondary mt-8"
          >
            Let’s Talk
          </a>
        </div>
      </div>
    </section>
  );
}

function Credentials() {
  return (
    <section
      className="bg-mauve py-20 sm:py-24"
      aria-labelledby="credentials-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="eyebrow text-cream">Education &amp; training</p>
            <h2 id="credentials-heading" className="section-title mt-3">
              A grounded, informed approach
            </h2>
          </div>
          <ul className="divide-y divide-black border-y border-black">
            {credentials.map((credential, index) => (
              <li
                key={credential}
                className="flex gap-5 py-5 font-display text-2xl leading-tight sm:gap-8 sm:py-6 sm:text-3xl"
              >
                <span className="text-base font-semibold text-cream">
                  0{index + 1}
                </span>
                <span>{credential}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section
      className="grid bg-cream lg:grid-cols-2"
      aria-labelledby="consult-heading"
    >
      <div className="min-h-[24rem] lg:min-h-[42rem]">
        <img
          src="/images/botanical-background.jpg"
          alt="Olive branches glowing in warm evening light"
          width="2386"
          height="1592"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex items-center px-5 py-20 sm:px-12 sm:py-24 lg:px-20">
        <div className="max-w-xl">
          <p className="eyebrow">Your next step</p>
          <h2 id="consult-heading" className="section-title mt-3">
            You don’t have to figure it all out alone.
          </h2>
          <p className="mt-7 text-lg leading-8">
            A free coaching consultation is a relaxed place to share what you’ve
            been experiencing, ask questions, and see whether working together
            feels like the right fit.
          </p>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="button-primary mt-8"
          >
            Book a Free Coaching Consult
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="scroll-mt-8 bg-slateblue text-cream">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
        <div className="grid gap-10 border-b border-cream pb-12 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="font-display text-3xl uppercase tracking-[0.14em] sm:text-4xl">
              Kathleen Wyne
            </p>
            <p className="mt-1 font-display text-xl italic tracking-[0.18em]">
              wellness
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm sm:flex-row sm:gap-8">
            <a
              className="footer-link"
              href="mailto:kathleenwynewellness@gmail.com"
            >
              kathleenwynewellness@gmail.com
            </a>
            <a
              className="footer-link"
              href="https://instagram.com/kathleenwyne.wellness"
              target="_blank"
              rel="noreferrer"
            >
              @kathleenwyne.wellness
            </a>
          </div>
        </div>

        <div className="mt-8 grid gap-5 text-xs leading-5 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-3xl text-cream">
            Wellness coaching and educational content are not medical advice and
            are not a substitute for diagnosis or treatment from a qualified
            healthcare professional. Always consult your healthcare provider
            regarding medical concerns and changes to your care.
          </p>
          <p>© {new Date().getFullYear()} Kathleen Wyne Wellness</p>
        </div>
      </div>
    </footer>
  );
}
