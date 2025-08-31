// src/routes/+layout.server.ts
import { parseISO } from 'date-fns'
import readingTime from 'reading-time'
import Prism from 'prismjs'
import loadLanguages from 'prismjs/components/index.js'

loadLanguages(['shell', 'markdown', 'json', 'js', 'ts'])

export const prerender = true

import type { LayoutServerLoad } from './$types'

interface PostMetadata {
  slug: string
  title: string
  creationDate: string
  published?: Date
  description?: string
  excerpt?: string
  readingTimeText?: string
  wordCount?: number
  [key: string]: unknown
}

export const load: LayoutServerLoad = async () => {
  console.log('Layout load function called');
  
  try {
    // Use eager loading to get all .svx files
    const postsResult = import.meta.glob('../posts/*.svx', { eager: true })
    
    // Extract and process posts
    const processedPosts = Object.entries(postsResult).map(async ([path, module], index) => {
      // Extract slug from filename
      const slug = path.slice(path.lastIndexOf('/') + 1, path.lastIndexOf('.'))
      
      // Type-safe module access
      const moduleWithMetadata = module as { 
        metadata: PostMetadata; 
        default: () => Promise<{ html: string; }> 
      }

      const metadata: PostMetadata = { ...moduleWithMetadata.metadata }

      // Ensure simply matches the actual name of the file instead of hand-maintained in the metadata
      metadata.slug = slug

      // Render and process reading time
      console.log({ moduleWithMetadata })
      if (typeof moduleWithMetadata.default === 'function') {
        try {
          const rendered = await moduleWithMetadata.default()
          console.log({ rendered })
          const rto = readingTime(rendered.html)
          
          metadata.readingTimeText = rto.text
          metadata.wordCount = rto.words
        } catch (renderError) {
          console.error(`Error rendering post ${slug}:`, renderError)
        }
      }

      // Fallback description
      if (!metadata.description) {
        metadata.description = metadata.excerpt
      }

      // Parse creation date
      metadata.published = parseISO(metadata.creationDate)

      return metadata
    })

    // Wait for all posts to be processed
    const postsAll = await Promise.all(processedPosts)

    // Sort posts by creation date (most recent first)
    const sortedPosts = postsAll.sort((a, b) => 
      new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime()
    )

    console.log('Loaded and processed posts:', sortedPosts.length)

    return {
      posts: sortedPosts,
    }
  } catch (error) {
    console.error('Critical error in layout load:', error)
    return {
      posts: []
    }
  }
}
