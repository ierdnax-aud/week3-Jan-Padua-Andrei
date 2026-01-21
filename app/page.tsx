import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { Mail, Code2, Award, BookOpen } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { HoverLink } from '@/components/hover-link'
import { ModernBackground } from '@/components/modern-background'

export default async function Home() {
  const { userId } = await auth()
  
  if (!userId) {
    redirect('/sign-in')
  }

  return (
    <div className="min-h-screen flex flex-col relative pb-20 md:pb-0">
      <ModernBackground />
      <Navigation />

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12 md:py-16 relative z-10">
        {/* Hero Section */}
        <section className="mb-16 animate-fadeIn">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight">Jan Padua</h1>
            <p className="text-2xl md:text-3xl text-gray-600 font-light">Information Technology Student | Developer</p>
            <p className="text-lg text-gray-600 flex items-center gap-2 flex-wrap">
              <Mail className="w-5 h-5 text-gray-500" />
              <span>Tuguegarao City, Cagayan • <HoverLink href="mailto:janpadua@spup.edu.ph" text="janpadua@spup.edu.ph" /></span>
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-16 pb-12 border-b border-gray-200 animate-fadeIn" style={{ animationDelay: '100ms' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Code2 className="w-8 h-8 text-blue-600" />
            About
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-2xl text-lg">
            Third-year <HoverLink text="Information Technology" /> student at <HoverLink text="St. Paul University Philippines" />, passionate about developing intelligent solutions through <HoverLink text="AI" />, <HoverLink text="web development" />, and emerging technologies. Currently working on <HoverLink text="Beaconet" />, a proximity grid system for lost item tracking with AI capabilities.
          </p>
        </section>

        {/* Quick Links */}
        <section className="mb-16 animate-fadeIn" style={{ animationDelay: '200ms' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Explore</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'About Me', href: '/about' },
              { label: 'Education', href: '/education' },
              { label: 'Skills', href: '/skills' },
              { label: 'Events', href: '/events' },
              { label: 'Certificates', href: '/certificates' },
            ].map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="group glassmorphism rounded-xl px-6 py-6 text-center text-gray-800 font-medium transition-all hover:scale-105 hover:shadow-xl card-hover"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="relative inline-block">
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="pt-12 border-t border-gray-200 animate-fadeIn" style={{ animationDelay: '300ms' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Mail className="w-8 h-8 text-blue-600" />
            Get in Touch
          </h2>
          <p className="text-gray-700 max-w-2xl text-lg">
            Interested in connecting? Reach out at <HoverLink href="mailto:janpadua@spup.edu.ph" text="janpadua@spup.edu.ph" /> or explore my work across this portfolio.
          </p>
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
