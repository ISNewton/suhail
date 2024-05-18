import { Button } from "flowbite-react";
import Navbar from "../Layout/Navbar.tsx";
import Hero from "../Components/Hero.tsx";
import StepsSection from "../Components/StepsSection.tsx";
import PricingSection from "../Components/PricingSection.tsx";
import OurMessage from "../Components/OurMessage.tsx";
import Footer from "../Layout/Footer.tsx";
export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <StepsSection />
            <PricingSection />
            <OurMessage />
            <Footer />

        </div>
)
}
