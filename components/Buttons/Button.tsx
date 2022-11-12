const Button = ({ children }) => {
    return (
        <button className="inline-block rounded-md border border-solid border-lightcolor bg-[white] hover:opacity-[0.8] px-6 py-2 text-white dark:border-darkcolor dark:bg-darksurface dark:text-darkcolor">
            {children}
        </button>
    )
}

export default Button