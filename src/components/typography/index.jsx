export function Title({ children, className, ...rest }) {
    return <h1 className={`text-3xl font-bold text-gray-900 dark:text-white ${className}`} {...rest}>{children}</h1>
}

export function Paragraph({ children, className, ...rest }) {
    return <p className={`text-gray-800 dark:text-gray-300 ${className}`} {...rest}>{children}</p>
}