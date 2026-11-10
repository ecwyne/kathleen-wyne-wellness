import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useRef } from 'react';
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

/* ---------- The thread ---------- */

type Point = [number, number];

interface ThreadShape {
  /** Centre and radii of the tangle, in a 1000 × 1000 box. */
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  /** Where the thread leaves the bottom edge. */
  exitX: number;
}

const threadPointCount = 160;

function mix(from: number, to: number, amount: number) {
  return from + (to - from) * amount;
}

function smooth(value: number) {
  const t = Math.min(1, Math.max(0, value));
  return t * t * t * (t * (t * 6 - 15) + 10);
}

/** The same thread twice: knotted up, and pulled into one calm line. */
function buildThread(shape: ThreadShape) {
  const tangle: Array<Point> = [];
  const calm: Array<Point> = [];
  const start: Point = [1005, shape.cy - shape.ry * 0.75];
  const lean: Point = [shape.exitX + 130, shape.cy - shape.ry * 0.95];
  const turn: Point = [shape.exitX, shape.cy - shape.ry * 0.05];
  const end: Point = [shape.exitX, 1000];

  for (let index = 0; index < threadPointCount; index += 1) {
    const u = index / (threadPointCount - 1);
    const angle = u * Math.PI * 2;
    const knotX =
      shape.cx +
      shape.rx *
        (0.62 * Math.sin(angle * 9 + 0.4) +
          0.38 * Math.sin(angle * 14.3 + 1.9));
    const knotY =
      shape.cy +
      shape.ry *
        (0.62 * Math.cos(angle * 7.4 + 1.1) +
          0.38 * Math.sin(angle * 11.7 + 0.3));
    const leaving = smooth((u - 0.9) / 0.1);
    tangle.push([
      mix(knotX, shape.exitX, leaving),
      mix(knotY, mix(shape.cy, 1000, leaving), leaving),
    ]);

    const v = 1 - u;
    calm.push([
      v * v * v * start[0] +
        3 * v * v * u * lean[0] +
        3 * v * u * u * turn[0] +
        u * u * u * end[0],
      v * v * v * start[1] +
        3 * v * v * u * lean[1] +
        3 * v * u * u * turn[1] +
        u * u * u * end[1],
    ]);
  }

  return { tangle, calm };
}

type Thread = ReturnType<typeof buildThread>;

/** Path for the thread when it has been pulled `pull` (0–1) of the way out. */
function threadPath({ tangle, calm }: Thread, pull: number) {
  const stagger = 0.6;
  const points = tangle.map((knotted, index): Point => {
    const u = index / (tangle.length - 1);
    // The end nearest the reader comes free first.
    const local = smooth(pull * (1 + stagger) - stagger * (1 - u));
    return [
      mix(knotted[0], calm[index][0], local),
      mix(knotted[1], calm[index][1], local),
    ];
  });

  const round = (value: number) => Math.round(value * 10) / 10;
  let d = `M${round(points[0][0])} ${round(points[0][1])}`;
  for (let index = 0; index < points.length - 1; index += 1) {
    const before = points[Math.max(0, index - 1)];
    const from = points[index];
    const to = points[index + 1];
    const after = points[Math.min(points.length - 1, index + 2)];
    d += `C${round(from[0] + (to[0] - before[0]) / 6)} ${round(
      from[1] + (to[1] - before[1]) / 6,
    )} ${round(to[0] - (after[0] - from[0]) / 6)} ${round(
      to[1] - (after[1] - from[1]) / 6,
    )} ${round(to[0])} ${round(to[1])}`;
  }
  return d;
}

const wideThread = buildThread({
  cx: 705,
  cy: 500,
  rx: 235,
  ry: 330,
  exitX: 720,
});
const narrowThread = buildThread({
  cx: 500,
  cy: 765,
  rx: 400,
  ry: 160,
  exitX: 500,
});

function vars(values: Record<string, string | number>): CSSProperties {
  return values;
}

/* ---------- Page ---------- */

