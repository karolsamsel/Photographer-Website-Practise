import { useState } from "react";
import "./normalize.css";
import "./styles.css";
import { NavBar } from "./Navbar";
import { Hero } from "./Hero";
import { PSection } from "./ParagraphSection";
import { Work } from "./Work";
import { Testimonials } from "./Testimonials";
import { Action } from "./Action";
import { Footer } from "./Footer";

// Text Sections content
const pSection1 = {
  h2: "Behind the Lens",
  p: " Hey, I’m Jack — a photographer obsessed with capturing real moments and honest emotions. From a borrowed camera to full-time storytelling, I now   specialize in portraits, lifestyle, and events. My goal? Make you feel   confident, comfortable, and completely you in front of the lens.",
};
const pSection2 = {
  h2: "What can I do for You?",
  p: "Need a photographer? I’m your guy.  Weddings, portraits, events, brands — you name it. I’ve shot on rooftops, in forests, studios, and city streets. Rain or shine, I’ll be there with my camera, ready to tell your story the way it deserves to be told.",
};

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <PSection content={pSection1} name="about" />
      <Work />
      <PSection content={pSection2} name="service" />
      <Testimonials />
      <Action />
      <Footer />
    </>
  );
}

export default App;
