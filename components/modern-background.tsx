'use client'

export function ModernBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white">
      {/* Soft gradient accent top-right */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-slate-100 to-slate-50 rounded-full opacity-60 blur-3xl" />

      {/* Soft gradient accent bottom-left */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-gray-100 to-white rounded-full opacity-50 blur-3xl" />

      {/* Subtle grid pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Accent line - horizontal */}
      <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-40" />

      {/* Accent line - vertical */}
      <div className="absolute top-0 left-1/2 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent opacity-30" />
    </div>
  )
}