function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-paper text-ink">
      <a
        href="#main-content"
        className="sr-only z-50 bg-ink px-5 py-3 text-light focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <main id="main-content">
        <Hero />
        <div className="frame">
          <Swoop />
          <Intro />
          <StartingPoints />
          <About />
          <Testimonials />
          <Offerings />
          <CoachingStructure />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Knot() {
  return (
    <span aria-hidden="true" className="knot text-blue">
      <svg viewBox="0 0 40 48">
        <path d="M11 0V7C11 31 37 35 37 21C37 7 11 13 11 37V48" />
      </svg>
    </span>
  );
}

function Print({
  src,
  alt,
  width,
  height,
  className = '',
  position = '50% 50%',
  eager = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  position?: string;
  eager?: boolean;
}) {
  return (
    <figure className={`print ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? undefined : 'lazy'}
        style={{ objectPosition: position }}
      />
    </figure>
  );
}

function Hero() {
  const pinRef = useRef<HTMLDivElement>(null);
  const wideRef = useRef<SVGPathElement>(null);
  const narrowRef = useRef<SVGPathElement>(null);

  const wordsRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const pin = pinRef.current;
    if (!pin) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const wide = window.matchMedia('(min-width: 64rem)');
    let frame = 0;
    let shown = -1;
    let top = 0;
    let travel = 0;

    const measure = () => {
      const rect = pin.getBoundingClientRect();
      top = rect.top + window.scrollY;
      travel = (rect.height - window.innerHeight) * 0.85;
    };

    const draw = () => {
      frame = 0;
      const target =
        travel > 0
          ? Math.min(1, Math.max(0, (window.scrollY - top) / travel))
          : 0;
      // Ease toward the scroll position so uneven touch scrolling reads as
      // one smooth pull.
      const next = shown < 0 ? target : shown + (target - shown) * 0.2;
      const settled = Math.abs(target - next) < 0.0005;
      if (settled && next === shown) return;
      shown = settled ? target : next;

      // Only the thread for the current layout is visible, so only it moves.
      const path = wide.matches ? wideRef.current : narrowRef.current;
      path?.setAttribute(
        'd',
        threadPath(wide.matches ? wideThread : narrowThread, shown),
      );
      if (wordsRef.current) {
        wordsRef.current.style.opacity = String(Math.max(0, 0.9 - shown * 3));
      }
      if (hintRef.current) {
        hintRef.current.style.opacity = String(Math.max(0, 1 - shown * 5));
      }
      if (!settled) frame = requestAnimationFrame(draw);
    };
    const request = () => {
      if (!frame) frame = requestAnimationFrame(draw);
    };
    const resize = () => {
      measure();
      shown = -1;
      request();
    };

    measure();
    request();
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', request);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div ref={pinRef} className="hero-pin">
      <div className="hero-stick frame">
        <div className="hero-box">
          <section id="top" className="plate hero-plate">
            <svg
              aria-hidden="true"
              viewBox="0 0 1000 1000"
              preserveAspectRatio="none"
              className="thread-svg hero-thread max-lg:hidden"
            >
              <path
                ref={wideRef}
                d={threadPath(wideThread, 0)}
                vectorEffect="non-scaling-stroke"
                suppressHydrationWarning
              />
            </svg>
            <svg
              aria-hidden="true"
              viewBox="0 0 1000 1000"
              preserveAspectRatio="none"
              className="thread-svg hero-thread lg:hidden"
            >
              <path
                ref={narrowRef}
                d={threadPath(narrowThread, 0)}
                vectorEffect="non-scaling-stroke"
                suppressHydrationWarning
              />
            </svg>

            <div
              ref={wordsRef}
              aria-hidden="true"
              className="pointer-events-none opacity-90"
            >
              <span className="noise-word left-[8%] top-[55%] lg:left-[43%] lg:top-[22%]">
                appointments
              </span>
              <span className="noise-word right-[5%] top-[55%] lg:right-[4%] lg:top-[87%]">
                random supplements
              </span>
              <span className="noise-word left-[8%] top-[95%] lg:left-[41%] lg:top-[79%]">
                dead-end advice
              </span>
            </div>

            <header className="relative flex items-center justify-between gap-6 px-5 pt-5 sm:px-8 lg:px-12 lg:pt-9">
              <a
                href="#top"
                className="font-display text-[1.15rem] leading-none tracking-tight sm:text-xl"
              >
                Kathleen Wyne Wellness
              </a>
              <nav aria-label="Primary navigation">
                <ul className="flex items-center gap-7 text-[1.0625rem] font-medium">
                  {navigation.map((item) => (
                    <li
                      key={item.href}
                      className={
                        item.href === '#contact' ? '' : 'max-md:hidden'
                      }
                    >
                      <a className="link" href={item.href}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </header>

            <div className="relative px-5 pb-6 pt-9 sm:px-8 lg:mt-auto lg:max-w-[58%] lg:px-12 lg:pb-14">
              <h1 className="display-1 settle" style={vars({ '--i': 0 })}>
                Clarity, joy, and direction
              </h1>
              <h2
                className="lede settle mt-5 max-w-[26ch] lg:mt-8"
                style={vars({ '--i': 1 })}
              >
                Get free from being stuck in symptoms.
              </h2>
              <div
                className="settle mt-6 flex flex-wrap items-center gap-x-7 gap-y-4 lg:mt-9"
                style={vars({ '--i': 2 })}
              >
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  Book a free consultation
                </a>
                <a href="#about" className="link max-sm:hidden">
                  Meet Kathleen
                </a>
              </div>
            </div>

            <p
              ref={hintRef}
              aria-hidden="true"
              className="pull-hint small absolute bottom-4 left-[calc(var(--spine)+(100%-var(--spine))*var(--exit)+0.9rem)] text-pale lg:bottom-8"
            >
              Scroll to pull the thread
            </p>
          </section>
          <span aria-hidden="true" className="hero-stub" />
        </div>
      </div>
    </div>
  );
}

/** The thread crosses from where it left the hero to the page's left edge. */
function Swoop() {
  return (
    <div aria-hidden="true" className="swoop">
      <svg
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="thread-svg max-lg:hidden"
      >
        <path d="M720 0C720 62 0 30 0 100" vectorEffect="non-scaling-stroke" />
      </svg>
      <svg
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="thread-svg lg:hidden"
      >
        <path d="M500 0C500 62 0 30 0 100" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}

function Intro() {
  return (
    <section
      className="run pb-20 pt-6 lg:pb-32"
      aria-labelledby="intro-heading"
    >
      <div className="grid gap-x-12 gap-y-12 lg:grid-cols-12">
        <aside
          id="leave"
          className="scroll-mt-8 self-start bg-sun p-6 text-ink sm:p-7 lg:order-2 lg:col-span-4 lg:col-start-9"
        >
          <p className="display-3">
            Maternity leave: mid-November 2026 through mid-February 2027
          </p>
          <p className="mt-3 leading-relaxed">
            I’ll be taking time away to welcome our newest little boy into our
            family.
          </p>
        </aside>

        <div className="lg:col-span-8 lg:row-start-1">
          <h2 id="intro-heading" className="display-2">
            Life is for living, not constant symptom stress.
          </h2>
          <div className="copy mt-8">
            <p>
              If your days are swallowed by appointments, random supplements,
              and endless dead-end advice, I’m here to help you cut through the
              noise.
            </p>
            <p>
              One-on-one health coaching to help you focus your energy,
              understand your health, and figure out the next best steps for{' '}
              <em>you</em>.
            </p>
          </div>
          <a href="#contact" className="button button-ink mt-9">
            Reach out!
          </a>
        </div>
      </div>
    </section>
  );
}

function StartingPoints() {
  return (
    <section className="run pb-20 lg:pb-32" aria-labelledby="paths-heading">
      <div className="grid gap-x-12 gap-y-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 id="paths-heading" className="display-2">
            We can start wherever you are right now.
          </h2>
          <ul className="mt-12 space-y-9 lg:mt-16 lg:space-y-11">
            {paths.map((path) => (
              <li key={path} className="relative">
                <Knot />
                <p className="display-3 max-w-[30ch]">{path}</p>
              </li>
            ))}
          </ul>
        </div>

        <Print
          src="/images/lilac-divider.jpg"
          alt="Lilac blossoms in soft spring light"
          width={1800}
          height={2700}
          position="50% 57%"
          className="aspect-[4/5] max-lg:hidden lg:sticky lg:top-10 lg:col-span-4 lg:col-start-9 lg:self-start"
        />
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="run scroll-mt-10 pb-20 lg:pb-32"
      aria-labelledby="about-heading"
    >
      <div className="grid gap-x-12 gap-y-10 lg:grid-cols-12">
        <figure className="relative aspect-[4/5] max-w-md overflow-hidden lg:col-span-4 lg:self-start">
          <img
            src="/images/kathleen-headshot.jpg"
            alt="Kathleen Wyne smiling outdoors"
            width="1067"
            height="1600"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-[50%_18%]"
          />
        </figure>

        <div className="lg:col-span-7 lg:col-start-6">
          <h2 id="about-heading" className="display-2">
            I’m Kathleen Wyne
          </h2>
          <p className="lede mt-6 max-w-[38ch]">
            Functional Medicine Certified Health Coach with additional training
            in optimal bloodwork ranges.
          </p>
          <div className="copy mt-8">
            <p>
              <strong className="font-bold">
                You can call me your health detective.
              </strong>{' '}
              I’m here to listen to your health story, help you make sense of
              where you’ve been and where you are now, and support you in
              building a plan for the progress you need.
            </p>
            <p>
              If you’re looking for empathic listening <em>and</em> clear
              problem-solving and plan-building, I’m your girl. You’ll receive
              individualized support, true depth of listening, and insights
              shaped by a decade of navigating functional medicine—not a
              cookie-cutter social media supplement protocol.
            </p>
            <p>
              With clarity and steady support, you can find the direction and
              peace you’ve been seeking.
            </p>
          </div>

          <h3 className="display-3 mt-14">
            Training &amp; background: a grounded, informed approach
          </h3>
          <ul className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {credentials.map((credential) => (
              <li
                key={credential}
                className="border-t-2 border-blue pt-3 font-medium leading-snug"
              >
                {credential}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [featured, ...others] = testimonials;

  return (
    <section
      className="run pb-20 lg:pb-32"
      aria-labelledby="testimonials-heading"
    >
      <div className="plate py-16 pr-5 sm:pr-8 lg:py-24 lg:pr-12">
        <h2 id="testimonials-heading" className="display-3 text-pale">
          Feeling heard changes everything
        </h2>

        <figure className="mt-8 max-w-5xl">
          <blockquote className="display-2 !text-[clamp(1.6rem,3.3vw,3.1rem)] !leading-[1.14]">
            “{featured.quote}”
          </blockquote>
          <figcaption className="mt-6 font-bold">
            {featured.attribution}
          </figcaption>
        </figure>

        <div className="mt-16 gap-x-12 md:columns-2 lg:mt-20 xl:columns-3">
          {others.map((testimonial) => (
            <figure
              key={testimonial.attribution}
              className="mb-10 break-inside-avoid border-t-2 border-light/35 pt-5"
            >
              <blockquote className="text-[1.0625rem] leading-[1.65]">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-4 font-bold">
                {testimonial.attribution}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Offerings() {
  return (
    <section
      id="offerings"
      className="run scroll-mt-10 pb-20 lg:pb-32"
      aria-labelledby="offerings-heading"
    >
      <div className="grid gap-x-12 gap-y-6 lg:grid-cols-12 lg:items-end">
        <h2 id="offerings-heading" className="display-1 lg:col-span-6">
          Offerings
        </h2>
        <p className="lede lg:col-span-6 lg:pb-3">
          Health coaching is personal. We’ll choose the kind of support that
          meets your current needs and gives you a clear, sustainable way
          forward.
        </p>
      </div>

      <ul className="mt-14 space-y-14 lg:mt-24 lg:space-y-20">
        {offerings.map((offering) => (
          <li
            key={offering.title}
            className="relative grid gap-x-12 gap-y-5 lg:grid-cols-12"
          >
            <Knot />
            <div className="lg:col-span-5">
              <h3 className="display-3 max-w-[20ch]">{offering.title}</h3>
              {offering.subtitle ? (
                <p className="mt-2 text-wash">{offering.subtitle}</p>
              ) : null}
            </div>
            <div className="copy lg:col-span-7">
              {offering.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </li>
        ))}
      </ul>

      <article className="plate mt-20 grid gap-x-12 gap-y-10 py-12 pr-5 sm:pr-8 lg:mt-28 lg:grid-cols-12 lg:items-center lg:py-20 lg:pr-12">
        <div className="lg:col-span-7">
          <p className="small font-bold text-sun">Course coming soon</p>
          <h3 className="display-2 mt-4">Mapping Your Health Story</h3>
          <p className="copy mt-7">
            This course will walk you through creating a tangible timeline of
            your health story for your own processing, insights, and use with
            providers. It will help you identify your own potential root causes
            and go deeper into how your health story has impacted your identity
            and sense of self. We will talk about the next right steps for you
            and encourage you to tell your health story in an empowering way.
          </p>
        </div>
        <figure className="relative aspect-[4/3] overflow-hidden outline outline-2 outline-light/70 lg:col-span-5 lg:aspect-[4/5]">
          <img
            src="/images/mapping-health-story.jpg"
            alt="An open book surrounded by apple blossoms and a leather journal"
            width="1800"
            height="2700"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-[50%_42%] mix-blend-screen brightness-110 contrast-125 grayscale"
          />
        </figure>
      </article>
    </section>
  );
}

function CoachingStructure() {
  return (
    <section
      id="coaching"
      className="run scroll-mt-10 pb-20 lg:pb-32"
      aria-labelledby="coaching-heading"
    >
      <div className="grid gap-x-12 gap-y-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 id="coaching-heading" className="display-2">
            Support that goes deeper
          </h2>
          <p className="lede mt-7 max-w-[40ch]">
            We’ll discuss current pricing and the right coaching rhythm during
            your free consultation. Family and close-friend rates are also
            available.
          </p>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="button button-ink mt-9"
          >
            Book a free consultation
          </a>
        </div>
        <Print
          src="/images/coaching-chamomile.jpg"
          alt="Chamomile flowers arranged with amber bottles and a candle"
          width={1800}
          height={2700}
          position="50% 56%"
          className="aspect-[4/3] lg:col-span-4 lg:col-start-9 lg:aspect-[4/5]"
        />
      </div>

      <ol className="mt-16 space-y-14 lg:mt-24 lg:space-y-20">
        <li className="relative grid gap-x-12 gap-y-5 lg:grid-cols-12">
          <span aria-hidden="true" className="node">
            1
          </span>
          <div className="lg:col-span-5">
            <h3 className="display-3">
              <span className="sr-only">Step 1: </span>Initial 90-minute session
            </h3>
            <p className="mt-2 text-wash">Start here</p>
          </div>
          <div className="copy lg:col-span-7">
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
        </li>
        <li className="relative grid gap-x-12 gap-y-5 lg:grid-cols-12">
          <span aria-hidden="true" className="node">
            2
          </span>
          <div className="lg:col-span-5">
            <h3 className="display-3 max-w-[20ch]">
              <span className="sr-only">Step 2: </span>Ongoing monthly or
              bimonthly sessions
            </h3>
            <p className="mt-2 text-wash">60 minutes</p>
          </div>
          <div className="copy lg:col-span-7">
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

      <div className="mt-20 lg:mt-28">
        <h3 className="display-2 max-w-[18ch]">Add support when you need it</h3>
        <p className="copy mt-6">
          Lab reviews and additional research are available alongside your
          ongoing coaching plan when your situation calls for a closer look or
          greater collaboration.
        </p>
      </div>

      <div className="mt-12 grid gap-x-12 gap-y-12 lg:grid-cols-12">
        <article className="border-t-2 border-blue pt-6 lg:col-span-7">
          <h4 className="display-3">Functional wellness lab review</h4>
          <p className="mt-2 text-wash">Optional</p>
          <div className="copy mt-6">
            <p>
              I can help you order a comprehensive blood panel through Labcorp.
              A basic panel is approximately $150 and a comprehensive panel
              approximately $250 for the lab itself. Other functional lab
              options may be considered based on your symptoms, needs, and my
              areas of expertise.
            </p>
            <p>
              Your review includes a summary of optimal ranges, possible
              background on higher or lower results, focused lifestyle
              recommendations, and a tailored supplement protocol. A lab review
              can replace a monthly session with sufficient notice.
            </p>
            <p>
              Recent doctor-ordered bloodwork may also be reviewed, though many
              panels do not include enough markers for a comprehensive picture.
              Results from the last three months are preferred.
            </p>
          </div>
        </article>
        <article className="border-t-2 border-blue pt-6 lg:col-span-5">
          <h4 className="display-3">Additional research or consulting</h4>
          <p className="mt-2 text-wash">Optional</p>
          <div className="copy mt-6">
            <p>
              An hourly rate is available for complex cases that require
              research beyond typical coaching needs, or when you would like me
              to communicate and collaborate with other members of your care
              team.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="run scroll-mt-6"
      aria-labelledby="contact-heading"
    >
      <div className="plate thread-end grid gap-x-12 gap-y-12 py-16 pr-5 sm:pr-8 lg:grid-cols-12 lg:py-24 lg:pr-12">
        <span aria-hidden="true" className="thread-dot" />

        <div className="lg:col-span-6">
          <h2 id="contact-heading" className="display-1">
            Reach out!
          </h2>
          <p className="lede mt-8 max-w-[34ch]">
            Tell me a little about what you’re navigating and what kind of
            support you’re looking for. I’ll follow up so we can talk about
            whether coaching together feels like the right fit.
          </p>
          <p className="mt-10 max-w-[34ch] leading-relaxed">
            Prefer to choose a time now?{' '}
            <a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Book a free coaching consultation
            </a>
          </p>
        </div>

        <form
          action="mailto:kathleenwynewellness@gmail.com"
          method="post"
          encType="text/plain"
          className="lg:col-span-5 lg:col-start-8 lg:pt-4"
        >
          <div className="grid gap-7 sm:grid-cols-2">
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
          <label className="form-label mt-7">
            Phone number
            <input
              className="form-field"
              type="tel"
              name="Phone"
              autoComplete="tel"
            />
          </label>
          <label className="form-label mt-7">
            What would you like support with?
            <textarea
              className="form-field min-h-36 resize-y"
              name="What I would like support with"
              required
            />
          </label>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <button type="submit" className="button">
              Send my message
            </button>
            <p className="small max-w-[17rem] text-pale">
              Sending opens your email app with your answers addressed to
              Kathleen.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="frame pb-10 pt-12 lg:pt-16">
      <div className="grid gap-10 pl-[calc(var(--spine)+var(--lead))] lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="display-3">Kathleen Wyne Wellness</p>
          <p className="mt-2 max-w-[30ch] text-wash">
            Clarity, joy, and direction through functional health coaching.
          </p>
        </div>
        <nav aria-label="Footer navigation" className="lg:col-span-3">
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <a className="link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="space-y-2 lg:col-span-4">
          <li>
            <a className="link" href="mailto:kathleenwynewellness@gmail.com">
              kathleenwynewellness@gmail.com
            </a>
          </li>
          <li>
            <a
              className="link"
              href="https://instagram.com/kathleenwyne.wellness"
              target="_blank"
              rel="noreferrer"
            >
              @kathleenwyne.wellness on Instagram
            </a>
          </li>
        </ul>
        <div className="small space-y-3 text-wash lg:col-span-8">
          <p>
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
