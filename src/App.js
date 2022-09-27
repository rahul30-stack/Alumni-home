import "./App.css";
import MainPage from "./components/1-MainPage/MainPage";
import Video from "./components/2-Video/Video";
import AboutUs from "./components/3-AboutUs/AboutUs";
import Director from "./components/7-Directors/Director";
import Events from "./components/5-Events/Events";
import LatestNews from "./components/4-Latest News/LatestNews";
import Memories from "./components/6-Memories/Memories";
import Footer from "./components/8-footer/Footer";
import SideBar from "./components/navbar/SideBar";
import Login from "./components/login/login";
import { useState, useEffect } from "react";
import DirectorM from "./components/7-Directors/DirectorM";
import EventsM from "./components/5-Events/EventsM";

function App() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 990) {
      setMobile(true);
    }
  }, [window.innerWidth]);
  return (
    <section id="master">
      <MainPage />
      <Video />
      <SideBar />
      <Login />
      <AboutUs />
      <LatestNews />
      {mobile ? <EventsM /> : <Events />}
      <Memories />
      {mobile ? <DirectorM /> : <Director />}
      <Footer />
    </section>
  );
}

export default App;
