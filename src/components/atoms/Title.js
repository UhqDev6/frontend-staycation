export const Title = ( { className='', children, ...props}) => {
    return(
        <>
            <h1 className={`${className}`} {...props}>
                {children}
            </h1>
        </>
    );
}