import IMGLivingRoom5 from "../../assets/images/img-categories/categories-5.jpg";
import IMGLivingRoom6 from "../../assets/images/img-categories/categories-6.jpg";
import IMGLivingRoom7 from "../../assets/images/img-categories/categories-7.jpg";
import IMGLivingRoom8 from "../../assets/images/img-categories/categories-8.jpg";
import Card from "../atoms/Card";
import { Title } from "../atoms/Title";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../App.css';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={`${className} hover:bg-cyan-400 bg-cyan-400 rounded-full`}
        onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={`${className} hover:bg-cyan-400 bg-cyan-400 rounded-full`}
        onClick={onClick}
        />
    );
}


const RoomHotels = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    const roomHotels = [
        {
            id: 1,
            isPopuler: true,
            image: IMGLivingRoom5,
            title: 'Anggana',
            ket: 'Bogor, Indonesia',
        },
        {
            id: 2,
            isPopuler: false,
            image: IMGLivingRoom6,
            title: 'Tabby Town',
            ket: 'Gunung Batu, Indonesia',
        },
        {
            id: 3,
            isPopuler: false,
            image: IMGLivingRoom7,
            title: 'Seattle Rain',
            ket: 'Jakarta, Indonesia',
        },
        {
            id: 4,
            isPopuler: true,
            image: IMGLivingRoom8,
            title: 'Wodden Pit',
            ket: 'Wonosobo, Indonesia',
        },
        {
            id: 5,
            isPopuler: true,
            image: IMGLivingRoom6,
            title: 'Wodden Pit',
            ket: 'Wonosobo, Indonesia',
        },
        {
            id: 6,
            isPopuler: false,
            image: IMGLivingRoom7,
            title: 'Seattle Rain',
            ket: 'Jakarta, Indonesia',
        },
        {
            id: 7,
            isPopuler: true,
            image: IMGLivingRoom5,
            title: 'Wodden Pit',
            ket: 'Wonosobo, Indonesia',
        },
    ]
    return(
        <>
            <section className="title-picked w-full flex top-0 left-0 mt-20">
                <div className="w-full m-auto justify-between flex items-center ml-20 ">
                    <Title className="text-2xl">House with beauty backyard</Title>
                </div>
            </section>
            <section>
                    <div className="mt-10 ml-20 mr-20 gap-6">
                        <div className="gap-8 ">
                        <Slider {...settings}>
                                {
                                    roomHotels.map((data) => (
                                        <Card key={data.id} className="w-[263px] h-[250px] shadow-none">
                                            <img src={data.image} alt='MostPicked2' className="absolute cursor-pointer"/>
                                            { data.isPopuler === true ?
                                            <Card.Title className="left-24 z-20">
                                                <div className="w-[180px] h-[40px] bg-cyan-500 rounded-b-xl flex">
                                                    <p className="m-auto text-white"><span className="font-semibold">Populer</span><span className="font-light"> Choice</span></p>
                                                </div>
                                            </Card.Title>
                                            :
                                            <Card.Title className="left-24 z-20 opacity-0">
                                                <div className="w-[180px] h-[40px] bg-cyan-500 rounded-b-xl flex">
                                                </div>
                                            </Card.Title>
                                            }
                                            <Card.Body>
                                                <div className="mt-[58%] left-0">
                                                    <p className="text-black">{data.title}</p>
                                                </div>
                                            </Card.Body>
                                            <Card.Footer>
                                                <div className="left-0">
                                                    <p className="text-slate-500 text-xs font-light">{data.ket}</p>
                                                </div>
                                            </Card.Footer>
                                        </Card>
                                    ))
                                }
                        </Slider>
                        </div>
                    </div>
            </section>
        </>
    );
}

export default RoomHotels;