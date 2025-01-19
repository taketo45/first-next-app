import Image from "next/image";
import Link from "next/link";

export function Header(props) {
  // console.log(props);
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
          <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">{props.title} : {props.children} {props.date}</h1>
          <nav>
            <ul className="flex justify-center sm:justify-start space-x-4">
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/About">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        
  );
}
