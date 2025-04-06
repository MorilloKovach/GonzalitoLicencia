import Image from "next/image";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { Footer } from "./Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Main/>
    </>
  );
}
