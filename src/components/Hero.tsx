import "../styles/App.css";

export function Hero() {
  return (
    <section id="hero" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="font-heading text-5xl md:text-6xl mb-6 brutalist-text-shadow">
              Hello, I Am
              <br />
              <span className="text-accent brutalist-text-shadow-foreground">
                TILDO
              </span>
            </h2>
            <p className="font-mono text-lg mb-8 max-w-lg">
              I'm a Sophomore in Software Engineering, passionate about game
              development and building tools.
            </p>
          </div>
          <div className="w-full h-64 relative flex items-center justify-center md:justify-end">
            <img
              src="/img/profile/tildoprofile.png"
              alt="Tildo pixel avatar"
              className="w-80 pixelated"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
