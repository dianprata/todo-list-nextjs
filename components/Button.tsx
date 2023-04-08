export default function Button({children, className, ...rest}: {children: React.ReactNode}) {
  return (
    <button className={`button ${className}`} {...rest}>
      {children}
    </button>
  )
}
