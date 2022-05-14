import TitleSection from "./TitleSection";
import ParagraphSection from "./ParagraphSection";

export default function ProfileSection() {
    return(
        <section id="profile" className="pt-36 pb-3 md:pb-10">
            <div className="container mx-auto 2xl:px-20 xl:px-10">
                <TitleSection>Profile</TitleSection>
                <ParagraphSection>Mengenal saya secara singkat</ParagraphSection>
                

                <div className="md:flex sm:block items-center w-full md:w-10/12 xl:mx-64 lg:mx-52 md:mx-20 mt-10">
                    <div className="lg:w-4/12 md:w-8/12 w-8/12 md:mx-0 mx-auto p-10">
                        <img src="/profile.png" className="w-full"></img>
                    </div>
                    <div className="lg:w-6/12 md:w-full px-8">
                        <h2 className="text-xl md:text-2xl text-secondary font-sans">Hi, Saya <span className="font-bold">Hasyim El-Marusy.</span></h2>
                        <p className="font-mono text-base md:text-lg text-paragraph mt-2">Saya saat ini sedang menempuh pendidikan di salah satu universitas di Yogyakarta. Dan saya juga sedang belajar tentang UI design dan front-end engineer. Saya juga tertarik untuk belajar dan mengeksplorasi hal-hal baru.</p>
                    </div>
                </div>

                <div className="mt-20">
                    <ul className="flex justify-center space-x-2">
                        <li className="bg-transparent px-3 py-1 border-[3px] border-secondary rounded-lg">
                            <a href="https://github.com/hasyimsw/" target="_blank"><img src="/github.png" width="20"></img></a>
                        </li>
                        <li className="bg-transparent px-3 py-1 border-[3px] border-secondary rounded-lg">
                            <a href="https://twitter.com/syimsw_" target="_blank"><img src="/twitter.png" width="20"></img></a>
                        </li>
                        <li className="bg-transparent px-3 py-1 border-[3px] border-secondary rounded-lg">
                            <a href="https://www.instagram.com/hasyimsw_/" target="_blank"><img src="/instagram.png" width="20"></img></a>
                        </li>
                        <li className="bg-transparent px-3 py-1 border-[3px] border-secondary rounded-lg">
                            <a href="https://web.facebook.com/profile.php?id=100009320618737" target="_blank"><img src="/facebook.png" width="20"></img></a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}