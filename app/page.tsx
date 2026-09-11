import Banner from "@/components/Banner";
import Atuacao from "@/components/Atuacao";
import Diferenciais from "@/components/Diferenciais";
import About from "@/components/About";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Banner />
      <Atuacao />
      <Diferenciais />
      <About />
    </>
  );
}
