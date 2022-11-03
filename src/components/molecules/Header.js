import { Navbar } from "../atoms/Navbar";
import { Title } from "../atoms/Title";

export const Header = () => {
    return(
        <>
            <header className="bg-white border-b-[1px] w-full h-[80px] flex top-0 left-0 absolute">
                <div className="container mx-auto m-auto flex items-center justify-between relative">
                    <div>
                        <Title className="text-2xl"><span className="font-semibold textColorPrimary">Stay</span><span className="textColorSecondary">cation.</span></Title>
                    </div>
                    <div className="flex items-center">
                        <Navbar/>
                    </div>
                </div>
            </header>
        </>
    );
}