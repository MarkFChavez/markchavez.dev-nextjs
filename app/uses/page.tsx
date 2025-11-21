export default function UsesPage() {
  return (
    <div className="max-w-[900px] mx-auto mt-4">
      <section className="space-y-8">
        {/* Bold header */}
        <div className="inline-block">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight gradient-text-electric px-2 py-3">
            MY SETUP
          </h1>
          <div className="h-3 bg-gradient-electric"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* DESK CARD */}
          <div className="group relative bg-electric-blue border-6 border-black shadow-brutal hover:shadow-brutal-lg transition-all transform hover:-rotate-1">
            {/* Icon badge */}
            <div className="absolute -top-4 left-6 w-16 h-16 bg-electric-yellow border-4 border-black flex items-center justify-center text-3xl shadow-brutal-sm group-hover:animate-wiggle">
              💻
            </div>

            <div className="pt-16 px-6 pb-6">
              <h2 className="text-3xl font-black mb-4 tracking-tight text-black">DESK</h2>
              <div className="space-y-2 text-black">
                <div className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">→</span>
                  <span>Macbook Air, M2</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">→</span>
                  <span>Apple Studio Display</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">→</span>
                  <span>Logitech Lift Vertical Ergonomic Mouse</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">→</span>
                  <span>HHKB Type-S / Keyboardio Model 100</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">→</span>
                  <span>Herman Miller Sayl</span>
                </div>
              </div>
            </div>
            <div className="h-3 bg-black"></div>
          </div>

          {/* COFFEE CARD */}
          <div className="group relative bg-electric-yellow border-6 border-black shadow-brutal hover:shadow-brutal-lg transition-all transform hover:rotate-1">
            {/* Icon badge */}
            <div className="absolute -top-4 right-6 w-16 h-16 bg-electric-pink border-4 border-black flex items-center justify-center text-3xl shadow-brutal-sm group-hover:animate-wiggle">
              ☕
            </div>

            <div className="pt-16 px-6 pb-6">
              <h2 className="text-3xl font-black mb-4 tracking-tight text-black">COFFEE</h2>
              <div className="space-y-2 text-black">
                <div className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">→</span>
                  <span>Comandante C40 Manual Grinder</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">→</span>
                  <span>Fellow Ode Gen 2 Automatic Grinder</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">→</span>
                  <span>Fellow STAGG EKG Kettle</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">→</span>
                  <span>Hario Server and V60 Dripper</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">→</span>
                  <span>Timemore Scale</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">→</span>
                  <span>
                    Water (
                    <a
                      href="https://thirdwavewater.com"
                      className="font-black underline hover:text-white"
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
            <div className="h-3 bg-black"></div>
          </div>

          {/* CYCLING CARD (Full Width) */}
          <div className="group relative bg-electric-green border-6 border-black shadow-brutal hover:shadow-brutal-lg transition-all md:col-span-2">
            {/* Icon badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-bold-red border-4 border-black flex items-center justify-center text-3xl shadow-brutal-sm group-hover:animate-wiggle">
              🚴
            </div>

            <div className="pt-16 px-6 pb-6">
              <h2 className="text-3xl font-black mb-4 tracking-tight text-black text-center">CYCLING</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-black max-w-3xl mx-auto">
                <div className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">→</span>
                  <span>Wahoo Kickr Core</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">→</span>
                  <span>BMC Roadmachine FIVE</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">→</span>
                  <span>Saris MP1 Rocker Plate</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">→</span>
                  <span>Vornado High-Velocity Fan</span>
                </div>
                <div className="flex items-start gap-2 md:col-span-2">
                  <span className="font-bold flex-shrink-0">→</span>
                  <span>
                    <a
                      href="https://trainerroad.com"
                      className="font-black underline hover:text-white"
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
