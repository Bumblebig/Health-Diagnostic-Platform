import Layout from './layout';
import Navbar from './components/navigation/Navbar';
import Footer from './components/navigation/Footer';

function App() {

  return (
    <div className='app font-body relative w-full transition-all'>
      <Navbar />
      <Layout />
      <Footer />
    </div>
  )
}

export default App
