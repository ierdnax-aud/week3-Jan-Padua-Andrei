import { Navigation } from '@/components/navigation'
import { Calendar } from 'lucide-react'
import { ModernBackground } from '@/components/modern-background'

export default function Events() {
  const events = [
    {
      title: 'IT Cybersecurity Roadshow',
      venue: 'St. Paul University Philippines, Tuguegarao City, Cagayan',
      date: 'October 25, 2025',
      description: 'Roadshow focused on cybersecurity awareness and best practices in information security.',
      type: 'Roadshow'
    },
    {
      title: 'SITE Film Festival 2025',
      venue: 'St. Paul University Philippines, Tuguegarao City, Cagayan',
      date: 'June 19, 2025',
      description: 'Annual film festival celebrating creativity and technological innovation through cinematography.',
      type: 'Festival'
    },
    {
      title: 'ITE CONVENTION 2025',
      venue: 'St. Paul University Philippines, Tuguegarao City',
      date: 'TBD',
      description: 'Theme: Innovate, Transform, Sustain: Shaping a Smarter World',
      theme: 'Innovate, Transform, Sustain: Shaping a Smarter World',
      type: 'Convention'
    },
    {
      title: 'ITE CONVENTION 2024',
      venue: 'St. Paul University Philippines, Tuguegarao City, Cagayan',
      date: 'April 17-19, 2024',
      description: 'A major convention bringing together IT professionals and students.',
      theme: 'Sustainable Synergy: Integrating Information Technology and Engineering for a Greener Tomorrow',
      type: 'Convention'
    },
    {
      title: 'Cyber Summit 2023',
      venue: 'St. Paul University Philippines, Tuguegarao City, Cagayan',
      date: 'May 24-26, 2023',
      description: 'Summit focused on cybersecurity and sustainable development through technology.',
      theme: 'Driving Sustainable Development through Innovation of Technology for a Better Future',
      type: 'Summit'
    }
  ]

  const upcomingEvents = events.filter(e => 
    e.date.includes('2025') || e.date === 'TBD'
  ).sort((a, b) => {
    if (a.date === 'TBD') return 1
    if (b.date === 'TBD') return -1
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  const pastEvents = events.filter(e => e.date.includes('2024') || e.date.includes('2023'))

  return (
    <div className="min-h-screen bg-white flex flex-col relative">
      <ModernBackground />
      <Navigation />

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12 md:py-16 relative z-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 flex items-center gap-3">
            <Calendar className="w-10 h-10 text-slate-700" />
            Events & Conferences
          </h1>
          <p className="text-gray-600 mt-2">Seminars, workshops, and conferences I've attended and participated in</p>
        </div>

        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <section className="mb-12 pb-12 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Upcoming Events</h2>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-gray-50 rounded p-6 hover:bg-gray-100 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{event.title}</h3>
                      <span className="inline-block mt-2 text-xs font-medium text-slate-700 bg-slate-100 rounded-full px-3 py-1">
                        {event.type}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-slate-900">{event.date}</p>
                      <p className="text-sm text-gray-600 mt-1">{event.venue}</p>
                    </div>
                  </div>
                  {event.theme && (
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Theme:</span> {event.theme}
                      </p>
                    </div>
                  )}
                  <p className="text-gray-700 mt-3">{event.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Past Events</h2>
            <div className="space-y-4">
              {pastEvents.map((event, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded p-6 hover:border-gray-300 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{event.title}</h3>
                      <span className="inline-block mt-2 text-xs font-medium text-gray-700 bg-gray-100 rounded-full px-3 py-1">
                        {event.type}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-slate-900">{event.date}</p>
                      <p className="text-sm text-gray-600 mt-1">{event.venue}</p>
                    </div>
                  </div>
                  {event.theme && (
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Theme:</span> {event.theme}
                      </p>
                    </div>
                  )}
                  <p className="text-gray-700 mt-3">{event.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Event Statistics */}
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Participation Summary</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 rounded p-4 text-center">
              <p className="text-3xl font-bold text-slate-900">{events.length}</p>
              <p className="text-sm text-gray-600 mt-2">Total Events</p>
            </div>
            <div className="bg-gray-50 rounded p-4 text-center">
              <p className="text-3xl font-bold text-slate-900">{upcomingEvents.length}</p>
              <p className="text-sm text-gray-600 mt-2">Upcoming</p>
            </div>
            <div className="bg-gray-50 rounded p-4 text-center">
              <p className="text-3xl font-bold text-slate-900">{pastEvents.length}</p>
              <p className="text-sm text-gray-600 mt-2">Attended</p>
            </div>
            <div className="bg-gray-50 rounded p-4 text-center">
              <p className="text-3xl font-bold text-slate-900">3</p>
              <p className="text-sm text-gray-600 mt-2">Years Involved</p>
            </div>
          </div>
        </section>

        {/* Event Categories */}
        <section className="mt-8 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Event Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Conventions</h3>
              <p className="text-gray-700 text-sm">
                Large-scale events bringing together IT professionals, students, and educators to discuss industry trends and innovations.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Summits</h3>
              <p className="text-gray-700 text-sm">
                Focused gatherings on specialized topics like cybersecurity and sustainable development in technology.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Roadshows</h3>
              <p className="text-gray-700 text-sm">
                Educational and awareness programs on specific technology topics and best practices.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Festivals</h3>
              <p className="text-gray-700 text-sm">
                Creative showcases celebrating innovation, technology, and artistic expression.
              </p>
            </div>
          </div>
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
