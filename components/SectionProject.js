import TitleSection from "./TitleSection";
import ParagraphSection from "./ParagraphSection";
import ProjectItem from "./ProjectItem";

export default function SectionProject() {
    return(
        <section id="projects" className="py-32">
            <div className="container mx-auto 2xl:px-20 xl:px-10 lg:px-10">
                <TitleSection>Projects</TitleSection>
                <ParagraphSection>Beberapa project bikinan saya</ParagraphSection>
                <ProjectItem></ProjectItem>
            </div>
        </section>
    );
}