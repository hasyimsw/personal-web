export default function ProjectItem({description, image}) {
    return(
        <div className="flex mt-20 -mx-4 flex-wrap xl:px-10 lg:px-5 md:px-10 px-5">
            <div className="lg:w-6/12 px-4 pb-10">
                <img src="/345.png" className="w-full rounded-md shadow-lg"></img>
                <h3 className="font-sans text-base text-secondary mt-3 text-center">Personal web</h3>
            </div>
            <div className="lg:w-6/12 px-4 pb-10">
                <img src="/123.png" className="w-full rounded-md shadow-lg"></img>
                <h3 className="font-sans text-base text-secondary mt-3 text-center">Personal web</h3>
            </div>
            <div className="lg:w-6/12 px-4 pb-10">
                <img src="/123.png" className="w-full rounded-md shadow-lg"></img>
                <h3 className="font-sans text-base text-secondary mt-3 text-center">Personal web</h3>
            </div>
            <div className="lg:w-6/12 px-4 pb-10">
                <img src="/345.png" className="w-full rounded-md shadow-lg"></img>
                <h3 className="font-sans text-base text-secondary mt-3 text-center">Personal web</h3>
            </div>
        </div>             
    );
}