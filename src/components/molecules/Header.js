import { Navbar } from "../atoms/Navbar";
import { Title } from "../atoms/Title";

export const Header = () => {
    return(
        <>
            
                <div className="flex justify-between items-center h-24 w-full mx-auto px-20 ">
                    <div>
                        <Title className="w-full text-2xl"><span className="font-semibold textColorPrimary">Stay</span><span className="textColorSecondary">cation.</span></Title>
                    </div>
                    <div>
                        <Navbar/>
                    </div>
                </div>
        
        </>
    );
}