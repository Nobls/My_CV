import './App.css';
import Header from "./components/header/Header";
import Greetings from "./components/greetings/Greetings";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import {useEffect, useState} from "react";
import About from "./components/about/About";
import ScrollBtn from "./components/btnScroll/ScrollBtn";


function App() {

    const [lang, setLang] = useState(true)
    const [themes,setThemes] = useState(true)

    const [scroll, setScroll] = useState(0);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const handleScroll = () => {
        setScroll(window.scrollY);
    };

  return (
      <div>
          <div className="App">
              {scroll > document.documentElement.clientHeight && <ScrollBtn/>}
              <Header lang={lang} setLang={setLang} themes={themes} setThemes={setThemes}/>
              <Greetings lang={lang} themes={themes}/>
              <About lang={lang}/>
              <Skills lang={lang} themes={themes}/>
              <Projects lang={lang} themes={themes}/>
              <Form lang={lang} themes={themes}/>
              <Footer lang={lang} themes={themes}/>
          </div>
      </div>
  );
}

export default App;
