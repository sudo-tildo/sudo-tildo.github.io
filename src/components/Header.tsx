import {CodeXml} from "lucide-react";

export function Header() {
    return (
        <header className="bg-primary text-primary-foreground">
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div
                            className="w-12 h-12 bg-accent text-accent-foreground flex items-center justify-center brutalist-border font-heading text-xl">
                            <a href="/"><CodeXml/></a>
                        </div>
                        <a href="/">
                            <h1 className="font-heading text-2xl">TILDO</h1>
                        </a>
                    </div>
                    <nav className="hidden md:flex gap-8">
                        <a
                            href="/projects"
                            className="font-mono hover:text-accent transition-colors uppercase tracking-wide"
                        >
                            [PROJECTS]
                        </a>
                        <a
                            href="/blog"
                            className="font-mono hover:text-accent transition-colors uppercase tracking-wide"
                        >
                            [BLOG]
                        </a>
                        <a
                            href="/about"
                            className="font-mono hover:text-accent transition-colors uppercase tracking-wide"
                        >
                            [ABOUT]
                        </a>
                        <a href="/#contact">[CONTACT]</a>
                    </nav>
                </div>
            </div>
        </header>
    );
}
