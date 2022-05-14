import ParagraphSection from "./ParagraphSection"
import ContactItem from "./ContactItem";
import TitleSection from "./TitleSection";

export default function ContactSection() {
    return(
        <section id="contact" className="py-36 bg-secondary">
            <div className="container mx-auto">
                <TitleSection orange>Contact</TitleSection>
                <ParagraphSection>Hubungi saya</ParagraphSection>
                <ContactItem></ContactItem>
            </div>
        </section>
    );
}