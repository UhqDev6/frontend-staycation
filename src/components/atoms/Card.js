const Card = ({children, className='', ...props}) => {
    return(
        <>
            <div className={`${className} shadow-slate-300 shadow-xl rounded-[15px] overflow-hidden bg-white relative`} {...props}>
                {children}
            </div>
        </>
    );
}

const Title = ({children, className='', ...props}) => {
    return(
        <>
            <div className={`${className} text-black relative`} {...props}>
                {children}
            </div>
        </>
    );
}

const Body = ({children, className='', ...props}) => {
    return(
        <>
            <div className={`${className} text-black relative`} {...props}>
                {children}
            </div>
        </>
    );
}

const Footer = ({children, className='', ...props}) => {
    return(
        <>
            <div className={`${className} text-black relative`} {...props}>
                {children}
            </div>
        </>
    );
}

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;