import IMGLivingRoom9 from "../../assets/images/img-categories/categories-9.jpg";
import IMGLivingRoom10 from "../../assets/images/img-categories/categories-10.jpg";
import IMGLivingRoom11 from "../../assets/images/img-categories/categories-11.jpg";
import IMGLivingRoom12 from "../../assets/images/img-categories/categories-12.jpg";
import { Title } from "../atoms/Title";
import Card from "../atoms/Card";

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


const RoomApartements = () => {
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

    const roomApartements = [
        {
            id: 1,
            isPopuler: true,
            image: IMGLivingRoom12,
            title: 'Anggana',
            ket: 'Bogor, Indonesia',
        },
        {
            id: 2,
            isPopuler: false,
            image: IMGLivingRoom9,
            title: 'Tabby Town',
            ket: 'Gunung Batu, Indonesia',
        },
        {
            id: 3,
            isPopuler: false,
            image: IMGLivingRoom10,
            title: 'Seattle Rain',
            ket: 'Jakarta, Indonesia',
        },
        {
            id: 4,
            isPopuler: true,
            image: IMGLivingRoom11,
            title: 'Wodden Pit',
            ket: 'Wonosobo, Indonesia',
        },
        {
            id: 5,
            isPopuler: false,
            image: IMGLivingRoom12,
            title: 'Wodden Pit',
            ket: 'Wonosobo, Indonesia',
        },
        {
            id: 6,
            isPopuler: false,
            image: IMGLivingRoom11,
            title: 'Seattle Rain',
            ket: 'Jakarta, Indonesia',
        },
        {
            id: 7,
            isPopuler: false,
            image: IMGLivingRoom9,
            title: 'Wodden Pit',
            ket: 'Wonosobo, Indonesia',
        },
    ]
    return(
        <>
            <section className="title-picked w-full flex top-0 left-0 mt-20">
                <div className="w-full m-auto justify-between flex items-center ml-20 ">
                    <Title className="text-2xl">Apartements with kichen set</Title>
                </div>
            </section>
            <section>
                    <div className="mt-10 ml-20 mr-20 gap-6">
                        <div className="gap-8 ">
                        <Slider {...settings}>
                                {
                                    roomApartements.map((data) => (
                                        <Card key={data.id} className="w-[263px] h-[250px] shadow-none">
                                            <img src={data.image} alt='MostPicked2' className="absolute cursor-pointer"/>
                                            { data.isPopuler === true ?
                                            <Card.Title className="z-20  relative">
                                                <div className="w-[120px] h-[40px] 
                                                bg-cyan-500 rounded-bl-xl flex absolute top-0 right-0">
                                                    <p className="m-auto left-0 top-0  text-white text-xs"><span className="font-semibold">Populer</span><span className="font-light"> Choice</span></p>
                                                </div>
                                            </Card.Title>
                                            :
                                            <Card.Title className="left-24 z-20 opacity-0 relative">
                                                <div className="w-[180px] h-[40px] bg-cyan-500 rounded-b-xl flex absolute">
                                                </div>
                                            </Card.Title>
                                            }
                                            <Card.Body className="top-10">
                                                <div className="mt-[58%] left-0">
                                                    <p className="text-black">{data.title}</p>
                                                </div>
                                            </Card.Body>
                                            <Card.Footer className="top-10">
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

export default RoomApartements;