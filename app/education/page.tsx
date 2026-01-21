import { Navigation } from '@/components/navigation'
import { HoverLink } from '@/components/hover-link'
import { BookOpen } from 'lucide-react'
import { ModernBackground } from '@/components/modern-background'

export default function Education() {
  return (
    <div className="min-h-screen bg-white flex flex-col relative">
      <ModernBackground />
      <Navigation />

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12 md:py-16 relative z-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 flex items-center gap-3">
            <BookOpen className="w-10 h-10 text-slate-700" />
            Education
          </h1>
          <p className="text-gray-600 mt-2">My academic journey</p>
        </div>

        <section className="space-y-8">
          {/* Current Education */}
          <div className="pb-8 border-b border-gray-200">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Bachelor of Science in Information Technology</h2>
                <p className="text-gray-600 mt-2"><HoverLink text="St. Paul University Philippines" /></p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-slate-900">2023 – Present</p>
                <p className="text-sm text-gray-600">3rd Year</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded p-4 mt-4">
              <h3 className="font-semibold text-slate-900 mb-2">Capstone Project</h3>
              <p className="text-gray-700 font-medium mb-2"><HoverLink text="Beaconet" /></p>
              <p className="text-gray-700 text-sm">
                Proximity Grid for Lost Item Tracking with AI Application and Decision Support. This innovative system combines IoT technology with artificial intelligence to help locate lost items efficiently.
              </p>
            </div>
          </div>

          {/* Senior High School */}
          <div className="pb-8 border-b border-gray-200">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Senior High School</h2>
                <p className="text-gray-600 mt-2">Veridiano Sto. Niño Institute</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-slate-900">2021 – 2023</p>
              </div>
            </div>
            <p className="text-gray-700">
              Completed my Senior High School education, building a strong foundation in academic disciplines and developing leadership skills through various school activities.
            </p>
          </div>

          {/* Junior High School */}
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Junior High School</h2>
                <p className="text-gray-600 mt-2">Veridiano Sto. Niño Institute</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-slate-900">2017 – 2021</p>
              </div>
            </div>
            <p className="text-gray-700">
              Foundational years where I developed core academic skills and initial interest in technology and programming.
            </p>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Academic Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded p-4">
              <h3 className="font-semibold text-slate-900 mb-2">President's List</h3>
              <p className="text-sm text-gray-700">Certificate of Academic Excellence for outstanding academic performance</p>
            </div>
            <div className="bg-gray-50 rounded p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Technical Focus</h3>
              <p className="text-sm text-gray-700">Specializing in <HoverLink text="AI" />, <HoverLink text="Web Development" />, and emerging technologies</p>
            </div>
          </div>
        </section>

        {/* Skills Developed */}
        <section className="mt-8 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Skills Developed Through Education</h2>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li className="flex gap-3">
              <span className="text-slate-700 font-bold">•</span>
              <span>Full-stack web development with modern frameworks</span>
            </li>
            <li className="flex gap-3">
              <span className="text-slate-700 font-bold">•</span>
              <span>Artificial Intelligence and machine learning applications</span>
            </li>
            <li className="flex gap-3">
              <span className="text-slate-700 font-bold">•</span>
              <span>Database design and management</span>
            </li>
            <li className="flex gap-3">
              <span className="text-slate-700 font-bold">•</span>
              <span>IoT development and microcontroller programming</span>
            </li>
            <li className="flex gap-3">
              <span className="text-slate-700 font-bold">•</span>
              <span>Problem-solving and analytical thinking</span>
            </li>
          </ul>
        </section>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-16">
        <div className="max-w-4xl mx-auto px-6 text-center text-gray-600 text-sm">
          <p>© 2025 Jan Padua. Crafted with care.</p>
        </div>
      </footer>
    </div>
  )
}
