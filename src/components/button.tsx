interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  children: React.ReactNode,
  variant?: 'default' | 'link'
}

export default function Button({ onClick, children, variant = 'default' }: ButtonProps): JSX.Element {
  const className = {
    default: "uppercase font-bold inline-flex items-center rounded-md border border-transparent bg-purple-300 px-4 pt-2.5 pb-1.5 text-sm text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2",
    link: "text-xs text-purple-300"
  }[variant]
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  )
}