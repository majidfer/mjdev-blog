// Site Configuration
// Centralized configuration for site metadata, SEO, and branding

export const SITE_TITLE = 'Blog MJDEV'
export const SITE_DESCRIPTION =
  'Kumpulan tulisan MJDEV tentang hal-hal seputar teknologi, bisnis, dan lifestyle. Temukan artikel menarik dan wawasan terbaru bersama MJDEV.'

export const GITHUB_URL = 'https://github.com/majidfer/mjdev-blog'
export const SITE_URL = 'https://mjdev.my.id/'

export const SITE_METADATA = {
  title: {
    default: 'Blog MJDEV'
  },
  description:
    'Kumpulan tulisan MJDEV tentang hal-hal seputar teknologi, bisnis, dan lifestyle. Temukan artikel menarik dan wawasan terbaru bersama MJDEV.',
  keywords: [
    'Astro',
    'astro template',
    'astro theme',
    'astro starter',
    'shadcn template',
    'shadcn ui',
    'shadcn/ui components',
    'tailwind template',
    'tailwind css',
    'react components',
    'SEO optimized',
    'web development',
    'static site generator',
    'modern web apps',
    'performance',
    'typescript'
  ],
  authors: [{ name: 'shadcn Studio', url: SITE_URL }],
  creator: 'shadcn Studio',
  publisher: 'shadcn Studio',
  robots: {
    index: true,
    follow: true
  },
  language: 'en-US',
  locale: 'en_US',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }]
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Blog MJDEV',
    title: 'Blog MJDEV',
    description:
      'Kumpulan tulisan MJDEV tentang hal-hal seputar teknologi, bisnis, dan lifestyle. Temukan artikel menarik dan wawasan terbaru bersama MJDEV.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Blog MJDEV',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@shadcnstudio',
    creator: '@shadcnstudio',
    title: 'Blog MJDEV',
    description:
      'Kumpulan tulisan MJDEV tentang hal-hal seputar teknologi, bisnis, dan lifestyle. Temukan artikel menarik dan wawasan terbaru bersama MJDEV.',
    images: ['/images/og-image.png']
  },
  verification: {
    google: '', // Add your Google verification code
    yandex: '', // Add your Yandex verification code
    bing: '' // Add your Bing verification code
  }
}

// Social media links
export const SOCIAL_LINKS = {
  github: GITHUB_URL,
  twitter: 'https://twitter.com/shadcnstudio',
  linkedin: 'https://linkedin.com/company/shadcnstudio',
  discord: 'https://discord.gg/shadcnstudio'
}

// Company information for structured data
export const COMPANY_INFO = {
  name: 'Blog MJDEV',
  legalName: 'MJDEV',
  url: SITE_URL,
  logo: `/images/site-logo.png`,
  foundingDate: '2026',
  address: {
    streetAddress: '123 Web Dev Street',
    addressLocality: 'San Francisco',
    addressRegion: 'CA',
    postalCode: '94102',
    addressCountry: 'US'
  },
  contactPoint: {
    telephone: '+1-555-123-4567',
    contactType: 'customer support',
    email: 'support@shadcnstudio.com'
  },
  sameAs: Object.values(SOCIAL_LINKS)
}
