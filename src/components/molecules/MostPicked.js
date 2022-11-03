import { Title } from "../atoms/Title";

const MostPicked = () => {
    return(
        <>
            <section className="picked w-full mt-[58%] flex top-0 left-0 bg-slate-400 absolute">
                <div className="container mx-auto m-auto flex items-center justify-between relative">
                    <div className="left-0 top-0">
                        <Title className="text-2xl">Most Picked</Title>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MostPicked;