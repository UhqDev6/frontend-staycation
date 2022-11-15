import Card from "../atoms/Card";
import { Title } from "../atoms/Title";
import IMGMostPicked1 from "../../assets/images/img-mostpicked/img-mostpicked-1.jpg";
import IMGMostPicked2 from "../../assets/images/img-mostpicked/img-mostpicked-2.jpg";
import IMGMostPicked3 from "../../assets/images/img-mostpicked/img-mostpicked-3.jpg";
import IMGMostPicked4 from "../../assets/images/img-mostpicked/img-mostpicked-4.jpg";
import IMGMostPicked5 from "../../assets/images/img-mostpicked/img-mostpicked-5.jpg";

const MostPicked = () => {
    return(
        <>
            <section className="title-picked w-full flex top-0 left-0 mt-20">
                <div className="w-full m-auto justify-between flex items-center ml-20 ">
                    <Title className="text-2xl">Most Picked</Title>
                </div>
            </section>
            <section className="cad-picked w-full flex top-0 left-0">
                <div className="w-full m-auto justify-between flex items-center">
                    <div className="mt-10 flex justify-between gap-6 md:gap-10 ml-20">
                        <div className="w-full space-y-4">
                            <Card className="w-[220px] h-[280px] md:w-[220px] md:h-[280px] lg:w-[360px] lg:h-[460px] xl:w-[360px] xl:h-[460px]">
                                <img src={IMGMostPicked1} alt='MostPicked' className="absolute"/>
                                <Card.Title className="left-[80px] md:left-[80px] lg:left-48 xl:left-48 z-10">
                                    <div className="w-[150px] h-[30px] md:w-[150px] md:h-[30px] lg:w-[180px] lg:h-[40px] xl:w-[180px] xl:h-[40px] bg-cyan-500 rounded-b-xl flex">
                                        <span className="m-auto text-white text-sm sm:text:sm md:text-sm lg:text-xl">$50 per night</span>
                                    </div>
                                </Card.Title> 
                                <Card.Body className="z-10">
                                    <div className="mt-[85%] ml-6 md:mt-[85%]  md:ml-6 lg:mt-[95%]  lg:ml-10 xl:mt-[95%]  xl:ml-10">
                                        <p className="text-white">Blue Origin Fams</p>
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <div className="ml-6 md:ml-6 lg:ml-10 xl:ml-10">
                                        <p className="text-white text-xs font-light">Jakarta, Indonesia</p>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </div>
                        <div>
                            <div className="w-full gap-20 space-y-4 sm-flex lg:space-y-14">
                                <Card className="w-[350px] h-[200px]
                                sm:w-[220px] sm:h-[118px]
                                md:w-[340px] md:h-[200px]
                                ">
                                    <img src={IMGMostPicked2} alt='MostPicked2' className="absolute"/>
                                    <Card.Title className="left-48 z-10 sm:left-20 md:left-48">
                                        <div className="w-[180px] h-[40px]
                                        sm:w-[150px] sm:h-[30px]
                                        bg-cyan-500 rounded-b-xl flex">
                                            <span className="m-auto text-white sm:text-sm">$50 per night</span>
                                        </div>
                                    </Card.Title>
                                    <Card.Body className="z-10">
                                        <div className="mt-[30%] ml-10 sm:mt-[20%] sm:ml-6 md:mt-[30%]">
                                            <p className="text-white">Blue Origin Fams</p>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <div className="ml-10 sm:ml-6">
                                            <p className="text-white text-xs font-light">Jakarta, Indonesia</p>
                                        </div>
                                    </Card.Footer>
                                </Card>
                                <Card className="w-[350px] h-[200px]
                                sm:w-[220px] sm:h-[118px]
                                md:w-[340px] md:h-[200px]
                                ">
                                    <img src={IMGMostPicked2} alt='MostPicked2' className="absolute"/>
                                    <Card.Title className="left-48 z-10 sm:left-20 md:left-48">
                                        <div className="w-[180px] h-[40px]
                                        sm:w-[150px] sm:h-[30px]
                                        bg-cyan-500 rounded-b-xl flex">
                                            <span className="m-auto text-white sm:text-sm">$50 per night</span>
                                        </div>
                                    </Card.Title>
                                    <Card.Body className="z-10">
                                        <div className="mt-[30%] ml-10 sm:mt-[20%] sm:ml-6 md:mt-[30%]">
                                            <p className="text-white">Blue Origin Fams</p>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <div className="ml-10 sm:ml-6">
                                            <p className="text-white text-xs font-light">Jakarta, Indonesia</p>
                                        </div>
                                    </Card.Footer>
                                </Card>
                                <Card className="w-[350px] h-[200px]
                                sm:w-[220px] sm:h-[118px]
                                md:w-[340px] md:h-[200px]
                                ">
                                    <img src={IMGMostPicked2} alt='MostPicked2' className="absolute"/>
                                    <Card.Title className="left-48 z-10 sm:left-20 md:left-48">
                                        <div className="w-[180px] h-[40px]
                                        sm:w-[150px] sm:h-[30px]
                                        bg-cyan-500 rounded-b-xl flex">
                                            <span className="m-auto text-white sm:text-sm">$50 per night</span>
                                        </div>
                                    </Card.Title>
                                    <Card.Body className="z-10">
                                        <div className="mt-[30%] ml-10 sm:mt-[20%] sm:ml-6 md:mt-[30%]">
                                            <p className="text-white">Blue Origin Fams</p>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <div className="ml-10 sm:ml-6">
                                            <p className="text-white text-xs font-light">Jakarta, Indonesia</p>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </div>
                        </div>
                        {/* <div>
                            <div className="flex">
                                <Card className="w-[360px] h-[215px]">
                                    <img src={IMGMostPicked4} alt='MostPicked2' className="absolute"/>
                                    <Card.Title className="left-48 z-10">
                                        <div className="w-[180px] h-[40px] bg-pink-500 rounded-b-xl flex">
                                            <span className="m-auto text-white">$50 per night</span>
                                        </div>
                                    </Card.Title>
                                    <Card.Body className="z-10">
                                        <div className="mt-[30%] ml-10">
                                            <p className="text-white">Blue Origin Fams</p>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <div className="ml-10">
                                            <p className="text-white text-xs font-light">Jakarta, Indonesia</p>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </div>
                            <div className="flex mt-8">
                                <Card className="w-[360px] h-[215px]">
                                    <img src={IMGMostPicked5} alt='MostPicked2' className="absolute"/>
                                    <Card.Title className="left-48 z-10">
                                        <div className="w-[180px] h-[40px] bg-pink-500 rounded-b-xl flex">
                                            <span className="m-auto text-white">$50 per night</span>
                                        </div>
                                    </Card.Title>
                                    <Card.Body className="z-10">
                                        <div className="mt-[30%] ml-10">
                                            <p className="text-white">Blue Origin Fams</p>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer>
                                        <div className="ml-10">
                                            <p className="text-white text-xs font-light">Jakarta, Indonesia</p>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    );
}

export default MostPicked;