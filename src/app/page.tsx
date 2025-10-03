import Image from 'next/image';

export default function About() {
  return (
    <main className="max-w-screen-md px-4 mx-auto space-y-6 md:px-0 py-8 pt-22">
      <h2 className="space-x-3 text-2xl font-semibold font-display text-center">
        <span className="wave inline-block animate-wave" aria-hidden="true">
          👋{' '}
        </span>
        <span>{"Hi, I'm Nico Carlier"}</span>
      </h2>
      <section className="grid-cols-[4fr_9fr] gap-16 sm:grid">
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
          <div className="space-y-4">
            <p>
              I'm a full-stack software engineer at{' '}
              <a href="https://inventive.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Inventive AI (YC S23)</a>, building an AI Copilot that helps sales teams win RFPs.
            </p>
            <p>
              I specialize in React/Next.js, TypeScript, Django/FastAPI, and event-driven architectures. I've shipped production-scale features from real-time AI streaming interfaces to document ingestion pipelines handling thousands of files.
            </p>
            <p>
              Trained at <a href="https://www.appacademy.io/course/software-engineering/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">App Academy</a> (1000+ hours) and hold a B.E. in Mechanical Engineering from <a href="https://www.auckland.ac.nz/en/study/study-options/find-a-study-option/bachelor-of-engineering-honours-behons.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">University of Auckland</a>, where I received the Best Mechanical Engineering Project Award for my research on <a href="https://www.imavs.org/papers/2024/28.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">UAV control systems</a>. Based in the San Francisco Bay Area.
            </p>
          </div>
      </section>
      <section className="space-y-6">
        <h2 className="text-xl font-semibold font-display">Highlights @ Inventive AI</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            Led development of the Knowledge Hub, enabling enterprises to manage and search thousands of documents with sub-second filtering and collaboration features.
          </li>
          <li>
            Implemented real-time updates with SSE, powering instant comments, tasks, and activity feeds to boost team engagement.
          </li>
          <li>
            Designed a scalable frontend architecture (Redux + Context API) that supports zero-load-time navigation and simplified complex state handling.
          </li>
          <li>
            Enhanced UX with collaboration tools (threads, @mentions, assignments, notifications).
          </li>
        </ul>
      </section>
    </main>
  );
}
