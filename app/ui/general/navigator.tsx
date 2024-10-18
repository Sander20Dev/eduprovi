'use client'

import { PageSizeProvider } from '@/app/lib/ctx/window'
import { useWindowSize } from '@/app/lib/hooks/window'
import { IconChevronDown, IconMenu, IconX } from '@tabler/icons-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'

export default function Navigator() {
  return (
    <PageSizeProvider>
      <div className='fixed top-0 h-16 left-0 right-0 z-10 px-4 lg:px-6 py-4 bg-white border-b-2 border-gray-100 bg-opacity-90 flex items-center justify-between backdrop-blur-sm'>
        <Link className='flex items-center justify-center' href='/'>
          {/* <svg path='...' className='h-8' /> */}
          <span className='ml-2 text-2xl font-bold text-gray-900'>
            EDUPROVI
          </span>
        </Link>
        <Nav>
          <NavLink href='/'>Inicio</NavLink>
          <NavMenu
            label='Acerca de'
            items={[
              { href: '/about-us', label: 'Nosotros' },
              { href: '/about-project', label: 'El Proyecto' },
            ]}
          />
          <NavLink href='/'>Reseña Histórica</NavLink>
          <NavPrimaryLink href='/donate'>Donar Sangre</NavPrimaryLink>
        </Nav>
      </div>
    </PageSizeProvider>
  )
}

function NavLink({
  children,
  href,
  className,
  ...props
}: {
  children: React.ReactNode
  href: string
  className?: string
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const pathname = usePathname()

  return (
    <Link
      {...props}
      className={`${
        pathname === href ? 'text-red-600' : 'text-gray-900 hover:text-red-600'
      } text-sm font-medium transition-colors ${className}`}
      href={href}>
      {children}
    </Link>
  )
}

function NavPrimaryLink({
  children,
  href,
  className,
  ...props
}: {
  children: React.ReactNode
  href: string
  className?: string
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const pathname = usePathname()

  return (
    <Link
      {...props}
      className={`${
        pathname === href ? 'bg-red-700' : 'bg-red-600 hover:bg-red-700'
      } text-white font-bold py-1 px-2 rounded-md text-sm transition-colors ${className}`}
      href={href}>
      {children}
    </Link>
  )
}

function NavMenu({
  label,
  items,
}: {
  label: string
  items: { href: string; label: string }[]
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { width } = useWindowSize()
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className='relative' ref={menuRef}>
      <button
        className={`${
          isMenuOpen ? 'text-red-600' : 'text-gray-900 hover:text-red-600'
        } text-sm font-medium transition-colors flex items-center`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {label}
        <IconChevronDown className='ml-1 h-4 w-4' />
      </button>
      {isMenuOpen && (
        <div
          className={`${
            width < 768
              ? ''
              : 'absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
          }`}>
          <div
            className='py-1'
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='options-menu'>
            {items.map(({ label, href }) => (
              <NavMenuItemLink href={href} key={href}>
                {label}
              </NavMenuItemLink>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function NavMenuItemLink({
  children,
  href,
  className,
  ...props
}: {
  children: React.ReactNode
  href: string
  className?: string
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const pathname = usePathname()

  return (
    <Link
      {...props}
      className={`${
        pathname === href
          ? 'bg-gray-100 text-red-600'
          : 'text-gray-700 hover:bg-gray-100 hover:text-red-600'
      } block px-4 py-2 text-sm transition-colors ${className}`}
      href={href}
      role='menuitem'>
      {children}
    </Link>
  )
}

function Nav({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useWindowSize().width < 768

  if (isMobile) {
    return (
      <nav>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <IconX className={`text-gray-900 hover:text-red-600 h-8 w-8`} />
          ) : (
            <IconMenu className={`text-gray-900 hover:text-red-600 h-8 w-8`} />
          )}
        </button>
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } fixed z-10 top-0 left-0 w-screen h-screen`}>
          <div
            className='absolute inset-0 bg-black/50'
            onClick={() => setIsMenuOpen(false)}
          />
          <div className='relative flex flex-col gap-4 p-4 pr-8 bg-white w-full max-w-sm h-full overflow-y-auto z-20'>
            <button
              className='absolute top-4 right-4'
              onClick={() => setIsMenuOpen(false)}>
              <IconX className='text-gray-900 hover:text-red-600 h-6 w-6' />
            </button>
            {children}
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav>
      <div className='flex gap-4 sm:gap-6'>{children}</div>
    </nav>
  )
}
