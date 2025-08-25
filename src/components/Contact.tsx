import { CircleUserRound, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="bg-accent text-accent-foreground px-6 py-3 inline-block mb-6 font-heading text-lg">
            <CircleUserRound />
          </div>
          <h2 className="font-heading font-bold text-accent text-4xl md:text-6xl mb-6">
            Reach Me Out
          </h2>
          <p className="text-xl font-mono mb-12 max-w-2xl mx-auto">
            Want to collaborate? Hit me up.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="mailto:tildo.dev@gmail.com">
            <Button
              size="lg"
              className="brutalist-border brutalist-shadow bg-accent text-accent-foreground hover:bg-accent/90 font-mono font-bold uppercase tracking-wide text-lg px-8 py-6"
            >
              <Mail className="mr-3 h-5 w-5" />
              SEND_EMAIL
            </Button>
          </a>
          <a href="https://www.github.com/sudo-tildo" target="_blank">
            <Button
              variant="outline"
              size="lg"
              className="brutalist-border bg-background hover:bg-muted font-mono font-bold uppercase tracking-wide text-lg px-8 py-6"
            >
              <Github className="mr-3 h-5 w-5" />
              VIEW_GITHUB
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/breno-de-moraes" target="_blank">
            <Button
              variant="outline"
              size="lg"
              className="brutalist-border bg-background hover:bg-muted font-mono font-bold uppercase tracking-wide text-lg px-8 py-6"
            >
              <Linkedin className="mr-3 h-5 w-5" />
              FOLLOW_UPDATES
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
