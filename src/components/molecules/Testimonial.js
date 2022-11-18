import IMGTestimonial from "../../assets/images/img-testimonial/foto_keluarga.svg";
const Testimonial = () => {
    return(
        <>
            <section>
                <div className="mt-32 ml-20 mr-20">
                    <div className="w-full flex">
                        <div>
                            <img src={IMGTestimonial} alt='Testimonial'/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Testimonial;