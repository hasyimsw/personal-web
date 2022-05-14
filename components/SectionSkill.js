import SkillCard from "./SkillCard";
import TitleSection from "./TitleSection";
import ParagraphSection from "./ParagraphSection"

export default function SectionSkill() {
    return(
        <section id="skills" className="py-32 bg-secondary">
            <div className="container mx-auto 2xl:px-20 xl:px-20">
            <TitleSection orange>Skills</TitleSection>
            <ParagraphSection>Tools and Skills</ParagraphSection>

            <SkillCard></SkillCard>
            </div>
        </section>
    );
}