function Button({ children, className, ...rest }) {
    return (
        <button type="button" className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center 
        dark:text-gray-900 dark:bg-gray-50 dark:hover:bg-gray-200 dark:focus:ring-blue-800 ${className}`} {...rest}>
            {children}
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
        </button>);
}

export default Button