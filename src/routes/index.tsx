import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import type { CSSProperties } from 'react';

export const Route = createFileRoute('/')({ component: Home });

const bookingUrl = 'https://l.bttr.to/Qgs5P';

const paths = [
  'Completely confused by your symptoms and how to get answers',
  'Stuck under years of chronic symptoms and jumping from protocol to protocol without results',
  'Just beginning your health journey and learning what your body needs to thrive',
  'On a GLP-1 and realizing you need some extra support',
  'Deep in the functional wellness world and ready to optimize your health or refine your game plan',
];

const credentials = [
  'FMCA Functional Medicine Certified Health Coach',
  'MBCE Functional Blood Chemistry Course',
  'GLP-1 Blueprint Course from Metabolic Fitness',
  'Preconception, Pregnancy, Postpartum Bloodwork Masterclass',
];

const testimonials = [
  {
    quote:
      'Kathleen is amazing!!! I’m at the eye specialist as SHE discovered that what I’ve been dealing with for 20+ years is BVD (Binocular Vision Disorder.) She was absolutely correct!!! Actually makes me want to cry that nobody figured this out sooner!',
    attribution: 'S.V.',
  },
  {
    quote:
      'I truly think everyone needs a Kathleen. She has so much experience with chronic illness and such a deep understanding of health. You’ll leave coaching sessions with her feeling heard, seen, cared for, and set up for the next step to really start living again!',
    attribution: 'Sarah P.',
  },
  {
    quote:
      'I would recommend her all day long as a health coach. I’m a challenging client. I have a high stress job and a busy life. She made a difference in my whole life, not just my diet. She honestly cares!!',
    attribution: 'Courtney W.',
  },
  {
    quote:
      'Kathleen was so easy to talk to and I was able to open up about many different struggles I was facing in my life. I saw many changes in myself and truly felt empowered to carry those tools with me. Kathleen was very supportive through the whole process and always available if I had any questions or needed additional encouragement.',
    attribution: 'Michelle A.',
  },
  {
    quote:
      'I cannot recommend Kathleen’s blood sugar reset group enough! I have always struggled with a fluctuating blood sugar level and with Kathleen’s oversight and expertise, I was finally able to figure out how to regulate it, learn what my body needs, and I gained helpful tools that will last me for life. The support and camaraderie amongst the group members was also invaluable. It’s always helpful to hear “me too” from another woman and not feel so alone.',
    attribution: 'Sarah S.',
  },
  {
    quote:
      'This Blood Sugar Reset was literally life-changing. I’m not exaggerating. I lived with eating anxiety for decades. I was fearful of low blood sugar episodes and would eat just by habit and not use hunger cues. It was life affirming for me to see data that proved to my brain and my body that I was in a safe blood sugar zone. I have always been at a set point that felt a little too heavy. This Blood Sugar Reset helped me take weight off of my midsection and I lost a few pounds.',
    attribution: 'Debbie G.',
  },
  {
    quote:
      'I recently completed Kathleen’s blood sugar reset program and it was very helpful towards my goals of creating long lasting healthy habits. I had been very curious to know why my body crashed so hard and why I felt so lazy, unmotivated, and lethargic. Post reset: I don’t crash as often, I avoid the foods that were proven to make my blood sugar spike, I exercise regularly, and I don’t go on my phone and meaninglessly scroll until 2 am anymore.',
    attribution: 'Jenn Piper',
  },
];

