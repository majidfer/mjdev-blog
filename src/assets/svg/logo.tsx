import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

import logoMjdUrl from './logo-mjd.svg?url'

const LogoSvg = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      aria-label='MJDEV logo'
      role='img'
      className={cn('relative h-14 w-[7.5rem] shrink-0 overflow-hidden sm:h-16 sm:w-[8.5rem] md:h-[4.5rem] md:w-[10rem]', className)}
      {...props}
    >
      <img
        src={logoMjdUrl}
        alt=''
        aria-hidden='true'
        className='absolute inset-0 h-full w-full scale-[2.25] object-contain object-center'
      />
    </div>
  )
}

export default LogoSvg
