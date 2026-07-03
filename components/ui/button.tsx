import * as React from "react"
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
}
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant = 'default', size = 'default', ...props }, ref) => {
  const base = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none"
  const vStyles = variant === 'ghost' ? "hover:bg-accent hover:text-accent-foreground" : "bg-primary text-primary-foreground shadow"
  const sStyles = size === 'sm' ? "h-9 px-3" : size === 'lg' ? "h-11 px-8" : "h-10 px-4 py-2"
  return <button className={`${base} ${vStyles} ${sStyles} ${className || ''}`} ref={ref} {...props} />
});
Button.displayName = "Button";