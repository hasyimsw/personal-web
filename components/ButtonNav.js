export default function ButtonNav({ children }) {
    return(
        <a href="#contact" className="border-primary border-2 text-primary px-6 py-2 text-sm font-bold rounded-full font-sans hover:bg-primary hover:bg-opacity-500 hover:text-white">{children}</a>
    );
}