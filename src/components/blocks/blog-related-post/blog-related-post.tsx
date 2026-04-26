'use client'

import { ArrowRightIcon, CalendarDaysIcon } from 'lucide-react'

import { getCollection } from 'astro:content'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

import type { BlogPost } from '@/components/blocks/blog-component/blog-component'

export async function getStaticPaths() {
  const blogEntries = await getCollection('blog')

  return blogEntries.map(entry => ({
    params: { slug: entry.id },
    props: { entry }
  }))
}

const Blog = ({ relatedPosts }: { relatedPosts: BlogPost[] }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-16 px-4 py-8 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='space-y-4'>
          <Badge variant='outline'>Trending</Badge>

          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Related Post</h2>

          <p className='text-muted-foreground text-lg md:text-xl'>
            Expand your knowledge with these hand-picked posts.
          </p>
        </div>

        {/* Tabs and Search */}
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {relatedPosts.map(post => (
            <a
              href={`/blog/${post.slug}`}
              key={post.id}
              className='group h-full cursor-pointer overflow-hidden shadow-none transition-all duration-300'
            >
              <Card className='h-full shadow-none'>
                <CardContent className='flex h-full flex-col space-y-3.5'>
                  <div className='mb-6 overflow-hidden rounded-lg sm:mb-12'>
                    <img
                      src={post.imageUrl}
                      alt={post.imageAlt}
                      className='h-59.5 w-full object-cover transition-transform duration-300 group-hover:scale-105'
                      loading='lazy'
                    />
                  </div>
                  <div className='flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3'>
                    <div className='text-muted-foreground flex min-w-0 items-center gap-1.5'>
                      <CalendarDaysIcon className='size-5 shrink-0' />
                      <span className='truncate'>{post.pubDate}</span>
                    </div>
                    <Badge className='bg-primary/10 text-primary w-fit max-w-full shrink-0 border-0 text-sm whitespace-nowrap'>
                      <span className='truncate'>{post.category}</span>
                    </Badge>
                  </div>
                  <h3 className='line-clamp-2 min-h-[2rem] text-lg leading-tight font-medium md:min-h-[3rem] md:text-xl'>
                    {post.title}
                  </h3>
                  <p className='text-muted-foreground line-clamp-2'>{post.description}</p>
                  <div className='mt-auto flex items-center justify-between pt-2'>
                    <span className='text-sm font-medium'>{post.author}</span>
                    <Button
                      size='icon'
                      className='group-hover:bg-primary! bg-background text-foreground hover:bg-primary! hover:text-primary-foreground group-hover:text-primary-foreground border group-hover:border-transparent hover:border-transparent'
                    >
                      <ArrowRightIcon className='size-4 -rotate-45' />
                      <span className='sr-only'>Read more: {post.title}</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
