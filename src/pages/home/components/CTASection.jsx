import { Link } from "react-router-dom";

export default function CTA() {
    return (
        <section className="w-full h-auto relative py-16 bg-[#00000061]">
            <video autoPlay muted loop playsInline className="w-full object-cover absolute top-0 left-0 h-full -z-10">
                <source src="https://videos.pexels.com/video-files/6130551/6130551-hd_1280_720_30fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="w-4/5 bg-white mx-auto py-8 px-8">
                <h2 className="text-primary font-semibold text-lg">Ready to Take Control of Your Health?</h2>

                <p className="text-sm mt-5 leading-normal">Join thousands of others who are monitoring their health in real-time with our Health Diagnostic Device.
                    Stay informed, stay healthy, and share your data with those who matter.</p>

                <Link to="/login" className="text-sm inline-block mt-8 bg-primary text-white px-3 py-2 rounded hover:bg-[#002626dd]">Get Started Today</Link>
            </div>
        </section>
    )
}