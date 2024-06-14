import Lottie from "lottie-react";
import { faPersonDotsFromLine, faCommentMedical, faNotesMedical, faRobot } from '@fortawesome/free-solid-svg-icons';
import { Benefits } from ".";
import AIIllustration from "../assets/ai-illustration.json";

export default function AIFeatureSection() {
    return (
        <section className="bg-secondary py-14 px-4 text-white lg:px-12">
            <h2 className="text-center font-semibold text-lg lg:text-xl">Introducing Our Medical AI Assistant</h2>
            <p className="text-center text-sm mt-5 lg:text-lg lg:px-5">Our cutting-edge Medical AI Assistant is designed to enhance your health monitoring experience by providing personalized medical insights and recommendations. By analyzing your symptoms and health data, the AI can diagnose potential conditions and suggest possible treatments. This intelligent assistant leverages the latest advancements in artificial intelligence to offer accurate and reliable health advice right at your fingertips.</p>

            <div className="mt-20 lg:flex lg:w-full lg:justify-between lg:items-center lg:mt-20 lg:px-5">
                <article className="flex flex-col gap-14 md:gap-14 lg:w-1/2">
                    <div className="flex flex-col gap-14 text-center md:flex-row md:items-start md:text-left md:justify-between">
                        <Benefits
                            icon={faPersonDotsFromLine}
                            title="Symptom Diagnosis"
                            desc="Simply input your symptoms, and our AI will analyze them to provide a list of possible conditions. This helps you understand what might be affecting your health and guides you on the next steps to take."
                        />
                        <Benefits
                            icon={faCommentMedical}
                            title="Treatment Suggestions"
                            desc="Based on the diagnosed conditions, our AI offers evidence-based treatment recommendations, including lifestyle changes, over-the-counter medications, and when to seek professional medical advice"
                        />
                    </div>
                    <div className="flex flex-col gap-14 text-center md:flex-row md:items-start md:text-left md:justify-between">
                        <Benefits
                            icon={faNotesMedical}
                            title="Personalized Health Insights"
                            desc="Receive tailored health tips and insights based on your unique health data, ensuring that you get the most relevant advice for maintaining your well-being"
                        />
                        <Benefits
                            icon={faRobot}
                            title="Continuous Learning"
                            desc="Our AI continuously learns from new data and medical research, improving its accuracy and the relevance of its recommendations over time"
                        />
                    </div>

                </article>
                <div className="mt-10 lg:w-2/5">
                    <Lottie animationData={AIIllustration} loop={true} autoplay={true} className="w-full block md:w-4/5 md:mx-auto md:mt-4 lg:w-full" />
                </div>
            </div>
        </section>
    )
}