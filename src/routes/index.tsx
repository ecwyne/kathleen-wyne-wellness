import { createFileRoute } from '@tanstack/react-router';
import { useRef } from 'react';
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

const gutter = 'px-3 sm:px-4';
const tile = 'rounded-4xl';
const pad = 'p-7 sm:p-10 lg:p-14';

function vars(values: Record<string, string | number>): CSSProperties {
  return values;
}

function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-paper font-body text-ink">
      <a
        href="#main-content"
        className="sr-only z-50 rounded-full bg-ink px-5 py-3 text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <Header />

      <main id="main-content" className="space-y-3 sm:space-y-4">
        <Hero />
        <Marquee />
        <StartingPoints />
        <About />
        <Testimonials />
        <Offerings />
        <CoachingStructure />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

/** Chamomile-style bloom used as the site's recurring mark. */
function Bloom({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
    >
      {[0, 45, 90, 135].map((angle) => (
        <ellipse
          key={angle}
          cx="50"
          cy="50"
          rx="11"
          ry="48"
          transform={`rotate(${angle} 50 50)`}
        />
      ))}
    </svg>
  );
}

function ButtonArrow() {
  return (
    <span aria-hidden="true" className="button-arrow">
      →
    </span>
  );
}

/** A round sticker with text set on a slowly turning ring. */
function Sticker({
  id,
  text,
  className = '',
  children,
}: {
  id: string;
  text: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`relative grid place-items-center rounded-full ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className="spin-slow absolute inset-0 h-full w-full"
      >
        <defs>
          <path
            id={id}
            d="M100 100m-76 0a76 76 0 1 1 152 0a76 76 0 1 1-152 0"
          />
        </defs>
        <text fill="currentColor" fontSize="17" fontWeight="600">
          <textPath href={`#${id}`} textLength="470">
            {text}
          </textPath>
        </text>
      </svg>
      {children}
    </span>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-3 top-3 z-40 sm:inset-x-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full border border-ink/10 bg-chalk/85 py-2 pl-5 pr-2 shadow-[0_12px_30px_-18px_rgb(27_42_32/0.5)] backdrop-blur-md sm:pl-7">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-display text-xl leading-none tracking-tight"
          aria-label="Kathleen Wyne Wellness, back to top"
        >
          <Bloom className="h-5 w-5 text-moss" />
          Kathleen Wyne
          <span className="hidden italic text-moss sm:inline">wellness</span>
        </a>

        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center text-[0.95rem] font-medium">
            {navigation.map((item) => (
              <li key={item.href}>
                <a className="nav-link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="button button-plain text-sm">
          Reach out
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className={`${gutter} pt-20 sm:pt-24`}>
      <div className="grid gap-3 sm:gap-4 lg:grid-cols-12">
        <div
          className={`${tile} relative flex flex-col justify-between overflow-hidden bg-pine p-7 text-paper sm:p-10 lg:col-span-8 lg:min-h-[38rem] lg:p-14`}
        >
          <Bloom className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 text-moss/40 lg:h-[30rem] lg:w-[30rem]" />

          <p className="tag rise relative" style={vars({ '--i': 0 })}>
            <Bloom className="text-butter" />
            Functional health coaching
          </p>

          <div className="relative mt-14 lg:mt-10">
            <h1 className="display-xl">
              <span
                className="rise block text-lilac"
                style={vars({ '--i': 1 })}
              >
                Clarity,
              </span>
              <span className="rise block" style={vars({ '--i': 2 })}>
                <span className="text-butter">joy,</span>{' '}
                <span className="italic text-paper/60">and</span>
              </span>
              <span
                className="rise block text-apricot"
                style={vars({ '--i': 3 })}
              >
                direction
              </span>
            </h1>
            <h2
              className="display-md rise mt-9 max-w-xl"
              style={vars({ '--i': 4 })}
            >
              Get free from being <em>stuck in symptoms.</em>
            </h2>
          </div>
        </div>

        <div
          className={`${tile} relative min-h-[24rem] overflow-hidden bg-mint lg:col-span-4`}
        >
          <img
            src="/images/hero-daiga-ellaby.jpg"
            alt="A woman gathering wildflowers in a sunlit meadow"
            width="1800"
            height="2700"
            className="absolute inset-0 h-full w-full object-cover object-[50%_60%]"
            fetchPriority="high"
          />
          <a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Book a free coaching consultation"
            className="pop group absolute bottom-5 left-5 block"
          >
            <Sticker
              id="hero-sticker"
              text="Book a free consultation ✦ Book a free consultation ✦"
              className="h-36 w-36 bg-butter text-ink shadow-[0_16px_30px_-14px_rgb(27_42_32/0.7)] transition-transform duration-500 ease-[var(--ease-spring)] group-hover:scale-110 sm:h-40 sm:w-40"
            >
              <span aria-hidden="true" className="font-display text-4xl">
                ↗
              </span>
            </Sticker>
          </a>
        </div>

        <div
          className={`${tile} reveal flex flex-col justify-between gap-8 bg-butter p-7 sm:p-10 lg:col-span-5`}
        >
          <p className="lede">
            Life is for living, not constant symptom stress.{' '}
            <span className="font-body text-[1.0625rem] leading-[1.7] tracking-normal">
              If your days are swallowed by appointments, random supplements,
              and endless dead-end advice, I’m here to help you cut through the
              noise.
            </span>
          </p>
          <a href="#contact" className="button w-fit">
            Reach out! <ButtonArrow />
          </a>
        </div>

        <div
          className={`${tile} reveal flex flex-col justify-between gap-8 bg-lilac p-7 sm:p-10 lg:col-span-4`}
        >
          <p className="lede">
            One-on-one health coaching to help you focus your energy, understand
            your health, and figure out the next best steps for
            <strong className="font-semibold italic"> you</strong>.
          </p>
          <a href="#about" className="link w-fit">
            Meet Kathleen <span aria-hidden="true">↓</span>
          </a>
        </div>

        <aside
          id="leave"
          className={`${tile} reveal flex scroll-mt-24 flex-col gap-4 border border-ink/15 bg-chalk p-7 sm:p-8 lg:col-span-3`}
        >
          <p className="tag">
            <Bloom className="text-moss" />A note
          </p>
          <p className="font-display text-2xl leading-[1.12] tracking-tight">
            Maternity leave: mid-November 2026 through mid-February 2027
          </p>
          <p className="text-[0.95rem] leading-relaxed text-ink/80">
            I’ll be taking time away to welcome our newest little boy into our
            family.
          </p>
        </aside>
      </div>
    </section>
  );
}

function Marquee() {
  const words = ['Clarity', 'Joy', 'Direction'];
  const colors = ['text-moss', 'text-apricot', 'text-lilac'];

  return (
    <div aria-hidden="true" className="marquee py-6 sm:py-10">
      {[0, 1].map((copy) => (
        <div key={copy} className="marquee-track">
          {[...words, ...words].map((word, index) => (
            <span
              key={`${word}-${index}`}
              className="flex items-center font-display text-6xl italic tracking-tight sm:text-8xl"
            >
              <span className="px-6 sm:px-10">{word}</span>
              <Bloom
                className={`h-9 w-9 sm:h-14 sm:w-14 ${colors[index % colors.length]}`}
              />
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

const noteStyles = [
  { color: 'bg-butter', tilt: '-2.5deg' },
  { color: 'bg-lilac', tilt: '1.75deg' },
  { color: 'bg-mint', tilt: '-1.25deg' },
  { color: 'bg-apricot', tilt: '2.25deg' },
  { color: 'bg-chalk', tilt: '-1.75deg' },
];

function StartingPoints() {
  return (
    <section
      className={`${gutter} pb-16 pt-6 sm:pb-24`}
      aria-labelledby="paths-heading"
    >
      <div className="mx-auto max-w-[92rem]">
        <div className="flex flex-wrap items-end justify-between gap-8 px-2 sm:px-6">
          <div className="max-w-3xl">
            <p className="tag reveal">
              <Bloom className="text-moss" />
              Starting points
            </p>
            <h2 id="paths-heading" className="display-lg reveal mt-6">
              We can start <em className="text-moss">wherever you are</em> right
              now.
            </h2>
          </div>
          <figure className="reveal hidden h-40 w-72 overflow-hidden rounded-full lg:block">
            <img
              src="/images/lilac-divider.jpg"
              alt="Lilac blossoms in soft spring light"
              width="1800"
              height="2700"
              loading="lazy"
              className="parallax h-full w-full object-cover object-[50%_57%]"
            />
          </figure>
        </div>

        <ol className="mt-14 flex flex-wrap justify-center gap-x-4 gap-y-8 sm:mt-16">
          {paths.map((path, index) => (
            <li
              key={path}
              className="reveal w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.7rem)] xl:w-[calc(20%-0.8rem)]"
            >
              <div
                className={`note flex h-full min-h-[13rem] flex-col justify-between gap-8 rounded-2xl p-6 sm:min-h-[17rem] sm:p-7 ${noteStyles[index].color}`}
                style={vars({ '--tilt': noteStyles[index].tilt })}
              >
                <span aria-hidden="true" className="pin" />
                <span className="font-display text-lg italic text-ink/70">
                  No. 0{index + 1}
                </span>
                <p className="font-display text-[1.45rem] leading-[1.16] tracking-tight">
                  {path}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="reveal mt-14 flex justify-center">
          <a href="#contact" className="button">
            Reach out! <ButtonArrow />
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className={`${gutter} scroll-mt-24`}>
      <div className="grid gap-3 sm:gap-4 lg:grid-cols-12">
        <div
          className={`${tile} reveal relative min-h-[30rem] overflow-hidden bg-mint lg:col-span-5`}
        >
          <img
            src="/images/kathleen-headshot.jpg"
            alt="Kathleen Wyne smiling outdoors"
            width="1067"
            height="1600"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-[50%_18%]"
          />
          <Sticker
            id="about-sticker"
            text="Your health detective ✦ Your health detective ✦ "
            className="!absolute right-5 top-5 h-32 w-32 bg-lilac text-ink sm:h-36 sm:w-36"
          >
            <Bloom className="h-10 w-10 text-pine" />
          </Sticker>
        </div>

        <div className={`${tile} bg-chalk ${pad} lg:col-span-7`}>
          <p className="tag reveal">
            <Bloom className="text-moss" />
            About me
          </p>
          <h2 className="display-lg reveal mt-6">
            I’m <em className="text-moss">Kathleen</em> Wyne
          </h2>
          <p className="lede reveal mt-8 max-w-2xl">
            Functional Medicine Certified Health Coach with additional training
            in optimal bloodwork ranges.
          </p>
          <div className="copy mt-8 max-w-2xl space-y-5">
            <p className="reveal">
              <span className="marker font-semibold">
                You can call me your health detective.
              </span>{' '}
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

        <div
          className={`${tile} grid gap-10 bg-mint ${pad} lg:col-span-12 lg:grid-cols-[0.9fr_2.6fr] lg:gap-14`}
          aria-labelledby="credentials-heading"
          role="group"
        >
          <div className="reveal">
            <p className="tag">
              <Bloom className="text-pine" />
              Training &amp; background
            </p>
            <h2 id="credentials-heading" className="display-md mt-5">
              A grounded, informed approach
            </h2>
          </div>
          <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2 xl:grid-cols-4">
            {credentials.map((credential, index) => (
              <li
                key={credential}
                className="reveal border-t-2 border-ink pt-4"
              >
                <span className="font-display text-lg italic text-ink/70">
                  No. 0{index + 1}
                </span>
                <p className="mt-2 font-display text-[1.45rem] leading-[1.15] tracking-tight">
                  {credential}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const quoteColors = [
  'bg-butter',
  'bg-chalk',
  'bg-lilac',
  'bg-mint',
  'bg-apricot',
  'bg-chalk',
  'bg-butter',
];

function Testimonials() {
  const railRef = useRef<HTMLDivElement>(null);

  function scrollRail(direction: 1 | -1) {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector('figure');
    const distance = (card ? card.clientWidth : rail.clientWidth * 0.8) + 16;
    rail.scrollBy({ left: direction * distance, behavior: 'smooth' });
  }

  return (
    <section className={gutter} aria-labelledby="testimonials-heading">
      <div
        className={`${tile} overflow-hidden bg-pine py-14 text-paper lg:py-20`}
      >
        <div className="flex flex-wrap items-end justify-between gap-8 px-7 sm:px-10 lg:px-14">
          <div>
            <p className="tag reveal">
              <Bloom className="text-butter" />
              Client experiences
            </p>
            <h2
              id="testimonials-heading"
              className="display-lg reveal mt-6 max-w-4xl"
            >
              Feeling <em className="text-butter">heard</em> changes everything
            </h2>
          </div>
          <div className="reveal flex gap-3">
            <button
              type="button"
              className="round-button"
              onClick={() => scrollRail(-1)}
              aria-label="Scroll to previous testimonials"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              className="round-button"
              onClick={() => scrollRail(1)}
              aria-label="Scroll to next testimonials"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div
          ref={railRef}
          className="rail mt-12 flex snap-x snap-mandatory scroll-px-7 gap-4 overflow-x-auto px-7 sm:scroll-px-10 sm:px-10 lg:mt-16 lg:scroll-px-14 lg:px-14"
          role="region"
          aria-label="Client testimonials"
          tabIndex={0}
        >
          {testimonials.map((testimonial, index) => {
            const isShort = testimonial.quote.length < 280;

            return (
              <figure
                key={testimonial.attribution}
                className={`flex w-[84%] shrink-0 snap-start flex-col justify-between gap-10 rounded-3xl p-7 text-ink sm:w-[30rem] sm:p-9 ${isShort ? '' : 'lg:w-[38rem]'} ${quoteColors[index % quoteColors.length]}`}
              >
                <blockquote
                  className={`font-display tracking-tight ${isShort ? 'text-[1.4rem] leading-[1.25] sm:text-[2rem] sm:leading-[1.22]' : 'text-xl leading-[1.38] sm:text-[1.4rem]'}`}
                >
                  <span aria-hidden="true">“</span>
                  {testimonial.quote}
                  <span aria-hidden="true">”</span>
                </blockquote>
                <figcaption className="flex items-center gap-3 font-semibold">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-paper">
                    <Bloom className="h-4 w-4" />
                  </span>
                  {testimonial.attribution}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const offeringStyles = [
  'bg-mint lg:col-span-7',
  'bg-butter lg:col-span-5',
  'bg-lilac lg:col-span-5',
  'bg-apricot lg:col-span-7',
  'bg-chalk border border-ink/15 lg:col-span-12',
];

function Offerings() {
  return (
    <section id="offerings" className={`${gutter} scroll-mt-24 pt-16 sm:pt-24`}>
      <div className="grid gap-8 px-2 sm:px-6 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="tag reveal">
            <Bloom className="text-moss" />
            Ways to work together
          </p>
          <h2 className="display-xl reveal mt-6">Offerings</h2>
        </div>
        <p className="lede reveal max-w-xl lg:col-span-5 lg:pb-3">
          Health coaching is personal. We’ll choose the kind of support that
          meets your current needs and gives you a clear, sustainable way
          forward.
        </p>
      </div>

      <div className="mt-12 grid gap-3 sm:mt-16 sm:gap-4 lg:grid-cols-12">
        {offerings.map((offering, index) => {
          const isWide = index === offerings.length - 1;

          return (
            <article
              key={offering.title}
              className={`${tile} reveal flex flex-col gap-8 p-7 sm:p-10 ${offeringStyles[index]} ${isWide ? 'lg:flex-row lg:gap-16' : ''}`}
            >
              <div className={isWide ? 'lg:w-2/5' : ''}>
                <span className="font-display text-6xl leading-none tracking-tight text-ink/25 sm:text-7xl">
                  0{index + 1}
                </span>
                <h3 className="display-md mt-5">{offering.title}</h3>
                {offering.subtitle ? (
                  <p className="mt-3 font-display text-lg italic text-ink/75">
                    {offering.subtitle}
                  </p>
                ) : null}
              </div>
              <div
                className={`copy space-y-4 ${isWide ? 'lg:w-3/5 lg:self-end' : 'mt-auto'}`}
              >
                {offering.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          );
        })}

        <article
          className={`${tile} reveal grid overflow-hidden bg-pine text-paper lg:col-span-12 lg:grid-cols-[1fr_1.15fr]`}
        >
          <figure className="relative min-h-[20rem] overflow-hidden lg:min-h-[34rem]">
            <img
              src="/images/mapping-health-story.jpg"
              alt="An open book surrounded by apple blossoms and a leather journal"
              width="1800"
              height="2700"
              loading="lazy"
              className="parallax absolute inset-0 h-full w-full object-cover object-[50%_42%]"
            />
            <Sticker
              id="course-sticker"
              text="Coming soon ✦ Coming soon ✦ Coming soon ✦ "
              className="!absolute bottom-5 right-5 h-32 w-32 bg-apricot text-ink sm:h-36 sm:w-36"
            >
              <Bloom className="h-10 w-10 text-pine" />
            </Sticker>
          </figure>
          <div className={`flex flex-col justify-center ${pad}`}>
            <p className="tag">
              <Bloom className="text-apricot" />
              Coming soon
            </p>
            <h3 className="display-lg mt-6">
              Mapping Your <em className="text-apricot">Health Story</em>
            </h3>
            <p className="copy mt-7 max-w-xl text-paper/90">
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
    <section id="coaching" className={`${gutter} scroll-mt-24 pt-16 sm:pt-24`}>
      <div className="grid gap-3 sm:gap-4 lg:grid-cols-12">
        <div
          className={`${tile} flex flex-col justify-between gap-12 bg-chalk ${pad} lg:col-span-8`}
        >
          <div>
            <p className="tag reveal">
              <Bloom className="text-moss" />
              Pricing &amp; coaching structure
            </p>
            <h2 className="display-lg reveal mt-6">
              Support that goes <em className="text-moss">deeper</em>
            </h2>
          </div>
          <div className="reveal flex flex-wrap items-end justify-between gap-8">
            <p className="lede max-w-xl">
              We’ll discuss current pricing and the right coaching rhythm during
              your free consultation. Family and close-friend rates are also
              available.
            </p>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              Book a free consultation <ButtonArrow />
            </a>
          </div>
        </div>
        <figure
          className={`${tile} reveal relative min-h-[22rem] overflow-hidden bg-butter lg:col-span-4 lg:min-h-[30rem]`}
        >
          <img
            src="/images/coaching-chamomile.jpg"
            alt="Chamomile flowers arranged with amber bottles and a candle"
            width="1800"
            height="2700"
            loading="lazy"
            className="parallax absolute inset-0 h-full w-full object-cover object-[50%_56%]"
          />
        </figure>
      </div>

      <p className="tag reveal mx-2 mt-16 sm:mx-6 sm:mt-20">
        <Bloom className="text-moss" />
        The core coaching path
      </p>
      <ol className="mt-6 grid gap-3 sm:gap-4 lg:grid-cols-2">
        <li
          className={`${tile} reveal relative flex flex-col bg-pine ${pad} text-paper`}
        >
          <div className="flex items-start justify-between gap-5">
            <p className="font-display text-8xl leading-[0.8] tracking-tight text-butter sm:text-9xl">
              <span className="sr-only">Step </span>01
            </p>
            <p className="rounded-full bg-butter px-4 py-2 text-sm font-semibold text-ink">
              Start here
            </p>
          </div>
          <h3 className="display-md mt-10">Initial 90-minute session</h3>
          <div className="copy mt-6 space-y-4 text-paper/90">
            <p>
              Your first session includes a comprehensive intake form review.
              These in-depth health and symptom history forms help me begin
              developing a picture of your health and pull together starting
              insights so we can hit the ground running.
            </p>
            <p>
              Please share any recent labs or medical findings you have
              available.
            </p>
          </div>
          <span
            aria-hidden="true"
            className="absolute -bottom-7 left-1/2 z-10 grid h-14 w-14 -translate-x-1/2 place-items-center rounded-full border-4 border-paper bg-butter text-xl text-ink lg:-right-9 lg:bottom-auto lg:left-auto lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0"
          >
            <span className="lg:hidden">↓</span>
            <span className="hidden lg:inline">→</span>
          </span>
        </li>

        <li
          className={`${tile} reveal flex flex-col bg-moss ${pad} text-paper`}
        >
          <div className="flex items-start justify-between gap-5">
            <p className="font-display text-8xl leading-[0.8] tracking-tight text-mint sm:text-9xl">
              <span className="sr-only">Step </span>02
            </p>
            <p className="rounded-full border border-paper/50 px-4 py-2 text-sm font-semibold">
              Continue
            </p>
          </div>
          <h3 className="display-md mt-10">
            Ongoing monthly or bimonthly sessions
          </h3>
          <p className="mt-2 font-display text-lg italic text-mint">
            60 minutes
          </p>
          <div className="copy mt-6 space-y-4 text-paper/95">
            <p>
              We’ll discuss updates, questions, obstacles, complex health
              topics, protocols, and the ideas or next steps we develop
              together. Come with any high-priority questions or topics you want
              to explore.
            </p>
            <p>
              Begin with a six-month minimum. Consistent monthly sessions keep
              the pricing you start with, even when rates increase. After the
              initial period, cancel with one month’s notice.
            </p>
          </div>
        </li>
      </ol>

      <div className="mt-16 grid gap-8 px-2 sm:mt-24 sm:px-6 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="tag reveal">
            <Bloom className="text-moss" />
            Optional deeper support
          </p>
          <h3 className="display-lg reveal mt-6">
            Add support <em className="text-moss">when you need it</em>
          </h3>
        </div>
        <p className="copy reveal max-w-xl lg:col-span-5 lg:pb-2">
          Lab reviews and additional research are available alongside your
          ongoing coaching plan when your situation calls for a closer look or
          greater collaboration.
        </p>
      </div>

      <div className="mt-10 grid gap-3 sm:gap-4 lg:grid-cols-12">
        <SupportOption
          label="Optional 01"
          title="Functional wellness lab review"
          className="bg-chalk lg:col-span-8"
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
          className="bg-lilac lg:col-span-4"
          paragraphs={[
            'An hourly rate is available for complex cases that require research beyond typical coaching needs, or when you would like me to communicate and collaborate with other members of your care team.',
          ]}
        />
      </div>
    </section>
  );
}

function SupportOption({
  label,
  title,
  paragraphs,
  className,
  columns = false,
}: {
  label: string;
  title: string;
  paragraphs: Array<string>;
  className: string;
  columns?: boolean;
}) {
  return (
    <article
      className={`${tile} reveal border border-ink/15 p-7 sm:p-10 ${className}`}
    >
      <div className="flex items-center justify-between gap-4">
        <p className="tag">{label}</p>
        <span
          aria-hidden="true"
          className="grid h-11 w-11 place-items-center rounded-full bg-ink text-2xl leading-none text-paper"
        >
          +
        </span>
      </div>
      <h4 className="display-md mt-7">{title}</h4>
      <div
        className={`copy mt-6 space-y-4 ${columns ? 'md:columns-2 md:gap-10 md:space-y-0 md:[&>p+p]:mt-4' : ''}`}
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
    <section id="contact" className={`${gutter} scroll-mt-24 pt-16 sm:pt-24`}>
      <div
        className={`${tile} relative grid gap-12 overflow-hidden bg-butter p-5 sm:p-8 lg:grid-cols-12 lg:gap-8 lg:p-10`}
      >
        <Bloom className="pointer-events-none absolute -bottom-32 -left-28 h-96 w-96 text-apricot/60" />

        <div className="relative flex flex-col justify-between gap-12 p-2 sm:p-4 lg:col-span-6">
          <div>
            <p className="tag reveal">
              <Bloom />
              Let’s connect
            </p>
            <h2 className="display-xl reveal mt-6">
              Reach <em>out!</em>
            </h2>
            <p className="lede reveal mt-8 max-w-lg">
              Tell me a little about what you’re navigating and what kind of
              support you’re looking for. I’ll follow up so we can talk about
              whether coaching together feels like the right fit.
            </p>
          </div>

          <div className="reveal flex flex-wrap items-center gap-5">
            <figure className="h-24 w-24 flex-none overflow-hidden rounded-full sm:h-28 sm:w-28">
              <img
                src="/images/botanical-background.jpg"
                alt="Olives ripening on a sunlit branch"
                width="2386"
                height="1592"
                loading="lazy"
                className="h-full w-full object-cover object-[38%_50%]"
              />
            </figure>
            <div>
              <p className="font-display text-2xl italic tracking-tight">
                Prefer to choose a time now?
              </p>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="link mt-2"
              >
                Book a free coaching consultation{' '}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        <form
          action="mailto:kathleenwynewellness@gmail.com"
          method="post"
          encType="text/plain"
          className="reveal relative rounded-3xl bg-chalk p-6 shadow-[0_30px_60px_-35px_rgb(27_42_32/0.6)] sm:p-10 lg:col-span-6"
        >
          <div className="grid gap-5 sm:grid-cols-2">
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
          <label className="form-label mt-5">
            Phone number
            <input
              className="form-field"
              type="tel"
              name="Phone"
              autoComplete="tel"
            />
          </label>
          <label className="form-label mt-5">
            What would you like support with?
            <textarea
              className="form-field min-h-40 resize-y"
              name="What I would like support with"
              required
            />
          </label>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
            <button type="submit" className="button">
              Send my message <ButtonArrow />
            </button>
            <p className="max-w-[16rem] text-sm leading-snug text-ink/75">
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
    <footer className={`${gutter} pb-3 pt-3 sm:pb-4 sm:pt-4`}>
      <div className={`${tile} overflow-hidden bg-pine text-paper`}>
        <div className="grid gap-10 px-7 pt-12 sm:px-10 lg:grid-cols-[1fr_auto_auto] lg:gap-20 lg:px-14 lg:pt-16">
          <p className="lede max-w-md">
            Clarity, joy, and direction through functional health coaching.
          </p>
          <nav aria-label="Footer navigation">
            <ul className="space-y-2 font-medium">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a className="link" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col gap-2 font-medium">
            <a className="link" href="mailto:kathleenwynewellness@gmail.com">
              kathleenwynewellness@gmail.com
            </a>
            <a
              className="link"
              href="https://instagram.com/kathleenwyne.wellness"
              target="_blank"
              rel="noreferrer"
            >
              @kathleenwyne.wellness
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-5 border-t border-paper/20 px-7 py-7 text-sm leading-relaxed text-paper/75 sm:px-10 md:grid-cols-[1fr_auto] md:items-end lg:px-14">
          <p className="max-w-3xl">
            Wellness coaching and educational content are not medical advice and
            are not a substitute for diagnosis or treatment from a qualified
            healthcare professional. Always consult your healthcare provider
            regarding medical concerns and changes to your care.
          </p>
          <p>© {new Date().getFullYear()} Kathleen Wyne Wellness</p>
        </div>

        <p
          aria-hidden="true"
          className="-mb-[0.1em] whitespace-nowrap px-4 pt-4 text-center font-display text-[15.2vw] leading-[0.95] tracking-[-0.04em] text-butter"
        >
          Kathleen Wyne
        </p>
      </div>
    </footer>
  );
}