const offerings = [
  {
    title: 'Functional Medicine Health Coaching',
    subtitle: 'With the option for functional lab reviews',
    paragraphs: [
      'While I especially love working with individuals with chronic, complex health challenges and being a health detective alongside you, we can also cater health coaching to your unique needs and concerns.',
      'I’m also happy to help you optimize your health and longevity if you aren’t navigating specific symptoms. Let me know what you need, and we can chat about whether it is a good fit!',
    ],
  },
  {
    title: 'GLP-1 Health Coaching',
    paragraphs: [
      'No one should be on a GLP-1 without a health coach. Let’s monitor your progress, handle symptoms as they arise, maintain your healthy foundations, and take into account the deeper considerations everyone should be aware of when on a GLP-1!',
      'Please note that I do not prescribe or refer out for GLP-1 products, but I can support you as you work to manage your wellness while collaborating with your prescriber.',
    ],
  },
  {
    title: 'Preconception, Pregnancy & Postpartum Health Coaching',
    subtitle: 'Including planning',
    paragraphs: [
      'If you’re working on fertility health and planning ahead for a healthy pregnancy, dealing with pesky symptoms throughout your pregnancy and wondering what supplements or lifestyle tools you can actually utilize, or wanting to make a plan to be well and enjoy your postpartum, I would love to support you!',
      'I am versed in the unique optimal lab ranges of pregnancy and postpartum. I can also help you develop a care team if you’d like further support with fertility, pregnancy, or postpartum challenges.',
    ],
  },
  {
    title: 'Blood Sugar Coaching',
    paragraphs: [
      'Optimizing blood sugar is an absolutely foundational essential for everyone. You would be shocked to discover which healthy foods are spiking your blood sugar and contributing to symptoms such as anxiety, fatigue, brain fog, binge eating and weight gain, and hormonal imbalances.',
      'I will connect you with my favorite website for two glucose biosensors that last for 15 days each—similar to a continuous glucose monitor, but for non-diabetics. We will work together to track your specific data and patterns, identify what is throwing your blood sugar into an unhealthy roller coaster and why—it might not even be food—and pinpoint small, simple strategies to help keep your levels stable and balanced.',
    ],
  },
  {
    title: 'Group Coaching',
    paragraphs: [
      'Do you have a group that needs some extra support with their health? Reach out, and we can collaboratively make a plan for your unique needs. This is a great option for a few friends or as an additional employee offering to support wellness and function at work.',
      'I also have a prebuilt Energy Reset group program that focuses on utilizing continuous glucose monitor metrics for non-diabetics to optimize healthy eating, help restore vitality and function, and restore energy levels.',
    ],
  },
];

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Offerings', href: '#offerings' },
  { label: 'Pricing', href: '#coaching' },
  { label: 'Contact', href: '#contact' },
];

const shell = 'mx-auto w-full max-w-[86rem] px-5 sm:px-8 lg:px-12';

function stagger(index: number): CSSProperties {
  return { '--i': index } as CSSProperties;
}

function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-cream font-body text-ink">
      <a
        href="#main-content"
        className="sr-only z-50 bg-cream px-4 py-3 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <LeaveNotice />
      <Header />

      <main id="main-content">
        <Hero />
        <Credentials />
        <About />
        <StartingPoints />
        <Testimonials />
        <Offerings />
        <CoachingStructure />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function Arrow() {
  return (
    <span aria-hidden="true" className="arrow">
      →
    </span>
  );
}

/** A line-drawn olive sprig, echoing the logo mark. */
function Sprig({ className = '' }: { className?: string }) {
  const leaf = 'M0 0C12 -10 34 -10 48 0C34 10 12 10 0 0M0 0H48';
  const leaves = [
    { x: 46, y: 85, r: -62 },
    { x: 52, y: 83, r: 24 },
    { x: 90, y: 71, r: -58 },
    { x: 98, y: 68, r: 22 },
    { x: 136, y: 55, r: -56 },
    { x: 146, y: 52, r: 18 },
    { x: 183, y: 39, r: -50 },
    { x: 190, y: 36, r: 12 },
    { x: 228, y: 23, r: -20 },
  ];

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 290 130"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 96C70 80 150 50 232 22" />
      {leaves.map((item) => (
        <path
          key={`${item.x}-${item.y}`}
          d={leaf}
          transform={`translate(${item.x} ${item.y}) rotate(${item.r})`}
        />
      ))}
      <path d="M72 77c2 8 3 13 2 19" />
      <ellipse cx="73" cy="103" rx="6" ry="8" transform="rotate(-12 73 103)" />
      <path d="M160 47c3 8 5 12 5 18" />
      <ellipse cx="166" cy="73" rx="6" ry="8" transform="rotate(-16 166 73)" />
    </svg>
  );
}

