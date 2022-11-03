
export const Button = ({ title, type, value, icon, background, className='', children, text,  ...props }) => {

    return(
        <>
            <button className={`${className} [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 text-white px-4 py-4 rounded-xl`}  {...props}>
                {text || children}
            </button>
        </>
    );
}