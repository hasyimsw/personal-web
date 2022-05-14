import Navbar from "./Navbar";
import ButtonHero from "./ButtonHero";

export default function Hero() {
    return(
        <div id="home" className="bg-hero md:h-[600px] 2xl:h-[712px] xl:h-[650px] pb-20">
            <div className="container mx-auto 2xl:px-20 xl:px-10 lg:px-10 md:px-5 sm:px-5">
                <Navbar></Navbar>
                <div className="text-center xl:mt-24 lg:mt-16 md:mt-20 mt-16">
                    <h1 className="lg:text-4xl text-3xl text-center text-white font-sans 2xl:w-7/12 lg:w-10/12 xl:w-8/12 md:w-full mx-auto mb-10 leading-normal lg:px-0 md:px-10 w-10/12">Saya seorang mahasiswa, front-end developer, dan juga UI/UX designer</h1>
                    <p className="text-paragraph font-source">Sejak 2020 saya belajar programming.</p>
                    <p className="text-paragraph font-source mb-20 lg:mb-10">Sejak 2022 belajar UI/UX design.</p>
                    <div>
                        <ButtonHero>Learn</ButtonHero>
                    </div>
                </div>
            </div>
        </div>
    );
}