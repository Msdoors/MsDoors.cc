import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api',
        '/dashboard',
        '/signin',
        '/signout',
        '/purchase'
      ],
    },
    sitemap: 'https://msdoors-gg.vercel.app/sitemap.xml',
  }
}
