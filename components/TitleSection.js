export default function TitleSection({ orange, children }) {
    return(
        <h2 className={`text-2xl ${!orange ? "text-secondary" : "text-primary"} font-sans font-bold text-center`}>{children}</h2>
    );
}