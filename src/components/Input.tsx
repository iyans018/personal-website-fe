const Input = ({ type, value, children, ...rest }: any) => {
    const className = `
        form-control block w-full px-3 py-1.5 text-base font-normal 
        text-white bg-dark bg-clip-padding border-2 border-solid border-orange 
        rounded-md transition ease-in-out m-0 focus:bg-dark-50 focus:border-amber-500 
        focus:outline-none
    `;

    if (type === 'textarea') {
        return <textarea className={`${className} h-56`} {...rest}>{value}</textarea>
    } else if (type === 'select') {
        return <select className={className} {...rest}>{children}</select>
    } else if (type === 'checkbox') {
        return <input type={type} value={value} />
    } else {
        return <input className={className} type={type} value={value} {...rest} />
    }
}

export default Input;