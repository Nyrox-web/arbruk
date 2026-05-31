import Link from "next/link";

export default function ArbrukPage() {
  const phone = "734187333";
  const phoneFormatted = "734 187 333";

  const services = [
    {
      title: "Układanie kostki brukowej",
      desc: "Precyzyjne wykonanie podjazdów, chodników, placów i ścieżek z solidnym przygotowaniem podłoża.",
      icon: "▦",
    },
    {
      title: "Podjazdy i wjazdy",
      desc: "Trwałe nawierzchnie pod auta osobowe i dostawcze, dopasowane do posesji i sposobu użytkowania.",
      icon: "▰",
    },
    {
      title: "Tarasy i schody",
      desc: "Estetyczne tarasy, wejścia do domu oraz schody z kostki, płyt i elementów betonowych.",
      icon: "◒",
    },
    {
      title: "Chodniki i alejki",
      desc: "Funkcjonalne przejścia, alejki ogrodowe i dojścia do budynków wykonane z dbałością o detale.",
      icon: "≋",
    },
    {
      title: "Obrzeża i palisady",
      desc: "Montaż obrzeży, krawężników, palisad oraz elementów wykończeniowych nawierzchni.",
      icon: "▭",
    },
    {
      title: "Prace ziemne",
      desc: "Korytowanie, niwelacja terenu, przygotowanie podbudowy i prace przygotowawcze.",
      icon: "⌁",
    },
  ];

  const stats = [
    ["10+", "lat doświadczenia"],
    ["500+", "realizacji"],
    ["100%", "dokładności"],
    ["24h", "szybka wycena"],
  ];

  const benefits = [
    {
      title: "Dokładność",
      desc: "Każdy etap prac wykonujemy z dbałością o podłoże, spadki i estetykę wykończenia.",
    },
    {
      title: "Solidne materiały",
      desc: "Pracujemy na sprawdzonych rozwiązaniach, które zapewniają trwałość na lata.",
    },
    {
      title: "Terminowość",
      desc: "Ustalamy konkretny zakres prac i realizujemy go zgodnie z planem.",
    },
    {
      title: "Doradztwo",
      desc: "Pomagamy dobrać układ, kolorystykę i rozwiązania najlepsze dla Twojej posesji.",
    },
  ];

  const realizations = [
    "Podjazd z kostki grafitowej",
    "Taras przy domu jednorodzinnym",
    "Chodnik i wejście do posesji",
    "Plac przed firmą",
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        section {
          scroll-margin-top: 90px;
        }
      `}</style>

      <section id="start" className="relative min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(245,158,11,.25),transparent_32%),linear-gradient(120deg,rgba(0,0,0,.98),rgba(0,0,0,.72),rgba(0,0,0,.96))]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1800&auto=format&fit=crop')] bg-cover bg-center opacity-35" />

        <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <a href="#start" className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-400/30 bg-yellow-400/10 shadow-[0_0_35px_rgba(245,158,11,.18)]">
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
              <a href="#start" className="text-yellow-400 transition hover:text-yellow-300">
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
              <a href="#kontakt" className="transition hover:text-yellow-400">
                Kontakt
              </a>
            </nav>

            <a
              href={`tel:${phone}`}
              className="hidden rounded-2xl border border-yellow-400/40 px-6 py-3 font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-black md:inline-flex"
            >
              ☎ {phoneFormatted}
            </a>
          </div>
        </header>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-40 lg:min-h-screen lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="mb-6 text-sm font-black uppercase tracking-[0.35em] text-yellow-400">
              Profesjonalne usługi brukarskie
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Brukarstwo z dokładnością,{" "}
              <span className="text-yellow-400">która zostaje na lata.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-300">
              Wykonujemy podjazdy, tarasy, chodniki, obrzeża i kompleksowe
              nawierzchnie z kostki brukowej. Stawiamy na solidną podbudowę,
              estetykę i terminowe wykonanie.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#kontakt"
                className="rounded-2xl bg-yellow-400 px-8 py-4 font-black text-black shadow-[0_0_40px_rgba(245,158,11,.25)] transition hover:scale-105"
              >
                Darmowa wycena
              </a>

              <a
                href="#realizacje"
                className="rounded-2xl border border-white/20 px-8 py-4 font-bold text-white transition hover:border-yellow-400/50 hover:bg-white/10"
              >
                Zobacz realizacje
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[44px] bg-yellow-400/20 blur-[100px]" />

            <div className="relative overflow-hidden rounded-[44px] border border-white/10 bg-white/[0.04] p-5 shadow-2xl backdrop-blur-xl">
              <div className="h-[520px] rounded-[34px] bg-[url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />

              <div className="absolute bottom-10 left-10 right-10 rounded-3xl border border-white/10 bg-black/75 p-6 backdrop-blur">
                <p className="text-sm uppercase tracking-[0.25em] text-yellow-400">
                  Bezpłatna wycena
                </p>
                <p className="mt-2 text-2xl font-black">
                  Podjazdy, tarasy, chodniki i kompleksowe realizacje.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-4">
          {stats.map(([number, label]) => (
            <div
              key={label}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-yellow-400/30"
            >
              <p className="text-4xl font-black text-yellow-400">{number}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-zinc-500">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="onas" className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-400">
              O firmie
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              Solidne wykonanie zaczyna się od dobrze przygotowanego podłoża.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-zinc-400">
            <p>
              ARBRUK to firma brukarska wykonująca trwałe i estetyczne
              nawierzchnie dla klientów prywatnych oraz firm. Każdą realizację
              traktujemy indywidualnie — od przygotowania terenu, przez dobór
              materiału, aż po dokładne wykończenie.
            </p>

            <p>
              Naszym celem jest stworzenie nawierzchni, która nie tylko dobrze
              wygląda, ale też wytrzymuje codzienne użytkowanie przez długie
              lata.
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
            Nasze usługi
          </p>

          <h2 className="max-w-3xl text-4xl font-black md:text-6xl">
            Kompleksowe usługi brukarskie.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-[34px] border border-white/10 bg-zinc-950 p-8 transition duration-500 hover:-translate-y-2 hover:border-yellow-400/40 hover:shadow-[0_0_60px_rgba(245,158,11,.12)]"
              >
                <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-yellow-400/30 bg-yellow-400/10 text-4xl text-yellow-400">
                  {service.icon}
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

      <section id="realizacje" className="mx-auto max-w-7xl px-6 py-28">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-400">
              Realizacje
            </p>

            <h2 className="text-4xl font-black md:text-6xl">
              Zobacz przykładowe realizacje.
            </h2>
          </div>

          <a
            href="#kontakt"
            className="w-fit rounded-2xl border border-white/10 px-6 py-4 font-bold text-zinc-300 transition hover:border-yellow-400/40 hover:bg-white/5 hover:text-white"
          >
            Zapytaj o wycenę →
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {realizations.map((item, index) => (
            <div
              key={item}
              className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-zinc-900 ${
                index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div
                className="h-80 bg-cover bg-center transition duration-700 group-hover:scale-110"
                style={{
                  backgroundImage:
                    index === 0
                      ? "url('https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1200&auto=format&fit=crop')"
                      : index === 1
                      ? "url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop')"
                      : index === 2
                      ? "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop')"
                      : "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop')",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-sm uppercase tracking-[0.25em] text-yellow-400">
                  Realizacja
                </p>
                <h3 className="mt-2 text-xl font-black">{item}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-950 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-400">
            Dlaczego ARBRUK?
          </p>

          <h2 className="max-w-4xl text-4xl font-black md:text-6xl">
            Profesjonalna realizacja od pierwszego kontaktu do odbioru.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="rounded-[30px] border border-white/10 bg-black/40 p-7 transition hover:-translate-y-1 hover:border-yellow-400/30"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-400/30 text-xl font-black text-yellow-400">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-black">{benefit.title}</h3>

                <p className="mt-4 leading-relaxed text-zinc-500">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="relative px-6 py-28">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1800&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-black/85" />

        <div className="relative mx-auto grid max-w-7xl gap-12 rounded-[44px] border border-white/10 bg-black/70 p-8 backdrop-blur-xl md:p-14 lg:grid-cols-[1fr_.9fr]">
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
                ☎ {phoneFormatted}
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