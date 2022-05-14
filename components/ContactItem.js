// import Field from "./Field";

export default function ContactItem() {
    return(
        <div className="container mx-auto md:flex items-center mt-16 px-5">
            <div className="w-full md:w-6/12 text-white font-semibold font-mono mt-20 md:mt-0">
                <div className="flex mb-5 2xl:ml-80 xl:ml-52 md:ml-20">
                    <img src="/email.png"></img>
                    <div className="ml-8">
                        <p className="text-base text-slate-300">hasyimsriewahyudi@gmail.com</p>
                    </div>
                </div>
                <div className="flex mb-5 2xl:ml-80 xl:ml-52 md:ml-20">
                    <img src="/twt.png"></img>
                    <div className="ml-7">
                        <a href="https://twitter.com/syimsw_" target="_blank"><p className="text-base text-slate-300">@syimsw_</p></a>
                    </div>
                </div>
                <div className="flex 2xl:ml-80 xl:ml-52 md:ml-20">
                    <img src="/phone.png"></img>
                    <div className="ml-7">
                        <p className="text-base text-slate-300">0895364907741</p>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-6/12 mt-10 md:mt-0">
                <form className="md:px-10">
                    <div className="mb-3">
                        <label htmlFor="Name" className="block text-primary font-mono font-semibold text-base">Name</label>
                        <input type="text" name="name" id="Name" className="rounded-sm px-2 mt-1 py-1 w-full xl:w-3/4"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Email" className="block text-primary font-mono font-semibold text-base">Email</label>
                        <input type="email" name="email" id="Email" className="rounded-sm px-2 mt-1 py-1 w-full xl:w-3/4"></input>
                    </div>
                    <div className="mb-7">
                        <label htmlFor="Message" className="block text-primary font-mono font-semibold text-base">Message</label>
                        <textarea type="textarea" name="message" id="Message" className="rounded-sm px-2 py-1 h-32 mt-1 w-full xl:w-3/4"></textarea>
                    </div>
                    <button className="px-6 py-1 bg-primary rounded-md text-white font-sans font-bold hover:bg-opacity-80">Send</button>
                </form>
            </div>
        </div>
    );
}