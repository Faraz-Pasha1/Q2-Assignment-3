import Image from "next/image";
import Header from "./components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="first-Line">My Name is</h1>
      <h2 className="second-Line">Faraz Pasha</h2>
      <h3 className="third-Line">A Best Web Developer</h3>
      <div className="profile"></div>
    </div>
  );
}
