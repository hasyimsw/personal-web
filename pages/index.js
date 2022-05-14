import ContactSection from "../components/ContactSection";
import Hero from "../components/Hero";
import SectionProfile from "../components/SectionProfile";
import SectionProject from "../components/SectionProject";
import SectionSkill from "../components/SectionSkill";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <SectionProfile></SectionProfile>
      <SectionSkill></SectionSkill>
      <SectionProject></SectionProject>
      <ContactSection></ContactSection>
      <Footer></Footer>
    </>
  )
}
