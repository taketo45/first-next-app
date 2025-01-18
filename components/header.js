import Image from "next/image";

export function Header(props) {
  console.log(props);
  return (
        <div>
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">{props.title} : {props.infra} 2025/01</h1>
        </div>
        
  );
}
