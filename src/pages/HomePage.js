import { Header } from "../components/molecules/Header";
import { Hero } from "../components/molecules/Hero";
import MostPicked from "../components/molecules/MostPicked";

const HomePage = () => {
    return(
        <>
            <div>
                <Header/>
            </div>
            <div>
                <Hero/>
            </div>
            <div>
                <MostPicked/>
            </div>
        </>
    );
}

export default HomePage;