import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";

const Container = () => {
    return(
        <>
            <div className="flex w-full">
                <Routes>
                    <Route path="/" element={<HomePage/>}></Route>
                </Routes>
            </div>
        </>

    );
}

export default Container;