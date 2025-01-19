'use client';
import {Footer} from "../../components/footer";
import {Main} from "../../components/main";
import {Header} from "../../components/header";

export default function About() {

  const alertFunc = () => {
    alert("クリック")
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <Header title="About Page" date={Date()} >
        My first Next.jsテスト環境
      </Header>

      <Main 
        no1="Get started by editing" 
        no1dir="app/page.tsx" 
        onClick={alertFunc} 
      />

      <Footer />

    </div>
  );
}
