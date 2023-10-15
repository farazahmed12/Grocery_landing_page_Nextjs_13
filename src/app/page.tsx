import Image from "next/image";
import Header from "./components/Header";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Services />
    </main>
  );
}
