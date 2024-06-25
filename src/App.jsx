import Layout from "./layout";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";
import ContextProvider from "./contexts/ContextProvider";

function App() {
  return (
    <div className="app font-body relative w-full transition-all">
      <ContextProvider>
        <Navbar />
        <Layout />
        <Footer />
      </ContextProvider>
    </div>
  );
}

export default App;
