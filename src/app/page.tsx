import Image from 'next/image';

export default function About() {
  return (
    <main className="max-w-screen-md px-4 mx-auto space-y-10 md:px-0 py-8 pt-22">
      {/* Intro / About */}
      <section className="flex flex-col sm:flex-row w-full items-start">
        {/* Portrait */}
        <div className="flex-shrink-0 w-full hidden sm:block sm:w-[200px] flex justify-center sm:justify-start mb-6 sm:mb-0">
          <Image
            priority
            alt="Portrait photo of Nico"
            src="/portrait.webp"
            className="object-contain object-bottom w-full max-w-[160px] sm:max-w-[200px] rounded-xl shadow"
            width={1067}
            height={1317}
            loading="eager"
          />
        </div>

        {/* About text */}
        <div className="flex flex-col space-y-4 text-gray-800 sm:pl-8 max-w-prose sm:max-w-none">
          <p>
            I’m a full-stack software engineer who enjoys building high-impact,
            product-focused systems that ship to real users.
          </p>

          <p>
            I’ve worked across frontend, backend, and infrastructure - from real-time,
            AI-driven interfaces to event-driven systems at enterprise scale.
          </p>

          <p>
            I value clean abstractions, ownership, and collaboration.
          </p>

          <p className="text-sm text-gray-600 pt-2">
            Based in the San Francisco Bay Area.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold font-display">Experience</h3>

        <div className="space-y-3 text-gray-800">
          <p>
            <strong>Software Engineer</strong> —{' '}
            <a
              href="https://www.abridge.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Abridge
            </a>
            <span className="text-gray-500"> (2026 – Present)</span>
          </p>

          <p className="text-sm text-gray-700">
            Working on enterprise systems within the product organization.
          </p>

          <p>
            <strong>Software Engineer</strong> —{' '}
            <a
              href="https://inventive.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Inventive AI (YC S23)
            </a>
            <span className="text-gray-500"> (2024 – 2026)</span>
          </p>

          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            <li>
              Led development of a knowledge hub supporting search, filtering,
              and collaboration across thousands of documents.
            </li>
            <li>
              Built real-time collaboration features using SSE for comments,
              tasks, and activity feeds.
            </li>
            <li>
              Designed scalable frontend state architecture (Redux + Context)
              enabling low-latency navigation.
            </li>
          </ul>

          <p>
            <strong>Earlier</strong> — Couplr AI, Aroa Biosurgery
          </p>

          <p className="text-sm text-gray-700">
            Background in mechanical engineering with experience in applied
            computation, optimization, and control systems.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold font-display">Skills</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <strong>Frontend</strong>
            <ul className="mt-1 list-disc list-inside">
              <li>React, Next.js, TypeScript</li>
              <li>Redux, Tailwind CSS</li>
              <li>Performance optimization</li>
            </ul>
          </div>

          <div>
            <strong>Backend</strong>
            <ul className="mt-1 list-disc list-inside">
              <li>Django, FastAPI, Node.js</li>
              <li>PostgreSQL, REST APIs</li>
              <li>Event-driven architectures</li>
            </ul>
          </div>

          <div>
            <strong>Systems</strong>
            <ul className="mt-1 list-disc list-inside">
              <li>Real-time systems (SSE / WebSockets)</li>
              <li>Async processing & data pipelines</li>
              <li>Scalability & reliability</li>
            </ul>
          </div>

          <div>
            <strong>Other</strong>
            <ul className="mt-1 list-disc list-inside">
              <li>AWS, Docker, CI/CD</li>
              <li>Testing & code quality</li>
              <li>Product-driven engineering</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
