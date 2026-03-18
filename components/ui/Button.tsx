'use client'
import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

// Botón reutilizable con variantes visuales
const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  ...props
}, ref) => {
  const base = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-naranja focus:ring-offset-2 focus:ring-offset-negro disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-naranja hover:bg-naranja-hover text-white shadow-lg hover:shadow-naranja/30',
    secondary: 'bg-gris-2 hover:bg-gris-3 text-white border border-gris-4',
    outline: 'border-2 border-naranja text-naranja hover:bg-naranja hover:text-white',
    ghost: 'text-white hover:bg-gris-2',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      ref={ref}
      className={cn(base, variants[variant], sizes[size], fullWidth && 'w-full', className)}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'
export default Button
