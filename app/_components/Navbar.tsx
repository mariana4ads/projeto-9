import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-foreground">
      <ul className="flex justify-between h-20 mx-auto w-[80%] items-end pb-2 text-1xl text-background font-bold ">
        <li>
          <Link href="/">Início</Link>
        </li>
        <li>
          <Link href="/about">Sobre mim</Link>
        </li>
        <li>
          <Link href="/profile">Portfólio</Link>
        </li>
        <li>
          <Link href="/contact">Contato</Link>
        </li>
      </ul>
    </div>
  );
}
