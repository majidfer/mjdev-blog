'use client'

import * as React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type CarouselOptions = {
  align?: 'start' | 'center' | 'end'
  slidesToScroll?: number
}

type CarouselContextValue = {
  viewportRef: React.RefObject<HTMLDivElement | null>
  canScrollPrev: boolean
  canScrollNext: boolean
  scrollPrev: () => void
  scrollNext: () => void
}

const CarouselContext = React.createContext<CarouselContextValue | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error('Carousel components must be used within <Carousel>')
  }

  return context
}

function Carousel({
  className,
  opts,
  children,
  ...props
}: React.ComponentProps<'div'> & {
  opts?: CarouselOptions
}) {
  const viewportRef = React.useRef<HTMLDivElement>(null)
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const slidesToScroll = opts?.slidesToScroll ?? 1

  React.useEffect(() => {
    const viewport = viewportRef.current

    if (!viewport) {
      return
    }

    const updateScrollState = () => {
      const { scrollLeft, scrollWidth, clientWidth } = viewport
      const maxScrollLeft = Math.max(0, scrollWidth - clientWidth)

      setCanScrollPrev(scrollLeft > 0)
      setCanScrollNext(scrollLeft < maxScrollLeft - 1)
    }

    updateScrollState()
    viewport.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)

    return () => {
      viewport.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [slidesToScroll])

  const scrollByWidth = (direction: -1 | 1) => {
    const viewport = viewportRef.current

    if (!viewport) {
      return
    }

    viewport.scrollBy({
      left: direction * viewport.clientWidth * slidesToScroll,
      behavior: 'smooth'
    })
  }

  return (
    <CarouselContext.Provider
      value={{
        viewportRef,
        canScrollPrev,
        canScrollNext,
        scrollPrev: () => scrollByWidth(-1),
        scrollNext: () => scrollByWidth(1)
      }}
    >
      <div
        data-slot='carousel'
        data-align={opts?.align}
        className={cn('relative', className)}
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function CarouselContent({ className, ...props }: React.ComponentProps<'div'>) {
  const { viewportRef } = useCarousel()

  return (
    <div
      data-slot='carousel-content'
      ref={viewportRef}
      className={cn('flex overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden', className)}
      {...props}
    />
  )
}

function CarouselItem({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='carousel-item'
      role='group'
      aria-roledescription='slide'
      className={cn('min-w-0 shrink-0 grow-0 basis-full', className)}
      {...props}
    />
  )
}

function CarouselPrevious({
  className,
  variant = 'outline',
  size = 'icon',
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { canScrollPrev, scrollPrev } = useCarousel()

  return (
    <Button
      type='button'
      data-slot='carousel-previous'
      variant={variant}
      size={size}
      disabled={!canScrollPrev}
      onClick={event => {
        onClick?.(event)

        if (!event.defaultPrevented) {
          scrollPrev()
        }
      }}
      className={cn('inline-flex', className)}
      {...props}
    >
      <ChevronLeftIcon />
      <span className='sr-only'>Previous slide</span>
    </Button>
  )
}

function CarouselNext({
  className,
  variant = 'outline',
  size = 'icon',
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { canScrollNext, scrollNext } = useCarousel()

  return (
    <Button
      type='button'
      data-slot='carousel-next'
      variant={variant}
      size={size}
      disabled={!canScrollNext}
      onClick={event => {
        onClick?.(event)

        if (!event.defaultPrevented) {
          scrollNext()
        }
      }}
      className={cn('inline-flex', className)}
      {...props}
    >
      <ChevronRightIcon />
      <span className='sr-only'>Next slide</span>
    </Button>
  )
}

export { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious }
