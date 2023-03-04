import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Card 
        img="katie_zaferes.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}/>
      {/* <Hero /> */}
    </div>
  )
}

export default App
