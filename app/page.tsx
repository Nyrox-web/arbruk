import Image from "next/image";

export const metadata = {
  title: "Profesjonalne Usługi Brukarskie | Kostka Brukowa, Podjazdy, Tarasy",
  description:
    "Profesjonalna firma brukarska. Układanie kostki brukowej, podjazdy, tarasy, chodniki, obrzeża i kompleksowe prace brukarskie. Darmowa wycena.",
  keywords: [
    "usługi brukarskie",
    "firma brukarska",
    "kostka brukowa",
    "układanie kostki",
    "podjazdy z kostki",
    "tarasy brukowe",
    "brukarz",
  ],
};

const phone = "734187333";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-white overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 lg:px-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#d6a21a33,transparent_35%),radial-gradient(circle_at_bottom_right,#ffffff12,transparent_30%)]" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-14 items-center max-w-7xl mx-auto">
          <div className="animate-fadeInUp">
            <p className="text-yellow-400 font-semibold tracking-widest uppercase mb-4">
              Profesjonalne usługi brukarskie
            </p>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              Solidna kostka brukowa, która robi wrażenie
            </h1>

            <p className="mt-6 text-lg text-zinc-300 max-w-xl">
              Wykonujemy podjazdy, tarasy, chodniki, opaski wokół domu,
              obrzeża oraz kompleksowe prace brukarskie z dbałością o każdy
              detal.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`tel:${phone}`}
                className="rounded-full bg-yellow-400 px-8 py-4 font-bold text-black hover:scale-105 transition"
              >
                Zadzwoń: {phone}
              </a>

              <a
                href="#kontakt"
                className="rounded-full border border-white/20 px-8 py-4 font-bold hover:bg-white hover:text-black transition"
              >
                Darmowa wycena
              </a>
            </div>
          </div>

          <div className="relative flex justify-center animate-float">
            <div className="absolute w-80 h-80 bg-yellow-400/20 blur-3xl rounded-full" />
            <Image
              src="/favicon.png"
              alt="Logo firmy brukarskiej"
              width={520}
              height={520}
              priority
              className="relative drop-shadow-[0_0_60px_rgba(250,204,21,0.25)]"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 lg:px-20 py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-black text-center mb-14">
            Czym się zajmujemy?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Układanie kostki brukowej",
              "Podjazdy i parkingi",
              "Tarasy i ścieżki ogrodowe",
              "Chodniki i alejki",
              "Obrzeża i krawężniki",
              "Naprawa oraz przekładka kostki",
            ].map((item, i) => (
              <div
                key={item}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:bg-yellow-400 hover:text-black transition duration-300 hover:-translate-y-2"
              >
                <span className="text-yellow-400 group-hover:text-black text-4xl font-black">
                  0{i + 1}
                </span>
                <h3 className="mt-6 text-2xl font-bold">{item}</h3>
                <p className="mt-4 text-zinc-400 group-hover:text-black/70">
                  Precyzyjne wykonanie, solidna podbudowa i estetyczne
                  wykończenie na lata.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="px-6 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-black">
              Dlaczego warto wybrać naszą firmę?
            </h2>

            <p className="mt-6 text-zinc-300 text-lg">
              Stawiamy na terminowość, solidność i estetykę. Każde zlecenie
              traktujemy indywidualnie — od przygotowania terenu po finalne
              czyszczenie.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                "Darmowa wycena",
                "Nowoczesny sprzęt",
                "Dokładna podbudowa",
                "Terminowa realizacja",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white/[0.04] border border-white/10 p-5"
                >
                  ✅ {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-yellow-400 to-yellow-700 p-1">
            <div className="rounded-[2rem] bg-[#111] p-10">
              <p className="text-7xl font-black text-yellow-400">10+</p>
              <p className="mt-3 text-2xl font-bold">lat doświadczenia</p>
              <p className="mt-4 text-zinc-400">
                Setki metrów ułożonej kostki i zadowoleni klienci.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OPINIONS */}
      <section className="px-6 lg:px-20 py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-black text-center mb-14">
            Opinie klientów
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["Marek K.", "Podjazd wykonany perfekcyjnie. Wszystko równo, czysto i w terminie."],
              ["Anna P.", "Bardzo profesjonalne podejście. Kostka wygląda lepiej niż oczekiwaliśmy."],
              ["Tomasz W.", "Solidna ekipa, szybka realizacja i dobry kontakt. Polecam."],
            ].map(([name, text]) => (
              <div
                key={name}
                className="rounded-3xl bg-white/[0.04] border border-white/10 p-8 hover:-translate-y-2 transition"
              >
                <p className="text-yellow-400 text-2xl">★★★★★</p>
                <p className="mt-5 text-zinc-300">“{text}”</p>
                <p className="mt-6 font-bold">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="kontakt" className="px-6 lg:px-20 py-24">
        <div className="max-w-5xl mx-auto rounded-[2rem] bg-white/[0.04] border border-white/10 p-8 lg:p-12">
          <h2 className="text-4xl lg:text-5xl font-black text-center">
            Skontaktuj się z nami
          </h2>

          <p className="mt-4 text-center text-zinc-400">
            Zadzwoń pod numer{" "}
            <a href={`tel:${phone}`} className="text-yellow-400 font-bold">
              {phone}
            </a>{" "}
            lub wyślij formularz.
          </p>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="mt-10 grid gap-5"
          >
            <input
              type="hidden"
              name="access_key"
              value="TUTAJ_WKLEJ_SWÓJ_WEB3FORMS_API_KEY"
            />

            <input
              name="name"
              required
              placeholder="Imię i nazwisko"
              className="rounded-2xl bg-black/40 border border-white/10 px-5 py-4 outline-none focus:border-yellow-400"
            />

            <input
              name="phone"
              required
              placeholder="Numer telefonu"
              className="rounded-2xl bg-black/40 border border-white/10 px-5 py-4 outline-none focus:border-yellow-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Adres e-mail"
              className="rounded-2xl bg-black/40 border border-white/10 px-5 py-4 outline-none focus:border-yellow-400"
            />

            <textarea
              name="message"
              required
              rows={5}
              placeholder="Opisz, czego potrzebujesz..."
              className="rounded-2xl bg-black/40 border border-white/10 px-5 py-4 outline-none focus:border-yellow-400"
            />

            <button
              type="submit"
              className="rounded-full bg-yellow-400 px-8 py-4 font-black text-black hover:scale-105 transition"
            >
              Wyślij wiadomość
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-zinc-500">
        © {new Date().getFullYear()} Firma Brukarska. Kontakt: {phone}
      </footer>
    </main>
  );
}