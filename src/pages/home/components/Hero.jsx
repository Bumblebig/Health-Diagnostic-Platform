import Lottie from "lottie-react";
import HeroIllustration from '../assets/hero-illustrator.json'
export default function Hero() {
    return (
        <section>
            <div></div>
            <div className="w-full">
                <Lottie animationData={HeroIllustration} loop={true} autoplay={true} className="" />
            </div>
        </section>
    )
}