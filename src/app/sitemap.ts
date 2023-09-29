import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = '#'

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      priority: 1,
    },
  ]
}
