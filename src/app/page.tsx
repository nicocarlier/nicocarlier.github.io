import Image from 'next/image';

export default function About() {
  return (
    <main className="max-w-screen-md px-4 mx-auto space-y-16 md:px-0 py-8 pt-22">
      <section className="grid-cols-2 gap-16 sm:grid">
        {/* Portrait */}
        <div className="items-start justify-center sm:flex">
          <figure>
            <Image
              priority
              alt="Portrait photo of Nico"
              src="/portrait.webp"
              className="object-contain object-bottom w-full rounded-xl shadow"
              width={1067}
              height={1317}
              loading="eager"
            />
            <figcaption className="text-center text-walnut text-xs mt-2">
              {`Nadi, Fiji - 2023`}
            </figcaption>
          </figure>
        </div>

        {/* About me */}
        <div className="space-y-5">
          <h2 className="space-x-3 text-3xl font-semibold font-display">
            <span className="wave inline-block animate-wave" aria-hidden="true">
              👋{' '}
            </span>
            <span>{"Hi, I'm Nico"}</span>
          </h2>
          <p>
            I'm a full-stack software engineer at{' '}
            <strong>Inventive AI (YC S23)</strong>, where I build scalable,
            AI-powered platforms that handle real-time collaboration and
            large-scale knowledge management.
          </p>
          <p>
            My expertise spans{' '}
            <strong>React/Next.js, TypeScript, Django/FastAPI</strong>, and
            event-driven architectures. I focus on delivering performant user
            experiences and robust backends that scale.
          </p>
          <p>
            Before software, I studied mechanical engineering — a background
            that sharpened my problem-solving and system design skills. I'm now
            based in the San Francisco Bay Area, working on ambitious products
            that combine AI with great UX.
          </p>
          <p>
            Outside of work, you'll find me on the tennis court 🎾, skiing ⛷️,
            or reading sci-fi and tech books 📚.
          </p>
        </div>
      </section>
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold font-display">Highlights</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            Cut dashboard latency by <strong>50%</strong> with React memoization
            & virtualization.
          </li>
          <li>
            Built AI-powered content assistant with{' '}
            <strong>WebSocket streaming</strong> & source attribution.
          </li>
          <li>
            Designed event-driven ingestion pipeline (Django + Celery + Redis)
            scaling to <strong>1,000+ docs</strong>.
          </li>
        </ul>
      </section>
    </main>
  );
}
