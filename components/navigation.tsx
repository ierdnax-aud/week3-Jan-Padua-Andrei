'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { UserButton } from '@clerk/nextjs'

export function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/education', label: 'Education' },
    { href: '/skills', label: 'Skills' },
    { href: '/events', label: 'Events' },
    { href: '/certificates', label: 'Certificates' },
    { href: '/security', label: 'Security' },
  ]

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-slate-900 hover:text-slate-700 transition-colors">
            Jan Padua
          </Link>
          <div className="flex items-center gap-6">
            <nav className="flex gap-8">
              {links.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-colors relative group ${
                      isActive ? 'text-slate-900' : 'text-gray-600 hover:text-slate-900'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-slate-700 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                )
              })}
            </nav>
            {/* LOGOUT BUTTON - VISIBLE ON ALL PAGES */}
            <div className="flex items-center bg-white rounded-full shadow-md border border-gray-200 p-1">
              <UserButton 
                afterSignOutUrl="/sign-in"
                appearance={{
                  elements: {
                    avatarBox: "w-9 h-9"
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
