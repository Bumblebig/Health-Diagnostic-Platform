import { Hero, Features, AISection, CTA } from "./components";

const Home = () => {
  return (
    <section className="w-full">
      <Hero />
      <Features />
      <AISection />
      <CTA />
    </section>
  )
}

export default Home