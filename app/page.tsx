import Image from "next/image";

const EMAIL = "gamepromotion@playercollabs.com";

const PLATFORMS = [
  { name: "Twitch", color: "#9146ff", focus: "Live streams", region: "Global" },
  { name: "YouTube", color: "#ff0033", focus: "Videos and live", region: "Global" },
  { name: "Kick", color: "#53fc18", focus: "Live streams", region: "Global" },
  { name: "TikTok", color: "#25f4ee", focus: "Short video", region: "Global" },
  { name: "SOOP", color: "#2f6bff", focus: "Live streams", region: "South Korea" },
  { name: "Chzzk", color: "#00ffa3", focus: "Live streams", region: "South Korea" },
  { name: "BiliBili", color: "#00a1d6", focus: "Videos and live", region: "China" },
];

const STEPS = [
  { title: "Tell us about your game", body: "Genre, launch date, budget and the players you want to reach." },
  { title: "Meet your creators", body: "We shortlist creators whose audience plays games like yours, on the platforms they watch." },
  { title: "Go live together", body: "We handle outreach, keys and scheduling, then report on every stream and video." },
];

const STATS = [
  { value: "70,000+", label: "Creators" },
  { value: "7", label: "Platforms" },
  { value: "20+", label: "Countries" },
];

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ice";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
        <a href="#top" className={`flex items-center gap-3 rounded-md ${focusRing}`}>
          <Image src="/images/logo.svg" alt="" width={34} height={34} priority />
          <span className="font-display text-base font-bold">Player Collabs</span>
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className={`rounded-lg px-4 py-2 text-sm font-medium text-ink ring-1 ring-line transition-colors hover:bg-blue/15 hover:ring-blue ${focusRing}`}
        >
          Contact us
        </a>
      </header>

      <main id="top" className="flex-1">
        {/* Hero: the two halves of the name meet in the middle */}
        <section className="relative px-5 pb-20 pt-12 sm:px-8 sm:pb-28 sm:pt-20">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[38%] -z-10 h-[28rem] w-[min(60rem,120vw)] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgb(37_99_235/0.35),transparent)]"
          />
          <div className="mx-auto max-w-7xl">
            <h1 className="glow font-display font-black uppercase leading-[0.95] tracking-[-0.03em] text-[clamp(2.4rem,10.5vw,10rem)]">
              <span className="meet-left block">Player</span>
              <span className="meet-right block text-right text-ice">Collabs</span>
            </h1>
            <div className="mt-12 flex flex-col gap-8 sm:mt-16 md:flex-row md:items-end md:justify-between">
              <div className="max-w-xl">
                <p className="font-display text-2xl font-bold leading-tight sm:text-3xl">Where Players Meet Opportunity.</p>
                <p className="mt-4 text-lg leading-relaxed text-muted">
                  Game studios and content creators, matched and working together on every major platform.
                </p>
              </div>
              <a
                href={`mailto:${EMAIL}`}
                className={`inline-flex w-fit items-center rounded-lg bg-blue px-7 py-4 text-base font-semibold text-white shadow-[0_0_40px_rgb(37_99_235/0.5)] transition hover:bg-[#3b74f0] hover:shadow-[0_0_56px_rgb(37_99_235/0.7)] ${focusRing}`}
              >
                Promote your game
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section aria-labelledby="about-heading" className="border-t border-line px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <h2 id="about-heading" className="max-w-4xl font-display text-3xl font-bold leading-[1.15] sm:text-5xl">
              We help game studios collaborate with content creators across every platform
            </h2>
            <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
              {STEPS.map((step, i) => (
                <li key={step.title} className="border-t-2 border-blue pt-6">
                  <span className="font-display text-sm font-bold text-ice">Step {i + 1}</span>
                  <h3 className="mt-3 font-display text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 max-w-[40ch] leading-relaxed text-muted">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Platforms: a roster of where the creators are */}
        <section aria-labelledby="platforms-heading" className="border-t border-line bg-panel px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16">
            <div>
              <h2 id="platforms-heading" className="font-display text-3xl font-bold leading-[1.15] sm:text-4xl">
                Creators on every screen your players use
              </h2>
              <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-muted">
                From global streaming giants to the platforms that lead in Korea and China, we find the creators your
                players already follow.
              </p>
            </div>
            <ul className="divide-y divide-line border-y border-line">
              {PLATFORMS.map((p) => (
                <li key={p.name} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-5 py-5">
                  <span
                    aria-hidden
                    className="h-10 w-1.5 rounded-full"
                    style={{ backgroundColor: p.color, boxShadow: `0 0 14px ${p.color}` }}
                  />
                  <span>
                    <span className="block font-display text-xl font-bold sm:text-2xl">{p.name}</span>
                    <span className="mt-1 block text-sm text-muted">{p.focus}</span>
                  </span>
                  <span className="text-sm text-muted">{p.region}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Stats */}
        <section aria-label="Player Collabs in numbers" className="border-t border-line px-5 py-20 sm:px-8 sm:py-24">
          <dl className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-3 sm:gap-x-10">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col-reverse gap-3">
                <dt className="text-lg text-muted">{s.label}</dt>
                <dd className="glow font-display text-5xl font-black leading-none text-ice sm:text-4xl lg:text-5xl xl:text-6xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>

      <footer className="border-t border-line px-5 py-12 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm text-muted">Game promotion enquiries</p>
            <a
              href={`mailto:${EMAIL}`}
              className={`mt-2 inline-block break-all font-display text-lg font-bold text-ice underline-offset-4 hover:underline sm:text-2xl ${focusRing}`}
            >
              {EMAIL}
            </a>
          </div>
          <p className="text-sm text-muted">© {new Date().getFullYear()} Player Collabs</p>
        </div>
      </footer>
    </div>
  );
}
