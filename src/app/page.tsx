import Image from "next/image";
import Header from "./components/Header";
import Services from "./components/Services";
import Feature from "./components/Feature";
import Feature2 from "./components/Feature2";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Services />
      <Feature />
      <Feature2 />
      <Contact />
      <Footer />
    </main>
  );
}
