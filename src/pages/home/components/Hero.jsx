import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import HeroIllustration from '../assets/hero-illustrator.json'
export default function Hero() {
    return (
        <section className="bg-primary pt-20 text-white transition-all w-full">
            <div className="transition-all w-full max-w-custom mx-auto  md:pt-20 lg:flex lg:items-center lg:pb-20 lg:gap-7 lg:pt-15 xl:pt-12 xl:gap-0 xl:pb-16">


                <div className="px-4 pt-7 xl:pl-9">
                    <h1 className="text-3xl font-semibold max-w-lg lg:text-4xl lg:max-w-2xl lg:leading-tight">Monitor Your <span className="text-alt">Vital</span> Signs Anytime, Anywhere</h1>
                    <p className="mt-5 max-w-md leading-7 pr-6 text-gray-300 md:max-w-lg lg:mt-6 lg:text-lg lg:max-w-xl">Introducing the Health Diagnostic Device, your personal health monitoring companion. Stay informed with real-time data and get personalized insights with our integrated AI assistant.</p>

                    <div className="mt-6 flex items-center gap-4 lg:mt-8 lg:gap-5">
                        <Link to="/about-us" className="text-sm border rounded inline-block px-3 py-2 hover:border-transparent hover:bg-white hover:text-primary transition-all lg:text-base">Learn More &rarr;</Link>
                        <Link to="/login" className="text-sm inline-block px-3 py-2 bg-alt text-primary rounded hover:bg-secondary transition-all lg:text-base">Get Started &rarr;</Link>
                    </div>
                </div>
                <div className="w-full mt-10 lg:w-2/3 xl:w-1/2 xl:max-w-4xl">
                    <Lottie animationData={HeroIllustration} loop={true} autoplay={true} className="w-full" />
                </div>
            </div>
        </section>
    )
}