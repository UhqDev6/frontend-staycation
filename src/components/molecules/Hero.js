import { Button } from "../atoms/Button";
import { Title } from "../atoms/Title";
import ICTravel from '../../assets/images/icons/ic_traveler.svg'
import ICTreasure from '../../assets/images/icons/ic_treasure.svg'
import ICCities from '../../assets/images/icons/ic_cities.svg';
import IMGHero from '../../assets/images/img-hero/img-hero.png';
import IMGFrameHero from '../../assets/images/img-hero/img-hero-frame.svg';
import Typed from 'react-typed';

export const Hero = () => {

    const ICPrimary = [
        {
            id: 1,
            icon: ICTravel,
            value: 904.00,
            label: 'travel',
        },
        {
            id: 2,
            icon: ICTreasure,
            value: 300.0,
            label: 'treasure',
        },
        {
            id: 3,
            icon: ICCities,
            value: 108.00,
            label: 'cities',
        }
    ]

    return(
        <>
            <section className="hero w-full flex top-0 left-0">
                <div className="w-full m-auto justify-between flex items-center ">
                    <div className="mt-12 w-[40%] sm:w-[100%] md:w-[60%] lg:w-[90%] xl:w-[100%] ml-20">
                        <div className="mt-10">
                            <Title className="
                                    font-semibold 
                                    text-2xl 
                                    tracking-wider 
                                    leading-relaxed 
                                    md:text-3xl 
                                    md:tracking-wider 
                                    md:leading-relaxed 
                                    lg:tracking-wider 
                                    lg:leading-relaxed 
                                    lg:text-4xl 
                                    xl:text-5xl
                                    xl:tracking-wider 
                                    xl:leading-relaxed ">Passion For Work, Owning Your Future Residence
                                    <Typed
                                        className="underline text-cyan-500"
                                        strings={[' Hotels', ' House', ' Villa']}
                                        typeSpeed={120}
                                        backSpeed={140}
                                        loop
                                    />
                                    </Title>
                        </div>
                        <div className="mt-10 lg:w-[400px] md:w-[280px] w-[200px]">
                            <p className="
                                sm:text-xs 
                                md:text-sm 
                                lg:tracking-tighter lg:leading-relaxed lg:text-lg
                                xl:text-lg
                                text-slate-500 ">
                                We provide what you need to enjoy your 
                                holiday with family. Time to make another 
                                memorable moments.
                            </p>
                        </div>
                        <div className="left-0 top-0 
                            sm:mt-20
                            md:mt-10
                            lg:mt-10
                            xl:mt-10
                            mt-10">
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
                    <div className="mt-12">
                        <img src={IMGHero} alt='img-hero' 
                        className="
                        w-[390px] -mt-10 -ml-24 reltive
                        md:w-[400px] 
                        lg:w-[65%] lg:ml-[24%] lg:mt-10 
                        " />
                            {/* <img src={IMGFrameHero} alt='img-frame-hero' className=" z-0 top-32 md:w-[500px] w-[230px] md:right-[470px] md:-mt-32 left:20 relative " /> */}
                    </div>
                </div>
            </section>
        </>
    );
}