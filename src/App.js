import './App.css';
import Header from "./components/header/Header";
import Greetings from "./components/greetings/Greetings";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import {useState} from "react";


function App() {

    const [lang, setLang] = useState(true)
    const [themes,setThemes] = useState(true)

  return (
      <div>
          <div className="App">
              <Header lang={lang} setLang={setLang} themes={themes} setThemes={setThemes}/>
              <Greetings lang={lang} themes={themes}/>
              <Skills lang={lang} themes={themes}/>
              <Projects lang={lang} themes={themes}/>
              <Form lang={lang} themes={themes}/>
              <Footer lang={lang} themes={themes}/>
          </div>
      </div>

  );
}

export default App;
