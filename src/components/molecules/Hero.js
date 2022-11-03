import { Button } from "../atoms/Button";
import { Title } from "../atoms/Title";
import ICTravel from '../../assets/images/icons/ic_traveler.svg'
import ICTreasure from '../../assets/images/icons/ic_treasure.svg'
import ICCities from '../../assets/images/icons/ic_cities.svg';
import IMGHero from '../../assets/images/img-hero/img-hero.svg';
import IMGFrameHero from '../../assets/images/img-hero/img-hero-frame.svg';

export const Hero = () => {
    const ICPrimary = [
        {
            id: 1,
            icon: ICTravel,
            value: 490,
            label: 'travel',
        },
        {
            id: 2,
            icon: ICTreasure,
            value: 205.32,
            label: 'treasure',
        },
        {
            id: 3,
            icon: ICCities,
            value: 10.00,
            label: 'cities',
        }
    ]
    return(
        <>
            <section className="hero w-full mt-20 flex top-0 left-0 absolute">
                <div className="container mx-auto m-auto flex items-center justify-between relative">
                    <div className="mt-12 w-1/2">
                        <div className="mt-10">
                            <Title className="font-semibold text-4xl tracking-wider leading-relaxed">Forget Busy Work, Start Next Vocation In The Future</Title>
                        </div>
                        <div className="mt-10 w-[500px]">
                            <p className="-tracking-tighter leading-relaxed text-slate-500">
                                We provide what you need to enjoy your 
                                holiday with family. Time to make another 
                                memorable moments.
                            </p>
                        </div>
                        <div className="left-0 top-0 mt-10">
                            <Button className="btn-primary w-[200px] justify-center">
                                Show Me Now
                            </Button>
                        </div>
                        <div className="mt-20 flex gap-10">
                            {
                                ICPrimary.map((data) => (
                                    <div key={data.id} className="">
                                        <img src={data.icon} alt='travel' className="w-6"/>
                                        <p className="mt-2">
                                        <span className="font-semibold">{data.value} </span>
                                        <span className="text-slate-500">{data.label}</span>
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="mt-14 flex relative">
                            <img src={IMGHero} alt='img-hero' className="mr-20 z-10" />
                            <img src={IMGFrameHero} alt='img-frame-hero' className="absolute ml-16 mt-10 z-0" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}