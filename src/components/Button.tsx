const Button = ({ icon, text, ...rest }: any) => {
    return (
        <button {...rest} className={`flex flex-row items-center gap-2 bg-orange text-xs sm:text-sm md:text-base text-black font-bold rounded-full py-1.5 px-5 hover:bg-amber-500 active:bg-amber-600 focus:outline-none`}>
            {icon}{text}
        </button>
    )
}

export default Button;