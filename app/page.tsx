export default function ArbrukPage() {
  const phone = "734187333";
  const phoneText = "734 187 333";

  const services = [
    {
      title: "Układanie kostki brukowej",
      desc: "Podjazdy, place, chodniki i ścieżki wykonane z dbałością o podbudowę, spadki i estetykę.",
    },
    {
      title: "Podjazdy i wjazdy",
      desc: "Trwałe nawierzchnie pod auta osobowe i dostawcze, dopasowane do stylu posesji.",
    },
    {
      title: "Tarasy i schody",
      desc: "Eleganckie tarasy, wejścia do domu i schody z kostki, płyt oraz elementów betonowych.",
    },
    {
      title: "Chodniki i alejki",
      desc: "Funkcjonalne przejścia, alejki ogrodowe i dojścia do budynków.",
    },
    {
      title: "Obrzeża i palisady",
      desc: "Montaż obrzeży, krawężników, palisad i elementów wykończeniowych.",
    },
    {
      title: "Prace ziemne",
      desc: "Korytowanie, niwelacja terenu, przygotowanie podbudowy i prace przygotowawcze.",
    },
  ];

  const process = [
    "Kontakt i omówienie zakresu prac",
    "Bezpłatna wycena oraz doradztwo",
    "Przygotowanie terenu i podbudowy",
    "Profesjonalne ułożenie nawierzchni",
  ];

  const opinions = [
    {
      name: "Michał K.",
      text: "Podjazd wykonany bardzo dokładnie. Wszystko terminowo, czysto i zgodnie z ustaleniami.",
    },
    {
      name: "Anna P.",
      text: "Świetny kontakt, konkretna wycena i bardzo estetyczny efekt końcowy. Polecam.",
    },
    {
      name: "Tomasz R.",
      text: "Firma zna się na rzeczy. Doradzili układ kostki i wykonali całość solidnie.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        section {
          scroll-margin-top: 100px;
        }
      `}</style>

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#start" className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-400/30 bg-yellow-400/10 shadow-[0_0_35px_rgba(245,158,11,.2)]">
              <span className="text-3xl font-black text-yellow-400">A</span>
            </div>

            <div>
              <p className="text-2xl font-black tracking-tight">ARBRUK</p>
              <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
                Usługi brukarskie
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-zinc-300 lg:flex">
            <a href="#start" className="text-yellow-400">
              Start
            </a>
            <a href="#onas" className="transition hover:text-yellow-400">
              O nas
            </a>
            <a href="#uslugi" className="transition hover:text-yellow-400">
              Usługi
            </a>
            <a href="#realizacje" className="transition hover:text-yellow-400">
              Realizacje
            </a>
            <a href="#opinie" className="transition hover:text-yellow-400">
              Opinie
            </a>
            <a href="#kontakt" className="transition hover:text-yellow-400">
              Kontakt
            </a>
          </nav>

          <a
            href={`tel:${phone}`}
            className="hidden rounded-2xl border border-yellow-400/40 px-6 py-3 font-black text-yellow-400 transition hover:bg-yellow-400 hover:text-black md:inline-flex"
          >
            ☎ {phoneText}
          </a>
        </div>
      </header>

      <section id="start" className="relative min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(245,158,11,.24),transparent_34%),linear-gradient(120deg,rgba(0,0,0,.98),rgba(0,0,0,.74),rgba(0,0,0,.96))]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1900&auto=format&fit=crop')] bg-cover bg-center opacity-35" />

        <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 pb-24 pt-40 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="mb-6 text-sm font-black uppercase tracking-[0.35em] text-yellow-400">
              Profesjonalne usługi brukarskie
            </p>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Nawierzchnie z kostki brukowej{" "}
              <span className="text-yellow-400">wykonane na lata.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-300">
              ARBRUK wykonuje podjazdy, tarasy, chodniki, obrzeża i kompleksowe
              nawierzchnie brukarskie. Stawiamy na solidną podbudowę,
              terminowość i dokładne wykończenie.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#kontakt"
                className="rounded-2xl bg-yellow-400 px-8 py-4 font-black text-black shadow-[0_0_40px_rgba(245,158,11,.28)] transition hover:scale-105"
              >
                Umów darmową wycenę
              </a>

              <a
                href="#realizacje"
                className="rounded-2xl border border-white/20 px-8 py-4 font-bold text-white transition hover:border-yellow-400/50 hover:bg-white/10"
              >
                Zobacz realizacje
              </a>
            </div>

            <div className="mt-14 grid max-w-2xl gap-4 md:grid-cols-3">
              {[
                ["10+", "lat doświadczenia"],
                ["500+", "realizacji"],
                ["100%", "dokładności"],
              ].map(([num, label]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-white/10 bg-black/55 p-6 backdrop-blur"
                >
                  <p className="text-4xl font-black text-yellow-400">{num}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-zinc-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[46px] bg-yellow-400/20 blur-[100px]" />

            <div className="relative overflow-hidden rounded-[46px] border border-white/10 bg-white/[0.04] p-5 shadow-2xl backdrop-blur-xl">
              <div className="h-[540px] rounded-[36px] bg-[url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1300&auto=format&fit=crop')] bg-cover bg-center" />

              <div className="absolute bottom-10 left-10 right-10 rounded-3xl border border-white/10 bg-black/75 p-6 backdrop-blur">
                <p className="text-sm uppercase tracking-[0.25em] text-yellow-400">
                  Darmowa wycena
                </p>
                <p className="mt-2 text-2xl font-black">
                  Doradzimy najlepsze rozwiązanie dla Twojej posesji.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="onas" className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-400">
              O firmie
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              Solidna kostka zaczyna się od profesjonalnej podbudowy.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-zinc-400">
            <p>
              ARBRUK realizuje prace brukarskie dla domów, firm i inwestycji.
              Każdy projekt zaczynamy od dobrego przygotowania terenu, bo to
              ono decyduje o trwałości nawierzchni.
            </p>

            <p>
              Pomagamy dobrać wzór, kolorystykę i materiały, a następnie
              wykonujemy całość dokładnie, terminowo i estetycznie.
            </p>
          </div>
        </div>
      </section>

      <section
        id="uslugi"
        className="border-y border-white/10 bg-white/[0.02] px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-400">
            Oferta
          </p>

          <h2 className="max-w-3xl text-4xl font-black md:text-6xl">
            Kompleksowe usługi brukarskie.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group rounded-[34px] border border-white/10 bg-zinc-950 p-8 transition duration-500 hover:-translate-y-2 hover:border-yellow-400/40 hover:shadow-[0_0_60px_rgba(245,158,11,.12)]"
              >
                <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-yellow-400/30 bg-yellow-400/10 text-xl font-black text-yellow-400">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-black">{service.title}</h3>

                <p className="mt-4 leading-relaxed text-zinc-500">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="mb-14">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-400">
            Jak pracujemy
          </p>

          <h2 className="text-4xl font-black md:text-6xl">
            Prosty proces od wyceny do gotowej nawierzchni.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {process.map((item, index) => (
            <div
              key={item}
              className="rounded-[30px] border border-white/10 bg-black p-7"
            >
              <p className="text-5xl font-black text-yellow-400">
                0{index + 1}
              </p>
              <p className="mt-8 text-xl font-black">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="realizacje"
        className="border-y border-white/10 bg-zinc-950 px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-400">
                Realizacje
              </p>

              <h2 className="text-4xl font-black md:text-6xl">
                Efekt, który widać od pierwszego spojrzenia.
              </h2>
            </div>

            <a
              href="#kontakt"
              className="w-fit rounded-2xl border border-white/10 px-6 py-4 font-bold text-zinc-300 transition hover:border-yellow-400/40 hover:bg-white/5 hover:text-white"
            >
              Zapytaj o podobną realizację →
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Podjazd premium",
                "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1200&auto=format&fit=crop",
              ],
              [
                "Taras i wejście",
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
              ],
              [
                "Chodnik ogrodowy",
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
              ],
              [
                "Plac firmowy",
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
              ],
            ].map(([title, img], index) => (
              <div
                key={title}
                className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-zinc-900 ${
                  index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <div
                  className="h-80 bg-cover bg-center transition duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${img}')` }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-sm uppercase tracking-[0.25em] text-yellow-400">
                    Realizacja
                  </p>
                  <h3 className="mt-2 text-xl font-black">{title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="opinie" className="mx-auto max-w-7xl px-6 py-28">
        <div className="mb-14">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-400">
            Opinie
          </p>

          <h2 className="text-4xl font-black md:text-6xl">
            Klienci doceniają dokładność i terminowość.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {opinions.map((opinion) => (
            <div
              key={opinion.name}
              className="rounded-[34px] border border-white/10 bg-zinc-950 p-8"
            >
              <p className="text-yellow-400">★★★★★</p>
              <p className="mt-6 leading-relaxed text-zinc-400">
                “{opinion.text}”
              </p>
              <p className="mt-6 font-black">{opinion.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="kontakt" className="relative px-6 py-28">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1800&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-black/85" />

        <div className="relative mx-auto grid max-w-7xl gap-12 rounded-[44px] border border-white/10 bg-black/75 p-8 backdrop-blur-xl md:p-14 lg:grid-cols-[1fr_.9fr]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-400">
              Kontakt
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              Masz projekt?{" "}
              <span className="text-yellow-400">Zrealizujemy go.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Skontaktuj się z nami i otrzymaj darmową wycenę. Doradzimy
              najlepsze rozwiązania dla Twojej posesji, firmy lub inwestycji.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={`tel:${phone}`}
                className="rounded-2xl bg-yellow-400 px-8 py-4 font-black text-black transition hover:scale-105"
              >
                ☎ {phoneText}
              </a>

              <a
                href="mailto:kontakt@arbruk.pl"
                className="rounded-2xl border border-white/20 px-8 py-4 font-bold transition hover:border-yellow-400/40 hover:bg-white/10"
              >
                Napisz do nas
              </a>
            </div>
          </div>

          <form className="rounded-[34px] border border-white/10 bg-zinc-950 p-7">
            <h3 className="text-2xl font-black">Darmowa wycena</h3>

            <div className="mt-6 grid gap-4">
              <input
                placeholder="Imię i nazwisko"
                className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-yellow-400/50"
              />

              <input
                placeholder="Telefon"
                className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-yellow-400/50"
              />

              <select className="rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-yellow-400/50">
                <option>Układanie kostki brukowej</option>
                <option>Podjazd</option>
                <option>Taras</option>
                <option>Chodnik</option>
                <option>Prace ziemne</option>
              </select>

              <textarea
                rows={5}
                placeholder="Opisz krótko zakres prac..."
                className="resize-none rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition focus:border-yellow-400/50"
              />

              <button
                type="button"
                className="rounded-2xl bg-yellow-400 px-7 py-4 font-black text-black transition hover:scale-[1.02]"
              >
                Wyślij zapytanie
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-zinc-500">
        © 2026 ARBRUK — Usługi brukarskie
      </footer>
    </main>
  );
}