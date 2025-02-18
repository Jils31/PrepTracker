import { FeatureCards } from "../components/FeatureCards";
import { Footer } from "../components/footer";
import { Hero } from "../components/Hero";
import { NavBar } from "../components/NavBar";

export function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />
            <div className="flex flex-col flex-1">
                <Hero />
                <div className="pb-32"> {/* Increased bottom padding */}
                    <FeatureCards />
                </div>
            </div>
            <Footer className="mt-auto" /> {/* Ensures footer is at the bottom */}
        </div>
    );
}
