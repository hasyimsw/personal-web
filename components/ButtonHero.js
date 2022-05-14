export default function ButtonHero({ children }) {
    return(
        <a href="#" className="border-primary border-2 text-white bg-primary px-8 py-2 text-xl font-bold rounded-full font-sans inline-block hover:bg-opacity-80">{children}</a>
    );
}