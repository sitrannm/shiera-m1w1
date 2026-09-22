import { useEffect, useState } from "react";

function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/80">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="#home"
            className="text-xl font-bold text-brand-600"
          >
            Sitra.
          </a>

          <div className="hidden gap-8 md:flex">
            <a href="#home" className="hover:text-brand-600">
              Home
            </a>
            <a href="#about" className="hover:text-brand-600">
              About
            </a>
            <a href="#projects" className="hover:text-brand-600">
              Projects
            </a>
            <a href="#contact" className="hover:text-brand-600">
              Contact
            </a>
          </div>

          <button
            onClick={() => setDark(!dark)}
            className="rounded-full border border-slate-300 px-4 py-2 transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
            aria-label="Toggle dark mode"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="flex min-h-screen items-center px-6 pt-20"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 font-medium text-brand-600">
              Hello, I'm
            </p>

            <h1 className="text-hero font-bold leading-[0.95] tracking-tight">
              Sitra Seyfu
            </h1>

            <p className="mt-6 max-w-2xl text-body leading-relaxed text-slate-600 dark:text-slate-300">
              Material Science & Engineering student, graphic designer,
              UI/UX designer and creative problem solver.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-700"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="rounded-full border border-slate-300 px-6 py-3 font-semibold transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex h-72 w-72 items-center justify-center rounded-full bg-brand-100 text-7xl dark:bg-brand-900/40">
              👨‍🎨
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-slate-200 px-6 py-24 dark:border-slate-800"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="text-section font-bold">
            About Me
          </h2>

          <p className="mt-6 max-w-3xl text-body leading-relaxed text-slate-600 dark:text-slate-300">
            I combine engineering, design and technology to create
            practical and visually engaging solutions. My interests
            include materials, UI/UX, graphic design and frontend
            development.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="bg-slate-50 px-6 py-24 dark:bg-slate-900"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="text-section font-bold">
            Selected Projects
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Project
              title="UI/UX Design"
              description="Modern user interfaces and digital experiences."
            />

            <Project
              title="Graphic Design"
              description="Visual identities, posters and creative designs."
            />

            <Project
              title="Engineering"
              description="Material science and engineering projects."
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-section font-bold">
            Let's Work Together
          </h2>

          <p className="mt-6 max-w-2xl text-body text-slate-600 dark:text-slate-300">
            Have a project or idea? Get in touch.
          </p>

          <a
            href="mailto:hello@example.com"
            className="mt-8 inline-block rounded-full bg-brand-600 px-6 py-3 font-semibold text-white hover:bg-brand-700"
          >
            Get In Touch
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-6 py-8 text-center text-sm text-slate-500 dark:border-slate-800">
        © 2026 Sitra Seyfu. All rights reserved.
      </footer>
    </div>
  );
}

function Project({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950">
      <div className="mb-6 h-40 rounded-xl bg-brand-100 dark:bg-brand-900/40" />

      <h3 className="text-xl font-bold">{title}</h3>

      <p className="mt-3 text-slate-600 dark:text-slate-400">
        {description}
      </p>

      <a
        href="#"
        className="mt-5 inline-block font-medium text-brand-600"
      >
        View project →
      </a>
    </article>
  );
}

export default App;