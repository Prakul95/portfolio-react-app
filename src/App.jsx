import {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Navigation,
  Footer,
  Contact,
  Certificate,

} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';


function App() {
  // const [mode, setMode] = useState<string>('dark');
  const [mode, setMode] = useState('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }
    useEffect(() => {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);
  return (
    <>
      {/*
        Import Futura font via CDN (example). If you have a local Futura font,
        place it in your /public or /src folder and adjust accordingly.
      */}
      <style>
        {`
          @import url('https://fonts.cdnfonts.com/css/futura-pt');
          .font-futura {
            font-family: 'Futura PT', sans-serif;
          }
        `}
      </style>

      <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <Main/>
            <Expertise/>
            <Timeline/>
            <Certificate/>
            <Project/>
            <Contact/>
        </FadeIn>
        <Footer />
    </div>
    </>
  );
}

export default App;
