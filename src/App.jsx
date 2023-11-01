import "./App.css";
import { Nav } from "./components";
import { About, Contact, Footer, Home, Reviews, Services } from "./sections";

function App() {
  return (
    <main className="">
      <Nav />

      <div className=""> 
        <Home/>
        <About />
        <Services />
        <Reviews />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default App;
