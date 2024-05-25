import { Button } from "flowbite-react";
import Navbar from "../Layout/Navbar.tsx";
import Hero from "../Shared/Components/Hero.tsx";
import StepsSection from "../Shared/Components/StepsSection.tsx";
import PricingSection from "../Shared/Components/PricingSection.tsx";
import OurMessage from "../Shared/Components/OurMessage.tsx";
import Footer from "../Layout/Footer.tsx";
export default function Home() {
    return (
        <div>
            <Hero />
            <StepsSection />
            <PricingSection />
            <OurMessage />
        </div>
)
}
