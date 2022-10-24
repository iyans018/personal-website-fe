const Bedge = ({ text, ...rest }: any) => {
    return (
        <p className="text-orange font-bold rounded-full bg-dark-50 px-5 py-1.5 w-fit" {...rest}>
            {text}
        </p>
    )
}

export default Bedge;