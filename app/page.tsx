'use client';
import {Footer} from "../components/footer";
import {Main} from "../components/main";
import {Header} from "../components/header";
import {useState} from "react";

export default function Home() {

  const alertFunc = () => {
    alert("クリック")
  };

  const [count, setCount] = useState(0);
  const countHandler = () => {
    setCount((count) => count + 1);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <Header title="Start Page" date={Date()} >
        My first Next.jsテスト環境
      </Header>
      <div>{count}</div>
      <button onClick={countHandler}>クリック</button>
      <Main 
        no1="Get started by editing" 
        no1dir="app/page.tsx" 
        onClick={alertFunc} 
      />

      <Footer />

    </div>
  );
}
