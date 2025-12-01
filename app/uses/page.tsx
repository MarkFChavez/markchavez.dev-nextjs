import Image from 'next/image';

export default function UsesPage() {
  return (
    <div className="max-w-[900px] mx-auto mt-4">
      <section className="space-y-8">
        {/* Bold header */}
        <div className="inline-block">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-black text-white px-6 py-3 border-6 border-black shadow-brutal-lg">
            MY SETUP
          </h1>
        </div>

        {/* FEATURED WORKSPACE CARD */}
        <div className="relative bg-black border-6 border-black shadow-brutal-lg">
          {/* Corner icon badge */}
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-white border-6 border-black flex items-center justify-center shadow-brutal-sm rotate-12">
            <span className="text-black font-black text-4xl">■</span>
          </div>

          <div className="pt-12 pb-8 px-6 md:px-12">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              {/* Text side */}
              <div className="md:w-1/3">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-2">
                  MY<br/>WORKSPACE
                </h2>
                <div className="h-2 w-20 bg-white"></div>
              </div>

              {/* SVG side */}
              <div className="md:w-2/3 bg-white border-6 border-white p-6 shadow-brutal">
                <Image
                  src="/desk-setup.svg"
                  alt="Desk setup illustration showing split keyboard and monitor"
                  width={500}
                  height={320}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Bottom stripe */}
          <div className="h-4 bg-white"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* DESK CARD */}
          <div className="group relative bg-white border-6 border-black shadow-brutal hover:shadow-brutal-lg transition-all">
            {/* Icon badge */}
            <div className="absolute -top-4 left-6 w-16 h-16 bg-black border-4 border-black flex items-center justify-center text-3xl shadow-brutal-sm">
              <span className="text-white font-black">■</span>
            </div>

            <div className="pt-16 px-6 pb-6">
              <h2 className="text-3xl font-black mb-4 tracking-tight">DESK</h2>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">▸</span>
                  <span>Macbook Air, M2</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">▸</span>
                  <span>Apple Studio Display</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">▸</span>
                  <span>Logitech Lift Vertical Ergonomic Mouse</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">▸</span>
                  <span>HHKB Type-S / Keyboardio Model 100</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">▸</span>
                  <span>Herman Miller Sayl</span>
                </div>
              </div>
            </div>
            <div className="h-3 bg-black"></div>
          </div>

          {/* COFFEE CARD */}
          <div className="group relative bg-black border-6 border-black shadow-brutal hover:shadow-brutal-lg transition-all">
            {/* Icon badge */}
            <div className="absolute -top-4 right-6 w-16 h-16 bg-white border-4 border-black flex items-center justify-center text-3xl shadow-brutal-sm">
              <span className="text-black font-black">●</span>
            </div>

            <div className="pt-16 px-6 pb-6">
              <h2 className="text-3xl font-black mb-4 tracking-tight text-white">COFFEE</h2>
              <div className="space-y-2 text-white">
                <div className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">▸</span>
                  <span>Comandante C40 Manual Grinder</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">▸</span>
                  <span>Fellow Ode Gen 2 Automatic Grinder</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">▸</span>
                  <span>Fellow STAGG EKG Kettle</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">▸</span>
                  <span>Hario Server and V60 Dripper</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">▸</span>
                  <span>Timemore Scale</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">▸</span>
                  <span>
                    Water (
                    <a
                      href="https://thirdwavewater.com"
                      className="font-black underline decoration-2 underline-offset-2 hover:bg-white hover:text-black hover:no-underline px-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Third Wave Water
                    </a>{' '}
                    + Distilled)
                  </span>
                </div>
              </div>
            </div>
            <div className="h-3 bg-white"></div>
          </div>

          {/* CYCLING CARD (Full Width) */}
          <div className="group relative bg-white border-6 border-black shadow-brutal hover:shadow-brutal-lg transition-all md:col-span-2">
            {/* Icon badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-black border-4 border-black flex items-center justify-center text-3xl shadow-brutal-sm">
              <span className="text-white font-black">▲</span>
            </div>

            <div className="pt-16 px-6 pb-6">
              <h2 className="text-3xl font-black mb-4 tracking-tight text-center">CYCLING</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 max-w-3xl mx-auto">
                <div className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">▸</span>
                  <span>Wahoo Kickr Core</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">▸</span>
                  <span>BMC Roadmachine FIVE</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">▸</span>
                  <span>Saris MP1 Rocker Plate</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">▸</span>
                  <span>Vornado High-Velocity Fan</span>
                </div>
                <div className="flex items-start gap-2 md:col-span-2">
                  <span className="font-bold flex-shrink-0">▸</span>
                  <span>
                    <a
                      href="https://trainerroad.com"
                      className="font-black underline decoration-2 underline-offset-2 hover:bg-black hover:text-white hover:no-underline px-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      TrainerRoad
                    </a>{' '}
                    for structured workouts
                  </span>
                </div>
              </div>
            </div>
            <div className="h-3 bg-black"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
