import { Navigation } from '@/components/navigation'
import { HoverLink } from '@/components/hover-link'
import { BookOpen } from 'lucide-react'
import { ModernBackground } from '@/components/modern-background'
import { Timeline } from '@/components/timeline'

export default function Education() {
  const educationTimeline = [
    {
      year: '2023 – Present',
      title: 'Bachelor of Science in Information Technology',
      subtitle: 'St. Paul University Philippines',
      description: 'Capstone Project: Beaconet - Proximity Grid for Lost Item Tracking with AI Application and Decision Support',
      status: 'current' as const
    },
    {
      year: '2021 – 2023',
      title: 'Senior High School',
      subtitle: 'Veridiano Sto. Niño Institute',
      description: 'Completed senior high school education with strong academic foundation',
      status: 'completed' as const
    },
    {
      year: '2017 – 2021',
      title: 'Junior High School',
      subtitle: 'Veridiano Sto. Niño Institute',
      description: 'Foundational years where interest in technology and programming began',
      status: 'completed' as const
    }
  ]

  return (
    <div className="min-h-screen flex flex-col relative pb-20 md:pb-0">
      <ModernBackground />
      <Navigation />

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12 md:py-16 relative z-10">
        <div className="mb-12 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 flex items-center gap-3">
            <BookOpen className="w-10 h-10 text-blue-600" />
            Education
          </h1>
          <p className="text-gray-600 mt-3 text-lg">My academic journey</p>
        </div>

        {/* Timeline */}
        <section className="mb-12 animate-fadeIn" style={{ animationDelay: '100ms' }}>
          <Timeline items={educationTimeline} />
        </section>

        {/* Key Achievements */}
        <section className="mt-12 pt-8 border-t border-gray-200 animate-fadeIn" style={{ animationDelay: '200ms' }}>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Academic Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glassmorphism rounded-xl p-6 card-hover border-l-4 border-blue-600">
              <h3 className="font-semibold text-slate-900 text-lg mb-2">President's List</h3>
              <p className="text-sm text-gray-700">Certificate of Academic Excellence for outstanding academic performance</p>
            </div>
            <div className="glassmorphism rounded-xl p-6 card-hover border-l-4 border-indigo-600">
              <h3 className="font-semibold text-slate-900 text-lg mb-2">Technical Focus</h3>
              <p className="text-sm text-gray-700">Specializing in <HoverLink text="AI" />, <HoverLink text="Web Development" />, and emerging technologies</p>
            </div>
          </div>
        </section>

        {/* Skills Developed */}
        <section className="mt-8 pt-8 border-t border-gray-200 animate-fadeIn" style={{ animationDelay: '300ms' }}>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Skills Developed Through Education</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              'Full-stack web development with modern frameworks',
              'Artificial Intelligence and machine learning applications',
              'Database design and management',
              'IoT development and microcontroller programming',
              'Problem-solving and analytical thinking'
            ].map((skill, index) => (
              <li key={index} className="flex gap-3 items-start text-gray-700">
                <span className="text-blue-600 font-bold text-xl">•</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="glassmorphism border-t border-gray-200 py-8 mt-16 mb-16 md:mb-0">
        <div className="max-w-4xl mx-auto px-6 text-center text-gray-600 text-sm">
          <p>© 2025 Jan Padua. Crafted with care.</p>
        </div>
      </footer>
    </div>
  )
}
