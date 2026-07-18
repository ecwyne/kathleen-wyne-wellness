import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

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
        <About />
        <Credentials />
        <Testimonials />
        <LilacInterlude />
        <Offerings />
        <CoachingStructure />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="border-b border-sage bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-x-4 px-5 py-4 sm:px-8 lg:grid-cols-[auto_1fr_auto] lg:px-12">
        <a
          href="#top"
          className="font-display text-lg uppercase tracking-[0.18em] sm:text-xl"
          aria-label="Kathleen Wyne Wellness, back to top"
        >
          Kathleen Wyne
          <span className="ml-2 hidden text-sm lowercase italic tracking-[0.1em] text-sage sm:inline">
            wellness
          </span>
        </a>

        <nav
          aria-label="Primary navigation"
          className="order-3 col-span-2 mt-4 border-t border-sage/40 pt-3 lg:order-none lg:col-span-1 lg:mt-0 lg:border-0 lg:pt-0"
        >
          <ul className="flex items-center justify-between gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.1em] sm:justify-center sm:gap-8 sm:text-xs sm:tracking-[0.14em]">
            <li>
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link" href="#offerings">
                Offerings
              </a>
            </li>
            <li>
              <a className="nav-link" href="#coaching">
                Pricing
              </a>
            </li>
            <li>
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <a href="#contact" className="button-compact">
          Reach out
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="scroll-mt-20 overflow-hidden bg-sage">
      <div className="mx-auto grid max-w-[100rem] md:min-h-[calc(100svh-7.5rem)] md:grid-cols-[1.05fr_0.95fr]">
        <div className="flex items-center px-5 py-14 sm:px-10 sm:py-16 md:px-8 lg:px-14 xl:px-20">
          <div className="mx-auto w-full max-w-2xl md:mx-0">
            <img
              src="/images/kathleen-wyne-wellness-logo.png"
              alt="Kathleen Wyne Wellness"
              width="813"
              height="813"
              className="mb-2 h-auto w-32 sm:w-40"
              fetchPriority="high"
            />
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-cream">
              Functional health coaching
            </p>
            <h1 className="font-script text-6xl leading-[0.92] text-cream sm:text-7xl md:text-6xl lg:text-7xl xl:text-[5.7rem]">
              Clarity, joy,
              <span className="relative mt-2 block w-fit">
                and direction
                <img
                  aria-hidden="true"
                  src="/images/swoosh.svg"
                  className="absolute -bottom-3 left-0 h-3 w-[92%]"
                />
              </span>
            </h1>
            <h2 className="mt-11 max-w-xl font-display text-3xl font-medium leading-tight sm:text-4xl">
              Get free from being stuck in symptoms.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8">
              Life is for living, not constant symptom stress. If your days are
              swallowed by appointments, random supplements, and endless
              dead-end advice, I’m here to help you cut through the noise.
            </p>
            <p className="mt-4 max-w-xl leading-7">
              One-on-one health coaching to help you focus your energy,
              understand your health, and figure out the next best steps for
              <strong> you</strong>.
            </p>
            <a href="#contact" className="button-primary mt-8">
              Reach out!
            </a>
          </div>
        </div>

        <figure className="relative order-first min-h-[18rem] overflow-hidden sm:min-h-[22rem] md:order-none md:min-h-full">
          <img
            src="/images/hero-daiga-ellaby.jpg"
            alt="A woman gathering wildflowers in a sunlit meadow"
            width="1800"
            height="2700"
            className="absolute inset-0 h-full w-full object-cover object-[50%_59%] md:object-[50%_58%]"
            fetchPriority="high"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-sage/35 to-transparent md:inset-y-0 md:left-0 md:h-auto md:w-20 md:bg-gradient-to-r"
          />
        </figure>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-8 bg-ivory py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
        <div className="relative mx-auto w-full max-w-md lg:sticky lg:top-8">
          <div className="absolute -left-4 -top-4 h-full w-full border border-sage sm:-left-6 sm:-top-6" />
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
          <p className="eyebrow text-sage">About me</p>
          <h2 className="section-title mt-3">I’m Kathleen Wyne</h2>
          <img
            aria-hidden="true"
            src="/images/swoosh.svg"
            className="mt-1 h-3 w-56"
          />
          <p className="mt-8 font-display text-2xl font-medium leading-snug sm:text-3xl">
            Functional Medicine Certified Health Coach with additional training
            in optimal bloodwork ranges.
          </p>
          <div className="mt-7 space-y-5 text-lg leading-8">
            <p>
              You can call me your health detective. I’m here to listen to your
              health story, help you make sense of where you’ve been and where
              you are now, and support you in building a plan for the progress
              you need.
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

          <h3 className="mt-10 font-display text-3xl font-medium">
            We can start wherever you are right now.
          </h3>
          <ul className="mt-5 divide-y divide-stone border-y border-stone">
            {paths.map((path, index) => (
              <li key={path} className="flex gap-4 py-4 leading-7">
                <span className="font-display text-lg font-semibold text-sage">
                  0{index + 1}
                </span>
                <span>{path}</span>
              </li>
            ))}
          </ul>

          <a href="#contact" className="button-primary mt-9">
            Reach out!
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
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <p className="eyebrow text-cream">Training &amp; background</p>
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

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);
  const [isInteractionPaused, setIsInteractionPaused] = useState(false);
  const isPaused = isManuallyPaused || isInteractionPaused;

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 10_000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  function showPrevious() {
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length,
    );
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  }

  return (
    <section
      className="bg-sage py-20 sm:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-cream">Client experiences</p>
          <h2
            id="testimonials-heading"
            className="section-title mt-3 text-cream"
          >
            Feeling heard changes everything
          </h2>
        </div>

        <div
          className="mx-auto mt-14 max-w-5xl"
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          onMouseEnter={() => setIsInteractionPaused(true)}
          onMouseLeave={() => setIsInteractionPaused(false)}
          onFocusCapture={() => setIsInteractionPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsInteractionPaused(false);
            }
          }}
        >
          <div className="grid">
            {testimonials.map((testimonial, index) => (
              <figure
                key={testimonial.attribution}
                aria-hidden={index !== activeIndex}
                className={`col-start-1 row-start-1 flex flex-col justify-center border border-cream bg-ivory p-8 text-center transition-opacity duration-300 sm:p-14 lg:px-20 ${
                  index === activeIndex
                    ? 'visible opacity-100'
                    : 'invisible pointer-events-none opacity-0'
                }`}
              >
                <span
                  aria-hidden="true"
                  className="font-display text-7xl leading-none text-mauve"
                >
                  “
                </span>
                <blockquote className="mx-auto max-w-4xl text-lg leading-8 sm:text-xl sm:leading-9">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-7 font-display text-2xl font-semibold text-sage">
                  — {testimonial.attribution}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-6 flex flex-col items-center justify-between gap-5 sm:flex-row">
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="carousel-button"
                onClick={showPrevious}
                aria-label="Show previous testimonial"
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                className="carousel-button"
                onClick={showNext}
                aria-label="Show next testimonial"
              >
                <span aria-hidden="true">→</span>
              </button>
              <button
                type="button"
                className="carousel-button"
                onClick={() => setIsManuallyPaused((current) => !current)}
                aria-pressed={isManuallyPaused}
                aria-label={
                  isManuallyPaused
                    ? 'Resume testimonial rotation'
                    : 'Pause testimonial rotation'
                }
              >
                <span aria-hidden="true" className="text-base leading-none">
                  {isManuallyPaused ? '▶' : 'Ⅱ'}
                </span>
              </button>
            </div>

            <div
              className="flex items-center gap-2"
              aria-label="Choose a testimonial"
            >
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.attribution}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-3 w-3 rounded-full border border-cream ${
                    index === activeIndex ? 'bg-cream' : 'bg-transparent'
                  }`}
                  aria-label={`Show testimonial ${index + 1} of ${testimonials.length}`}
                  aria-current={index === activeIndex ? 'true' : undefined}
                />
              ))}
            </div>
          </div>

          <p className="mt-4 text-center text-xs tracking-[0.12em] text-cream sm:text-right">
            {activeIndex + 1} / {testimonials.length}
          </p>
        </div>
      </div>
    </section>
  );
}

function LilacInterlude() {
  return (
    <figure className="relative mx-auto h-56 max-w-[100rem] overflow-hidden sm:h-72 lg:h-80">
      <img
        src="/images/lilac-divider.jpg"
        alt="Lilac blossoms in soft spring light"
        width="1800"
        height="2700"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-[50%_57%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-sage/20 via-transparent to-sage/20"
      />
    </figure>
  );
}

function Offerings() {
  return (
    <section id="offerings" className="scroll-mt-8 bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="eyebrow text-sage">Ways to work together</p>
            <h2 className="section-title mt-3">Offerings</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8">
            Health coaching is personal. We’ll choose the kind of support that
            meets your current needs and gives you a clear, sustainable way
            forward.
          </p>
        </div>

        <aside className="mt-12 border border-black bg-dust p-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
          <p className="font-display text-2xl font-medium sm:text-3xl">
            Maternity leave: mid-November 2026 through mid-February 2027
          </p>
          <p className="mt-3 max-w-md leading-6 sm:mt-0">
            I’ll be taking time away to welcome our newest little boy into our
            family.
          </p>
        </aside>

        <div className="mt-12 divide-y divide-stone border-y border-stone">
          {offerings.map((offering, index) => (
            <article
              key={offering.title}
              className="grid gap-5 py-9 md:grid-cols-[4rem_0.8fr_1.2fr] md:gap-8 md:py-12"
            >
              <p className="font-display text-xl font-semibold text-sage">
                0{index + 1}
              </p>
              <div>
                <h3 className="font-display text-3xl font-medium leading-tight sm:text-4xl">
                  {offering.title}
                </h3>
                {offering.subtitle ? (
                  <p className="mt-2 text-sm italic text-slateblue">
                    {offering.subtitle}
                  </p>
                ) : null}
              </div>
              <div className="space-y-4 leading-7">
                {offering.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <article className="mt-12 grid overflow-hidden border border-sage md:grid-cols-[0.85fr_1.15fr]">
          <figure className="relative min-h-[24rem] md:min-h-full">
            <img
              src="/images/mapping-health-story.jpg"
              alt="An open book surrounded by apple blossoms and a leather journal"
              width="1800"
              height="2700"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-[50%_42%]"
            />
          </figure>
          <div>
            <div className="bg-sage p-8 text-cream sm:p-10">
              <p className="eyebrow">Coming soon</p>
              <h3 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl">
                Mapping Your Health Story
              </h3>
            </div>
            <div className="bg-ivory p-8 leading-7 sm:p-10">
              <p>
                This course will walk you through creating a tangible timeline
                of your health story for your own processing, insights, and use
                with providers. It will help you identify your own potential
                root causes and go deeper into how your health story has
                impacted your identity and sense of self. We will talk about the
                next right steps for you and encourage you to tell your health
                story in an empowering way.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function CoachingStructure() {
  return (
    <section id="coaching" className="scroll-mt-8 bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid overflow-hidden border border-sage md:grid-cols-[1.1fr_0.9fr] md:items-stretch">
          <div className="flex items-center bg-cream p-8 sm:p-12 lg:p-16">
            <div className="max-w-2xl">
              <p className="eyebrow text-sage">
                Pricing &amp; coaching structure
              </p>
              <h2 className="section-title mt-3">Support that goes deeper</h2>
              <p className="mt-7 text-lg leading-8">
                We’ll discuss current pricing and the right coaching rhythm
                during your free consultation. Family and close-friend rates are
                also available.
              </p>
            </div>
          </div>
          <figure className="relative min-h-[23rem] md:min-h-full">
            <img
              src="/images/coaching-chamomile.jpg"
              alt="Chamomile flowers arranged with amber bottles and a candle"
              width="1800"
              height="2700"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-[50%_56%]"
            />
          </figure>
        </div>

        <div className="mt-14">
          <p className="eyebrow text-center text-sage">
            The core coaching path
          </p>
          <ol className="mt-7 grid items-stretch gap-5 md:grid-cols-[1fr_auto_1fr] md:gap-7">
            <li className="border border-black bg-cream p-7 sm:p-10">
              <div className="flex items-center justify-between gap-5">
                <p className="font-display text-sm font-semibold tracking-[0.2em] text-sage">
                  Step 01
                </p>
                <p className="rounded-full border border-sage px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-sage">
                  Start here
                </p>
              </div>
              <h3 className="mt-5 font-display text-3xl font-medium leading-tight sm:text-4xl">
                Initial 90-minute session
              </h3>
              <div className="mt-5 space-y-4 leading-7">
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

            <li
              aria-hidden="true"
              className="flex items-center justify-center text-4xl text-sage"
            >
              <span className="md:hidden">↓</span>
              <span className="hidden md:inline">→</span>
            </li>

            <li className="border border-black bg-cream p-7 sm:p-10">
              <div className="flex items-center justify-between gap-5">
                <p className="font-display text-sm font-semibold tracking-[0.2em] text-sage">
                  Step 02
                </p>
                <p className="rounded-full border border-sage px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-sage">
                  Continue
                </p>
              </div>
              <h3 className="mt-5 font-display text-3xl font-medium leading-tight sm:text-4xl">
                Ongoing monthly or bimonthly sessions
              </h3>
              <p className="mt-2 italic text-slateblue">60 minutes</p>
              <div className="mt-5 space-y-4 leading-7">
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

        <div className="mt-20 border-t border-stone pt-14">
          <div className="grid gap-5 md:grid-cols-[0.7fr_1.3fr] md:items-end md:gap-10">
            <div>
              <p className="eyebrow text-sage">Optional deeper support</p>
              <h3 className="mt-3 font-display text-4xl font-medium leading-tight sm:text-5xl">
                Add support when you need it
              </h3>
            </div>
            <p className="max-w-2xl leading-7">
              Lab reviews and additional research are available alongside your
              ongoing coaching plan when your situation calls for a closer look
              or greater collaboration.
            </p>
          </div>

          <div className="mt-9 grid gap-px overflow-hidden border border-stone bg-stone md:grid-cols-[1.35fr_0.65fr]">
            <SupportOption
              label="Optional 01"
              title="Functional wellness lab review"
              paragraphs={[
                'I can help you order a comprehensive blood panel through Labcorp. A basic panel is approximately $150 and a comprehensive panel approximately $250 for the lab itself. Other functional lab options may be considered based on your symptoms, needs, and my areas of expertise.',
                'Your review includes a summary of optimal ranges, possible background on higher or lower results, focused lifestyle recommendations, and a tailored supplement protocol. A lab review can replace a monthly session with sufficient notice.',
                'Recent doctor-ordered bloodwork may also be reviewed, though many panels do not include enough markers for a comprehensive picture. Results from the last three months are preferred.',
              ]}
            />
            <SupportOption
              label="Optional 02"
              title="Additional research or consulting"
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
}: {
  label: string;
  title: string;
  paragraphs: Array<string>;
}) {
  return (
    <article className="bg-cream p-7 sm:p-10">
      <p className="font-display text-sm font-semibold tracking-[0.2em] text-sage">
        {label}
      </p>
      <h3 className="mt-4 font-display text-3xl font-medium leading-tight sm:text-4xl">
        {title}
      </h3>
      <div className="mt-5 space-y-4 leading-7">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-8 bg-sage py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
        <div>
          <p className="eyebrow text-cream">Let’s connect</p>
          <h2 className="section-title mt-3 text-cream">Reach out!</h2>
          <img
            aria-hidden="true"
            src="/images/swoosh.svg"
            className="mt-1 h-3 w-40"
          />
          <p className="mt-8 max-w-lg text-lg leading-8">
            Tell me a little about what you’re navigating and what kind of
            support you’re looking for. I’ll follow up so we can talk about
            whether coaching together feels like the right fit.
          </p>
          <p className="mt-6 leading-7">
            Prefer to choose a time now?{' '}
            <a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold underline"
            >
              Book a free coaching consultation.
            </a>
          </p>
        </div>

        <form
          action="mailto:kathleenwynewellness@gmail.com"
          method="post"
          encType="text/plain"
          className="border border-black bg-cream p-6 sm:p-10"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="form-label">
              Name
              <input className="form-field" type="text" name="Name" required />
            </label>
            <label className="form-label">
              Email
              <input
                className="form-field"
                type="email"
                name="Email"
                required
              />
            </label>
          </div>
          <label className="form-label mt-6">
            Phone number
            <input className="form-field" type="tel" name="Phone" />
          </label>
          <label className="form-label mt-6">
            What would you like support with?
            <textarea
              className="form-field min-h-40 resize-y"
              name="What I would like support with"
              required
            />
          </label>
          <button type="submit" className="button-primary mt-7">
            Send my message
          </button>
          <p className="mt-4 text-xs leading-5 text-slateblue">
            Submitting opens your default email app with your responses
            addressed to Kathleen.
          </p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slateblue text-cream">
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
          <div className="max-w-3xl">
            <p>
              Wellness coaching and educational content are not medical advice
              and are not a substitute for diagnosis or treatment from a
              qualified healthcare professional. Always consult your healthcare
              provider regarding medical concerns and changes to your care.
            </p>
          </div>
          <p>© {new Date().getFullYear()} Kathleen Wyne Wellness</p>
        </div>
      </div>
    </footer>
  );
}
