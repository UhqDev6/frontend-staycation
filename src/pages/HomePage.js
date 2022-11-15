import { Header } from "../components/molecules/Header";
import { Hero } from "../components/molecules/Hero";
import MostPicked from "../components/molecules/MostPicked";
import RoomApartements from "../components/molecules/RoomApartements";
import RoomHotels from "../components/molecules/RoomHotels";
import RoomHouse from "../components/molecules/RoomHouse";

const HomePage = () => {
    return(
        <div className="max-w-full h-auto">
            <div>
                <Header/>
            </div>
            <div>
                <Hero/>
            </div>
            <div>
                <MostPicked/>
            </div>
            <div>
                <RoomHouse/>
            </div>
            <div>
                <RoomHotels/>
            </div>
            <div>
                <RoomApartements/>
            </div>
        </div>
    );
}

export default HomePage;