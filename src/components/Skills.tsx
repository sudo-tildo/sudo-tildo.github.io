import {
  DockerIcon,
  MongodbIcon,
  NestJsIcon,
  PostgresqlIcon,
  ReactIcon,
  SpringBootIcon,
} from "@/assets/svgs";
import {
  Cog,
  Layers,
  BookOpen,
  Terminal,
  Container,
  Blocks,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-accent text-accent-foreground px-6 py-3 inline-flex mb-6 font-heading text-lg box-shadow-foreground">
          <Cog />
        </div>
        <div className="flex items-center mb-12 w-1/4 box-shadow-foreground">
          <h2 className="bg-accent text-accent-foreground px-6 py-3 text-4xl font-bold text-accent">HOW I BUILD</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-heading text-2xl mb-6 text-accent flex items-center gap-3">
              <Layers className="h-6 w-6" />
              TECH STACK
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <Card className="brutalist-border brutalist-shadow bg-card hover:translate-x-1 hover:-translate-y-1 transition-transform">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent text-accent-foreground flex items-center justify-center brutalist-border font-heading text-lg mx-auto mb-3">
                    <NestJsIcon />
                  </div>
                  <h4 className="font-heading text-accent mb-2">NESTJS</h4>
                  <p className="font-mono text-sm text-muted-foreground">
                  </p>
                </CardContent>
              </Card>

              <Card className="brutalist-border brutalist-shadow bg-card hover:translate-x-1 hover:-translate-y-1 transition-transform">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent text-accent-foreground flex items-center justify-center brutalist-border font-heading text-lg mx-auto mb-3">
                    <SpringBootIcon />
                  </div>
                  <h4 className="font-heading text-accent mb-2">SPRING</h4>
                  <p className="font-mono text-sm text-muted-foreground">
                  </p>
                </CardContent>
              </Card>

              <Card className="brutalist-border brutalist-shadow bg-card hover:translate-x-1 hover:-translate-y-1 transition-transform">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent text-accent-foreground flex items-center justify-center brutalist-border mx-auto mb-3">
                    C#
                  </div>
                  <h4 className="font-heading text-accent mb-2">C#</h4>
                  <p className="font-mono text-sm text-muted-foreground">
                  </p>
                </CardContent>
              </Card>

              <Card className="brutalist-border brutalist-shadow bg-card hover:translate-x-1 hover:-translate-y-1 transition-transform">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent text-accent-foreground flex items-center justify-center brutalist-border font-heading text-lg mx-auto mb-3">
                    <ReactIcon />
                  </div>
                  <h4 className="font-heading text-accent mb-2">REACT</h4>
                  <p className="font-mono text-sm text-muted-foreground">
                  </p>
                </CardContent>
              </Card>

              <Card className="brutalist-border brutalist-shadow bg-card hover:translate-x-1 hover:-translate-y-1 transition-transform">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent text-accent-foreground flex items-center justify-center brutalist-border font-heading text-lg mx-auto mb-3">
                    <PostgresqlIcon />
                  </div>
                  <h4 className="font-heading text-accent mb-2">POSTGRESQL</h4>
                  <p className="font-mono text-sm text-muted-foreground">
                  </p>
                </CardContent>
              </Card>

              <Card className="brutalist-border brutalist-shadow bg-card hover:translate-x-1 hover:-translate-y-1 transition-transform">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent text-accent-foreground flex items-center justify-center brutalist-border font-heading text-lg mx-auto mb-3">
                    <MongodbIcon />
                  </div>
                  <h4 className="font-heading text-accent mb-2">MONGODB</h4>
                  <p className="font-mono text-sm text-muted-foreground">
                  </p>
                </CardContent>
              </Card>

              <Card className="brutalist-border brutalist-shadow bg-card hover:translate-x-1 hover:-translate-y-1 transition-transform">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent text-accent-foreground flex items-center justify-center brutalist-border font-heading text-lg mx-auto mb-3">
                    <DockerIcon />
                  </div>
                  <h4 className="font-heading text-accent mb-2">DOCKER</h4>
                  <p className="font-mono text-sm text-muted-foreground">
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-2xl mb-6 text-accent flex items-center gap-3">
              <BookOpen className="h-6 w-6" />
              DESIGN PRINCIPLES
            </h3>
            <div className="space-y-4">
              <Card className="brutalist-border brutalist-shadow bg-card hover:translate-x-1 hover:-translate-y-1 transition-transform">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent text-accent-foreground flex items-center justify-center brutalist-border">
                      <Terminal className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-heading text-accent mb-1">
                        CLEAN CODE
                      </h4>
                      <p className="font-mono text-sm text-muted-foreground">
                        Readable, maintainable, testable
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="brutalist-border brutalist-shadow bg-card hover:translate-x-1 hover:-translate-y-1 transition-transform">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent text-accent-foreground flex items-center justify-center brutalist-border font-heading text-sm">
                      <Container />
                    </div>
                    <div>
                      <h4 className="font-heading text-accent mb-1">
                        DOMAIN DRIVEN DESIGN
                      </h4>
                      <p className="font-mono text-sm text-muted-foreground">
                        Business logic first approach
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="brutalist-border brutalist-shadow bg-card hover:translate-x-1 hover:-translate-y-1 transition-transform">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent text-accent-foreground flex items-center justify-center brutalist-border">
                      <Blocks className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-heading text-accent mb-1">
                        CLEAN ARCHITECTURE
                      </h4>
                      <p className="font-mono text-sm text-muted-foreground">
                        Dependency inversion principles
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