/** A single hand-drawn underline stroke. */
function Swoosh({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 24"
      fill="none"
      preserveAspectRatio="none"
      className={`swoosh ${className}`}
    >
      <path
        d="M4 13C62 6 131 4 204 7c68 3 131 8 192 5-58 1-112 3-161 8"
        pathLength={1}
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function LeaveNotice() {
  return (
    <p className="bg-forest px-5 py-2.5 text-center text-[0.68rem] font-medium uppercase leading-5 tracking-[0.16em] text-cream">
      Maternity leave: mid-November 2026 through mid-February 2027
      <a
        href="#leave"
        className="ml-3 underline decoration-cream/50 hover:decoration-cream"
      >
        Details
      </a>
    </p>
  );
}

function Header() {
  return (
    <header className="top-0 z-40 border-b border-ink/10 bg-cream/85 backdrop-blur-md lg:sticky">
      <div
        className={`${shell} grid grid-cols-[1fr_auto] items-center gap-x-4 py-4 lg:grid-cols-[1fr_auto_1fr]`}
      >
        <a
          href="#top"
          className="w-fit font-display text-lg uppercase tracking-[0.2em] sm:text-xl"
          aria-label="Kathleen Wyne Wellness, back to top"
        >
          Kathleen Wyne
          <span className="ml-2 hidden text-base lowercase italic tracking-[0.12em] text-sage-deep sm:inline">
            wellness
          </span>
        </a>

        <nav
          aria-label="Primary navigation"
          className="order-3 col-span-2 mt-4 border-t border-ink/10 pt-3 lg:order-none lg:col-span-1 lg:mt-0 lg:border-0 lg:pt-0"
        >
          <ul className="flex items-center justify-between gap-3 text-[0.66rem] font-semibold uppercase tracking-[0.14em] sm:justify-center sm:gap-10 sm:text-[0.7rem] sm:tracking-[0.2em]">
            {navigation.map((item) => (
              <li key={item.href}>
                <a className="nav-link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="button button-small justify-self-end">
          Reach out
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative scroll-mt-24 overflow-hidden">
      <div aria-hidden="true" className="hero-wash" />

      <div
        className={`${shell} relative grid gap-16 pb-24 pt-12 sm:pt-16 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-20`}
      >
        <div className="lg:col-span-7 lg:pt-6">
          <p
            className="eyebrow eyebrow-rule rise text-sage-deep"
            style={stagger(0)}
          >
            Functional health coaching
          </p>

          <h1 className="hero-script rise mt-7 text-forest" style={stagger(1)}>
            Clarity, joy,
            <span className="relative ml-[0.3em] block w-fit whitespace-nowrap pb-[0.12em] sm:ml-[0.6em]">
              and direction
              <Swoosh className="absolute -bottom-1 left-0 h-[0.16em] w-full text-mauve" />
            </span>
          </h1>

          <h2
            className="rise mt-12 max-w-2xl font-display text-[2.1rem] leading-[1.08] sm:text-5xl lg:mt-14"
            style={stagger(2)}
          >
            Get free from being <em>stuck in symptoms.</em>
          </h2>

          <div
            className="rise mt-7 grid max-w-2xl gap-5 sm:grid-cols-[1.25fr_1fr] sm:gap-8"
            style={stagger(3)}
          >
            <p className="prose-body">
              Life is for living, not constant symptom stress. If your days are
              swallowed by appointments, random supplements, and endless
              dead-end advice, I’m here to help you cut through the noise.
            </p>
            <p className="border-l border-sage pl-5 leading-7 sm:self-start">
              One-on-one health coaching to help you focus your energy,
              understand your health, and figure out the next best steps for
              <strong> you</strong>.
            </p>
          </div>

          <div
            className="rise mt-10 flex flex-wrap items-center gap-x-8 gap-y-5"
            style={stagger(4)}
          >
            <a href="#contact" className="button">
              Reach out! <Arrow />
            </a>
            <a href="#about" className="text-link">
              Meet Kathleen <Arrow />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:col-span-5 lg:max-w-none lg:pl-6">
          <div className="relative">
            <div
              aria-hidden="true"
              className="arch fade-late absolute inset-0 translate-x-3 -translate-y-3 border border-sage sm:translate-x-5 sm:-translate-y-5"
            />
            <figure className="arch unveil relative aspect-[4/5] overflow-hidden bg-sage-soft">
              <img
                src="/images/hero-daiga-ellaby.jpg"
                alt="A woman gathering wildflowers in a sunlit meadow"
                width="1800"
                height="2700"
                className="parallax h-full w-full object-cover object-[50%_62%]"
                fetchPriority="high"
              />
            </figure>

            <a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Book a free coaching consultation"
              className="fade-late group absolute -bottom-10 -left-3 grid h-32 w-32 place-items-center rounded-full bg-forest text-cream shadow-[0_18px_40px_-18px_rgb(34_44_38/0.7)] transition-colors duration-300 hover:bg-mauve-deep sm:-left-10 sm:h-40 sm:w-40"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 200 200"
                className="badge-ring absolute inset-0 h-full w-full"
              >
                <defs>
                  <path
                    id="badge-circle"
                    d="M100 100m-74 0a74 74 0 1 1 148 0a74 74 0 1 1-148 0"
                  />
                </defs>
                <text
                  fill="currentColor"
                  fontSize="13.5"
                  fontWeight="600"
                  letterSpacing="3.2"
                  className="font-body uppercase"
                >
                  <textPath href="#badge-circle" textLength="458">
                    Book a free consultation ✦ Book a free consultation ✦
                  </textPath>
                </text>
              </svg>
              <span
                aria-hidden="true"
                className="font-display text-3xl transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:text-4xl"
              >
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Credentials() {
  return (
    <section
      className="bg-forest text-cream"
      aria-labelledby="credentials-heading"
    >
      <div
        className={`${shell} grid gap-10 py-16 lg:grid-cols-[0.85fr_3fr] lg:gap-14 lg:py-20`}
      >
        <div className="reveal">
          <p className="eyebrow text-mauve">Training &amp; background</p>
          <h2
            id="credentials-heading"
            className="mt-4 font-display text-4xl italic leading-[1.05] lg:text-[2.6rem]"
          >
            A grounded, informed approach
          </h2>
        </div>
        <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((credential, index) => (
            <li
              key={credential}
              className="reveal border-t border-cream/25 pt-5"
            >
              <span className="font-display text-lg italic text-mauve">
                0{index + 1}
              </span>
              <p className="mt-3 font-display text-2xl leading-[1.15]">
                {credential}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-16 bg-ivory py-24 sm:py-32 lg:py-40"
    >
      <div
        className={`${shell} grid items-start gap-16 lg:grid-cols-12 lg:gap-10`}
      >
        <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:sticky lg:top-28 lg:col-span-5 lg:max-w-none lg:pr-10">
          <div className="reveal relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 -translate-x-3 translate-y-3 rounded-[1.75rem] border border-sage sm:-translate-x-5 sm:translate-y-5"
            />
            <figure className="relative overflow-hidden rounded-[1.75rem] bg-sage-soft">
              <img
                src="/images/kathleen-headshot.jpg"
                alt="Kathleen Wyne smiling outdoors"
                width="1067"
                height="1600"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover object-[50%_20%]"
              />
            </figure>
            <Sprig className="absolute -right-8 -top-12 w-40 rotate-[28deg] text-sage-deep sm:-right-14 sm:w-52" />
          </div>
        </div>

        <div className="lg:col-span-7 lg:pl-6">
          <p className="eyebrow eyebrow-rule reveal text-sage-deep">About me</p>
          <h2 className="script-title reveal relative mt-5 w-fit text-forest">
            I’m Kathleen Wyne
            <Swoosh className="absolute -bottom-2 left-0 h-3 w-full text-mauve" />
          </h2>
          <p className="reveal mt-10 max-w-2xl font-display text-2xl leading-snug text-sage-deep sm:text-[1.7rem]">
            Functional Medicine Certified Health Coach with additional training
            in optimal bloodwork ranges.
          </p>

          <p className="reveal mt-10 max-w-3xl font-display text-[2.5rem] italic leading-[1.05] sm:text-6xl">
            You can call me your health detective.
          </p>

          <div className="prose-body mt-9 max-w-2xl space-y-6">
            <p className="reveal">
              I’m here to listen to your health story, help you make sense of
              where you’ve been and where you are now, and support you in
              building a plan for the progress you need.
            </p>
            <p className="reveal">
              If you’re looking for empathic listening <em>and</em> clear
              problem-solving and plan-building, I’m your girl. You’ll receive
              individualized support, true depth of listening, and insights
              shaped by a decade of navigating functional medicine—not a
              cookie-cutter social media supplement protocol.
            </p>
            <p className="reveal">
              With clarity and steady support, you can find the direction and
              peace you’ve been seeking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StartingPoints() {
  return (
    <section
      className="relative overflow-hidden bg-dust py-24 sm:py-32"
      aria-labelledby="paths-heading"
    >
      <div className={`${shell} grid gap-14 lg:grid-cols-12 lg:gap-10`}>
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow eyebrow-rule reveal text-sage-deep">
              Starting points
            </p>
            <h2 id="paths-heading" className="display-title reveal mt-6">
              We can start <em>wherever you are</em> right now.
            </h2>
            <figure className="reveal mt-12 hidden w-56 overflow-hidden rounded-full lg:block xl:w-64">
              <img
                src="/images/lilac-divider.jpg"
                alt="Lilac blossoms in soft spring light"
                width="1800"
                height="2700"
                loading="lazy"
                className="parallax aspect-[3/4] w-full object-cover object-[50%_57%]"
              />
            </figure>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ol className="border-t border-ink/20">
            {paths.map((path, index) => (
              <li
                key={path}
                className="path-row reveal grid grid-cols-[2.75rem_1fr] items-baseline gap-2 border-b border-ink/20 py-7 sm:grid-cols-[4.5rem_1fr] sm:py-9"
              >
                <span className="font-display text-xl italic text-mauve-deep sm:text-2xl">
                  0{index + 1}
                </span>
                <span className="font-display text-[1.6rem] leading-[1.18] sm:text-[2.1rem]">
                  {path}
                </span>
              </li>
            ))}
          </ol>

          <figure className="reveal mt-12 overflow-hidden rounded-[1.75rem] lg:hidden">
            <img
              src="/images/lilac-divider.jpg"
              alt="Lilac blossoms in soft spring light"
              width="1800"
              height="2700"
              loading="lazy"
              className="aspect-[16/10] w-full object-cover object-[50%_57%]"
            />
          </figure>

          <a href="#contact" className="button reveal mt-12">
            Reach out! <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}

const quoteStyles = [
  'bg-cream text-ink',
  'border border-cream/25 text-cream',
  'bg-sage-soft text-ink',
  'border border-cream/25 text-cream',
  'bg-mauve text-ink',
  'bg-cream text-ink',
  'border border-cream/25 text-cream',
];

function Testimonials() {
  return (
    <section
      className="relative overflow-hidden bg-forest py-24 text-cream sm:py-32"
      aria-labelledby="testimonials-heading"
    >
      <Sprig className="pointer-events-none absolute -right-16 top-10 hidden w-[26rem] md:block rotate-[160deg] text-cream/15" />

      <div className={`${shell} relative`}>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow eyebrow-rule reveal text-mauve">
              Client experiences
            </p>
            <h2 id="testimonials-heading" className="display-title reveal mt-6">
              Feeling <em>heard</em> changes everything
            </h2>
          </div>
          <p className="reveal text-xs uppercase tracking-[0.2em] text-cream/70 md:hidden">
            Swipe to read more <Arrow />
          </p>
        </div>
      </div>

      <div
        className="quote-rail relative mt-12 flex items-start snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:px-8 md:mx-auto md:mt-16 md:block md:max-w-[86rem] md:columns-2 md:gap-6 md:overflow-visible lg:columns-3 lg:px-12"
        role="region"
        aria-label="Client testimonials"
        tabIndex={0}
      >
        {testimonials.map((testimonial, index) => (
          <figure
            key={testimonial.attribution}
            className={`reveal flex w-[84%] shrink-0 snap-center break-inside-avoid flex-col rounded-[1.75rem] p-7 sm:w-[60%] sm:p-9 md:mb-6 md:w-auto ${quoteStyles[index % quoteStyles.length]}`}
          >
            <span
              aria-hidden="true"
              className="h-10 font-display text-7xl leading-none opacity-60"
            >
              “
            </span>
            <blockquote className="mt-3 font-display text-[1.35rem] leading-[1.42] sm:text-2xl sm:leading-[1.4]">
              {testimonial.quote}
            </blockquote>
            <figcaption className="eyebrow mt-7 flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-6 bg-current" />
              {testimonial.attribution}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Offerings() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="offerings" className="scroll-mt-16 bg-cream py-24 sm:py-32">
      <div className={shell}>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-6">
            <p className="eyebrow eyebrow-rule reveal text-sage-deep">
              Ways to work together
            </p>
            <h2 className="script-title reveal mt-5 text-forest">Offerings</h2>
          </div>
          <p className="prose-body reveal max-w-xl lg:col-span-6 lg:justify-self-end">
            Health coaching is personal. We’ll choose the kind of support that
            meets your current needs and gives you a clear, sustainable way
            forward.
          </p>
        </div>

        <aside
          id="leave"
          className="reveal mt-14 grid scroll-mt-28 gap-4 rounded-[1.75rem] bg-dust p-7 sm:p-9 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-10"
        >
          <p className="eyebrow text-mauve-deep">A note</p>
          <p className="text-balance font-display text-2xl leading-tight sm:text-3xl">
            Maternity leave: mid-November 2026 through mid-February 2027
          </p>
          <p className="max-w-xs leading-6 md:text-right">
            I’ll be taking time away to welcome our newest little boy into our
            family.
          </p>
        </aside>

        <div className="mt-14 border-t border-ink/25">
          {offerings.map((offering, index) => {
            const isOpen = openIndex === index;
            const id = `offering-${index + 1}`;

            return (
              <article key={offering.title} className="border-b border-ink/25">
                <h3>
                  <button
                    type="button"
                    id={`${id}-trigger`}
                    aria-expanded={isOpen}
                    aria-controls={`${id}-panel`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="offering-trigger grid w-full cursor-pointer grid-cols-[2.25rem_1fr_auto] items-center gap-3 py-7 text-left sm:grid-cols-[4.5rem_1fr_auto] sm:gap-6 sm:py-10"
                  >
                    <span className="self-start pt-2 font-display text-xl italic text-mauve-deep sm:pt-3 sm:text-2xl">
                      0{index + 1}
                    </span>
                    <span>
                      <span className="offering-title block font-display text-[1.75rem] leading-[1.08] sm:text-[2.6rem] lg:text-5xl">
                        {offering.title}
                      </span>
                      {offering.subtitle ? (
                        <span className="mt-2 block text-sm italic text-slateblue sm:text-base">
                          {offering.subtitle}
                        </span>
                      ) : null}
                    </span>
                    <span aria-hidden="true" className="offering-icon" />
                  </button>
                </h3>
                <div
                  id={`${id}-panel`}
                  role="region"
                  aria-labelledby={`${id}-trigger`}
                  inert={!isOpen}
                  data-open={isOpen}
                  className="offering-panel"
                >
                  <div>
                    <div className="grid gap-5 pb-10 leading-[1.8] sm:pl-[6rem] lg:grid-cols-2 lg:gap-12 lg:pb-14 lg:pr-24">
                      {offering.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <article className="reveal mt-20 grid overflow-hidden rounded-[1.75rem] bg-forest text-cream md:grid-cols-[0.8fr_1.2fr] lg:mt-28">
          <figure className="relative min-h-[20rem] overflow-hidden md:min-h-[32rem]">
            <img
              src="/images/mapping-health-story.jpg"
              alt="An open book surrounded by apple blossoms and a leather journal"
              width="1800"
              height="2700"
              loading="lazy"
              className="parallax absolute inset-0 h-full w-full object-cover object-[50%_42%]"
            />
          </figure>
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <p className="eyebrow w-fit rounded-full border border-cream/40 px-4 py-2 text-mauve">
              Coming soon
            </p>
            <h3 className="mt-7 font-display text-[2.6rem] leading-[1.02] sm:text-6xl">
              Mapping Your <em>Health Story</em>
            </h3>
            <p className="mt-7 max-w-xl leading-[1.8] text-cream/90">
              This course will walk you through creating a tangible timeline of
              your health story for your own processing, insights, and use with
              providers. It will help you identify your own potential root
              causes and go deeper into how your health story has impacted your
              identity and sense of self. We will talk about the next right
              steps for you and encourage you to tell your health story in an
              empowering way.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

function CoachingStructure() {
  return (
    <section id="coaching" className="scroll-mt-16 bg-ivory py-24 sm:py-32">
      <div className={shell}>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="eyebrow eyebrow-rule reveal text-sage-deep">
              Pricing &amp; coaching structure
            </p>
            <h2 className="script-title reveal mt-5 text-forest">
              Support that goes deeper
            </h2>
            <p className="prose-body reveal mt-9 max-w-xl">
              We’ll discuss current pricing and the right coaching rhythm during
              your free consultation. Family and close-friend rates are also
              available.
            </p>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="text-link reveal mt-9"
            >
              Book a free consultation <Arrow />
            </a>
          </div>
          <div className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-md lg:justify-self-end">
            <div
              aria-hidden="true"
              className="arch absolute inset-0 -translate-x-3 -translate-y-3 border border-sage sm:-translate-x-5 sm:-translate-y-5"
            />
            <figure className="arch reveal relative aspect-[4/5] overflow-hidden bg-sage-soft">
              <img
                src="/images/coaching-chamomile.jpg"
                alt="Chamomile flowers arranged with amber bottles and a candle"
                width="1800"
                height="2700"
                loading="lazy"
                className="parallax h-full w-full object-cover object-[50%_56%]"
              />
            </figure>
          </div>
        </div>

        <div className="mt-24 lg:mt-32">
          <p className="eyebrow eyebrow-rule reveal text-sage-deep">
            The core coaching path
          </p>
          <ol className="mt-10 grid gap-14 md:grid-cols-2 md:gap-0">
            <li className="reveal relative border-t border-ink pt-10 md:pr-14">
              <span
                aria-hidden="true"
                className="absolute -top-[0.4rem] left-0 h-3 w-3 rounded-full bg-ink"
              />
              <div className="flex items-end justify-between gap-5">
                <p className="font-display text-7xl leading-[0.8] text-sage sm:text-8xl">
                  <span className="sr-only">Step </span>01
                </p>
                <p className="eyebrow rounded-full bg-forest px-4 py-2 text-cream">
                  Start here
                </p>
              </div>
              <h3 className="mt-8 font-display text-4xl leading-[1.05] sm:text-[2.7rem]">
                Initial 90-minute session
              </h3>
              <div className="mt-6 space-y-4 leading-[1.8]">
                <p>
                  Your first session includes a comprehensive intake form
                  review. These in-depth health and symptom history forms help
                  me begin developing a picture of your health and pull together
                  starting insights so we can hit the ground running.
                </p>
                <p>
                  Please share any recent labs or medical findings you have
                  available.
                </p>
              </div>
            </li>

            <li className="reveal relative border-t border-ink pt-10 md:pl-14">
              <span
                aria-hidden="true"
                className="absolute -top-[0.4rem] left-0 h-3 w-3 rounded-full bg-ink md:left-14"
              />
              <div className="flex items-end justify-between gap-5">
                <p className="font-display text-7xl leading-[0.8] text-sage sm:text-8xl">
                  <span className="sr-only">Step </span>02
                </p>
                <p className="eyebrow rounded-full border border-ink/40 px-4 py-2">
                  Continue
                </p>
              </div>
              <h3 className="mt-8 font-display text-4xl leading-[1.05] sm:text-[2.7rem]">
                Ongoing monthly or bimonthly sessions
              </h3>
              <p className="mt-2 italic text-slateblue">60 minutes</p>
              <div className="mt-6 space-y-4 leading-[1.8]">
                <p>
                  We’ll discuss updates, questions, obstacles, complex health
                  topics, protocols, and the ideas or next steps we develop
                  together. Come with any high-priority questions or topics you
                  want to explore.
                </p>
                <p>
                  Begin with a six-month minimum. Consistent monthly sessions
                  keep the pricing you start with, even when rates increase.
                  After the initial period, cancel with one month’s notice.
                </p>
              </div>
            </li>
          </ol>
        </div>

        <div className="mt-24 lg:mt-32">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div className="lg:col-span-7">
              <p className="eyebrow eyebrow-rule reveal text-sage-deep">
                Optional deeper support
              </p>
              <h3 className="display-title reveal mt-6">
                Add support <em>when you need it</em>
              </h3>
            </div>
            <p className="reveal max-w-xl leading-[1.8] lg:col-span-5">
              Lab reviews and additional research are available alongside your
              ongoing coaching plan when your situation calls for a closer look
              or greater collaboration.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-[1.4fr_0.6fr]">
            <SupportOption
              label="Optional 01"
              title="Functional wellness lab review"
              columns
              paragraphs={[
                'I can help you order a comprehensive blood panel through Labcorp. A basic panel is approximately $150 and a comprehensive panel approximately $250 for the lab itself. Other functional lab options may be considered based on your symptoms, needs, and my areas of expertise.',
                'Your review includes a summary of optimal ranges, possible background on higher or lower results, focused lifestyle recommendations, and a tailored supplement protocol. A lab review can replace a monthly session with sufficient notice.',
                'Recent doctor-ordered bloodwork may also be reviewed, though many panels do not include enough markers for a comprehensive picture. Results from the last three months are preferred.',
              ]}
            />
            <SupportOption
              label="Optional 02"
              title="Additional research or consulting"
              tinted
              paragraphs={[
                'An hourly rate is available for complex cases that require research beyond typical coaching needs, or when you would like me to communicate and collaborate with other members of your care team.',
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SupportOption({
  label,
  title,
  paragraphs,
  columns = false,
  tinted = false,
}: {
  label: string;
  title: string;
  paragraphs: Array<string>;
  columns?: boolean;
  tinted?: boolean;
}) {
  return (
    <article
      className={`reveal rounded-[1.75rem] p-8 sm:p-11 ${tinted ? 'bg-sage-soft' : 'bg-dust'}`}
    >
      <p className="eyebrow text-mauve-deep">{label}</p>
      <h4 className="mt-5 font-display text-[2rem] leading-[1.05] sm:text-[2.6rem]">
        {title}
      </h4>
      <div
        className={`mt-7 space-y-4 leading-[1.8] ${columns ? 'md:columns-2 md:gap-10 md:space-y-0 md:[&>p+p]:mt-4' : ''}`}
      >
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="break-inside-avoid">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-16 overflow-hidden bg-forest py-24 text-cream sm:py-32"
    >
      <img
        aria-hidden="true"
        alt=""
        src="/images/botanical-background.jpg"
        width="2386"
        height="1592"
        loading="lazy"
        className="parallax absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-forest via-forest/85 to-forest/40"
      />

      <div
        className={`${shell} relative grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-10`}
      >
        <div className="lg:col-span-5">
          <p className="eyebrow eyebrow-rule reveal text-mauve">
            Let’s connect
          </p>
          <h2 className="hero-script reveal relative mt-6 w-fit">
            Reach out!
            <Swoosh className="absolute -bottom-3 left-0 h-3 w-full text-mauve" />
          </h2>
          <p className="prose-body reveal mt-12 max-w-lg">
            Tell me a little about what you’re navigating and what kind of
            support you’re looking for. I’ll follow up so we can talk about
            whether coaching together feels like the right fit.
          </p>
          <div className="reveal mt-9 border-t border-cream/25 pt-7">
            <p className="font-display text-2xl italic">
              Prefer to choose a time now?
            </p>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="button button-light mt-5"
            >
              Book a free coaching consultation <Arrow />
            </a>
          </div>
        </div>

        <form
          action="mailto:kathleenwynewellness@gmail.com"
          method="post"
          encType="text/plain"
          className="reveal rounded-[1.75rem] bg-cream p-7 text-ink shadow-[0_40px_80px_-40px_rgb(0_0_0/0.6)] sm:p-12 lg:col-span-7 lg:ml-10"
        >
          <div className="grid gap-8 sm:grid-cols-2">
            <label className="form-label">
              Name
              <input
                className="form-field"
                type="text"
                name="Name"
                autoComplete="name"
                required
              />
            </label>
            <label className="form-label">
              Email
              <input
                className="form-field"
                type="email"
                name="Email"
                autoComplete="email"
                required
              />
            </label>
          </div>
          <label className="form-label mt-8">
            Phone number
            <input
              className="form-field"
              type="tel"
              name="Phone"
              autoComplete="tel"
            />
          </label>
          <label className="form-label mt-8">
            What would you like support with?
            <textarea
              className="form-field min-h-36 resize-y"
              name="What I would like support with"
              required
            />
          </label>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <button type="submit" className="button cursor-pointer">
              Send my message <Arrow />
            </button>
            <p className="max-w-[17rem] text-xs leading-5 text-sage-deep">
              Submitting opens your default email app with your responses
              addressed to Kathleen.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-pine text-cream">
      <div className={`${shell} py-16 sm:py-20`}>
        <div className="grid gap-12 border-b border-cream/20 pb-14 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Sprig className="-ml-1 w-28 text-cream/70" />
            <p className="mt-5 font-display text-4xl uppercase tracking-[0.16em] sm:text-6xl">
              Kathleen Wyne
            </p>
            <p className="mt-2 font-display text-2xl italic tracking-[0.2em] text-mauve">
              wellness
            </p>
          </div>
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <nav aria-label="Footer navigation">
              <ul className="space-y-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em]">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <a className="nav-link" href={item.href}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex flex-col gap-3 text-sm">
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
        </div>

        <div className="mt-9 grid gap-5 text-xs leading-5 text-cream/75 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-3xl">
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
