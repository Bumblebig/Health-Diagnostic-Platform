import Lottie from "lottie-react";
import { Benefits } from ".";
import AIIllustration from "../assets/ai-illustration.json";

export default function AIFeatureSection() {
    return (
        <section className="bg-secondary py-14 px-4 text-white">
            <h2 className="text-center font-semibold text-lg">Introducing Our Medical AI Assistant</h2>
            <p className="text-center text-sm mt-5">Our cutting-edge Medical AI Assistant is designed to enhance your health monitoring experience by providing personalized medical insights and recommendations. By analyzing your symptoms and health data, the AI can diagnose potential conditions and suggest possible treatments. This intelligent assistant leverages the latest advancements in artificial intelligence to offer accurate and reliable health advice right at your fingertips.</p>

            <div className="mt-20">
                <article className="flex flex-col gap-10">
                    <div className="flex flex-col gap-10 text-center">
                        <Benefits
                            title="Symptom Diagnosis"
                            desc="Simply input your symptoms, and our AI will analyze them to provide a list of possible conditions. This helps you understand what might be affecting your health and guides you on the next steps to take."
                        />
                        <Benefits
                            title="Treatment Suggestions"
                            desc="Based on the diagnosed conditions, our AI offers evidence-based treatment recommendations, including lifestyle changes, over-the-counter medications, and when to seek professional medical advice"
                        />
                    </div>
                    <div className="flex flex-col gap-10 text-center">
                        <Benefits
                            title="Personalized Health Insights"
                            desc="Receive tailored health tips and insights based on your unique health data, ensuring that you get the most relevant advice for maintaining your well-being"
                        />
                        <Benefits
                            title="Continuous Learning"
                            desc="Our AI continuously learns from new data and medical research, improving its accuracy and the relevance of its recommendations over time"
                        />
                    </div>

                </article>
                <div className="mt-10">
                    <Lottie animationData={AIIllustration} loop={true} autoplay={true} className="w-full" />
                </div>
            </div>
        </section>
    )
}