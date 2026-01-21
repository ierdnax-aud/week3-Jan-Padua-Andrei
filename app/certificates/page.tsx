import { Navigation } from '@/components/navigation'
import { Award } from 'lucide-react'
import { ModernBackground } from '@/components/modern-background'

export default function Certificates() {
  const certificatesList = [
    {
      title: 'Certificate of Academic Excellence',
      issuer: 'St. Paul University Philippines',
      achievement: "President's List",
      description: 'Awarded for outstanding academic performance and excellence in studies',
      year: '2024',
      category: 'Academic Excellence'
    },
    {
      title: 'Certificate of Recognition',
      issuer: 'St. Paul University Philippines',
      achievement: 'SPUP Paskuhan 2023 Volleyball',
      description: 'Recognition for outstanding participation in the university volleyball competition',
      year: '2023',
      category: 'Sports & Activities'
    },
    {
      title: 'Certificate of Recognition',
      issuer: 'Cagayan State University',
      achievement: 'Cluster Meet 2023',
      description: 'Recognized for participation in the inter-school cluster academic competition',
      year: '2023',
      category: 'Academic Competition'
    },
    {
      title: 'Certificate of Recognition',
      issuer: 'St. Paul University Philippines',
      achievement: 'SPUP Paskuhan 2023 Folk Dance',
      description: 'Recognition for cultural contribution through folk dance performance',
      year: '2023',
      category: 'Cultural Events'
    },
    {
      title: 'Certificate of Participation',
      issuer: 'St. Paul University Philippines',
      achievement: 'IT Cybersecurity Roadshow',
      description: 'Participated in cybersecurity awareness and training roadshow',
      year: '2024',
      category: 'Training & Workshops'
    },
    {
      title: 'Certificate of Participation',
      issuer: 'St. Paul University Philippines',
      achievement: 'ITE CONVENTION 2025',
      description: 'Participated in the Information Technology Engineering Convention 2025',
      year: '2025',
      category: 'Conferences'
    },
    {
      title: 'Certificate of Participation',
      issuer: 'St. Paul University Philippines',
      achievement: 'SITE Film Festival 2025',
      description: 'Participated in the Science and Information Technology Excellence Film Festival',
      year: '2025',
      category: 'Events'
    },
    {
      title: 'Certificate of Participation',
      issuer: 'St. Paul University Philippines',
      achievement: 'ITE CONVENTION 2024',
      description: 'Participated in the Information Technology Engineering Convention 2024',
      year: '2024',
      category: 'Conferences'
    },
    {
      title: 'Certificate of Participation',
      issuer: 'St. Paul University Philippines',
      achievement: 'Cyber Summit 2023',
      description: 'Participated in cybersecurity and innovation summit focused on sustainable development',
      year: '2023',
      category: 'Conferences'
    }
  ]

  const categories = ['All', 'Academic Excellence', 'Conferences', 'Training & Workshops', 'Sports & Activities', 'Cultural Events', 'Academic Competition', 'Events']
  
  const certByCategory = certificatesList.reduce((acc, cert) => {
    if (!acc[cert.category]) acc[cert.category] = []
    acc[cert.category].push(cert)
    return acc
  }, {} as Record<string, typeof certificatesList>)

  const certsByYear = certificatesList.reduce((acc, cert) => {
    if (!acc[cert.year]) acc[cert.year] = []
    acc[cert.year].push(cert)
    return acc
  }, {} as Record<string, typeof certificatesList>)

  const sortedYears = Object.keys(certsByYear).sort((a, b) => parseInt(b) - parseInt(a))

  return (
    <div className="min-h-screen bg-white flex flex-col relative">
      <ModernBackground />
      <Navigation />

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12 md:py-16 relative z-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 flex items-center gap-3">
            <Award className="w-10 h-10 text-slate-700" />
            Certificates & Recognition
          </h1>
          <p className="text-gray-600 mt-2">Achievements, certifications, and recognitions</p>
        </div>

        {/* Statistics */}
        <section className="mb-12 pb-12 border-b border-gray-200">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Achievements Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 rounded p-4 text-center">
              <p className="text-3xl font-bold text-slate-900">{certificatesList.length}</p>
              <p className="text-sm text-gray-600 mt-2">Total Certificates</p>
            </div>
            <div className="bg-gray-50 rounded p-4 text-center">
              <p className="text-3xl font-bold text-slate-900">{Object.keys(certByCategory).length}</p>
              <p className="text-sm text-gray-600 mt-2">Categories</p>
            </div>
            <div className="bg-gray-50 rounded p-4 text-center">
              <p className="text-3xl font-bold text-slate-900">1</p>
              <p className="text-sm text-gray-600 mt-2">Academic Excellence</p>
            </div>
            <div className="bg-gray-50 rounded p-4 text-center">
              <p className="text-3xl font-bold text-slate-900">{sortedYears.length}</p>
              <p className="text-sm text-gray-600 mt-2">Years of Achievement</p>
            </div>
          </div>
        </section>

        {/* Certificates by Year */}
        <section>
          {sortedYears.map((year) => (
            <div key={year} className="mb-10 pb-10 border-b border-gray-200 last:border-b-0">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">{year}</h2>
              <div className="space-y-4">
                {certsByYear[year].map((cert, index) => (
                  <div key={index} className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-900">{cert.title}</h3>
                        <p className="text-gray-700 font-medium mt-1">{cert.achievement}</p>
                      </div>
                      <span className="text-xs font-semibold text-slate-700 bg-slate-100 rounded-full px-3 py-1 whitespace-nowrap ml-4">
                        {cert.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      <span className="font-semibold">Issued by:</span> {cert.issuer}
                    </p>
                    <p className="text-gray-700">{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Category Breakdown */}
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Recognition by Category</h2>
          <div className="space-y-6">
            {Object.entries(certByCategory)
              .sort((a, b) => b[1].length - a[1].length)
              .map(([category, certs]) => (
                <div key={category}>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-slate-900">{category}</h3>
                    <span className="bg-slate-100 text-slate-700 font-bold rounded-full w-8 h-8 flex items-center justify-center text-sm">
                      {certs.length}
                    </span>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    {certs.map((cert, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-slate-700 font-bold mt-1">•</span>
                        <span>{cert.achievement} ({cert.year})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </section>

        {/* Highlights */}
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-50 rounded p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Academic Recognition</h3>
              <p className="text-sm text-gray-700">
                Consistent academic excellence with President's List recognition, demonstrating commitment to learning and achievement.
              </p>
            </div>
            <div className="bg-slate-50 rounded p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Active Participation</h3>
              <p className="text-sm text-gray-700">
                Regular participation in major technology conferences and workshops to stay updated with industry trends.
              </p>
            </div>
            <div className="bg-slate-50 rounded p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Well-Rounded</h3>
              <p className="text-sm text-gray-700">
                Recognition across academics, sports, and cultural activities, showing balanced personal development.
              </p>
            </div>
            <div className="bg-slate-50 rounded p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Continuous Growth</h3>
              <p className="text-sm text-gray-700">
                Ongoing involvement in cybersecurity and IT-related events demonstrating commitment to technical excellence.
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
