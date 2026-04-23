import { ArrowUpRightIcon, CalendarDaysIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import type { BlogPost } from '@/components/blocks/blog-component/blog-component'

const HeroSection = ({ blogData }: { blogData: BlogPost[] }) => {
  const featuredPosts = blogData.filter(post => post.featured)

  return (
    <section id='home' className='bg-muted -mt-16 pt-32 pb-12 sm:pb-16 lg:pb-24'>
      <div className='mx-auto flex h-full max-w-7xl flex-col gap-16 px-4 sm:px-6 lg:px-8'>
        {/* Hero Header */}
        <div className='flex max-w-4xl flex-col items-center gap-4 self-center text-center'>
          <Badge variant='outline' className='text-sm font-normal'>
            Trusted by 1,000,000+ professionals
          </Badge>
          <h1 className='text-3xl leading-[1.29167] font-semibold text-balance sm:text-4xl lg:text-5xl'>
            Build Better Products with Insights that Drive Real Impact.
          </h1>
          <p className='text-muted-foreground mx-auto max-w-2xl text-xl'>
            Learn how to design, develop, launch, and grow digital products through practical knowledge and proven
            frameworks.
          </p>
          <form className='gap-3 py-1 max-sm:w-full max-sm:space-y-2 sm:flex sm:flex-row md:w-sm'>
            <Input type='email' placeholder='Your email' className='bg-background h-10 flex-1 text-base' />
            <Button size='lg' className='text-base max-sm:w-full' asChild type='submit'>
              <a href='#'>Subscribe</a>
            </Button>
          </form>
        </div>

        <div className='grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2'>
          {featuredPosts.map((item, index) => (
            <div key={`${item.author}-${index}`} className='group h-full'>
              <Card className='h-full overflow-hidden border-border/60 py-0 shadow-sm transition-shadow duration-200 group-hover:shadow-md'>
                <CardContent className='grid h-full grid-cols-1 px-0 xl:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]'>
                  <div className='p-5 sm:p-6 xl:pr-3'>
                    <a href={`/blog/${item.slug}`} className='block h-full overflow-hidden rounded-xl bg-muted'>
                      <img
                        src={item.imageUrl}
                        alt={item.imageAlt}
                        className='aspect-[4/3] h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
                        loading='lazy'
                      />
                    </a>
                  </div>
                  <div className='flex h-full flex-col justify-between gap-5 p-5 pt-0 sm:p-6 sm:pt-0 xl:pl-3 xl:pt-6'>
                    <div className='space-y-5'>
                      <div className='space-y-2'>
                        <Badge
                          className='bg-primary/10 text-primary hover:bg-primary/15 w-fit max-w-full shrink-0 border-0 px-3 py-1 text-xs sm:text-sm whitespace-nowrap'
                          onClick={e => {
                            e.preventDefault()
                            e.stopPropagation()
                            window.location.href = `/#category-${item.category}`
                          }}
                        >
                          {item.category}
                        </Badge>
                        <div className='text-muted-foreground flex min-w-0 items-center gap-1.5 text-sm'>
                          <CalendarDaysIcon className='size-4 shrink-0' />
                          <p>{item.pubDate}</p>
                        </div>
                      </div>

                      <a href={`/blog/${item.slug}`} className='block'>
                        <h3 className='text-2xl leading-tight font-semibold tracking-tight'>{item.title}</h3>
                      </a>

                      <p className='text-muted-foreground max-w-prose text-base leading-7'>{item.description}</p>
                    </div>

                    <div className='flex w-full items-center justify-between gap-4 pt-2'>
                      <span className='cursor-pointer text-sm font-semibold'>{item.author}</span>
                      <Button
                        size='icon'
                        className='border-border/80 bg-background text-foreground transition-colors group-hover:border-transparent group-hover:bg-primary group-hover:text-primary-foreground hover:border-transparent hover:bg-primary hover:text-primary-foreground'
                        asChild
                      >
                        <a href={`/blog/${item.slug}`}>
                          <ArrowUpRightIcon />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
