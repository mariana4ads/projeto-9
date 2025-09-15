import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-[#49111C]">
      <ul className="flex justify-between h-15 mx-auto items-center text-1xl text-white font-bold w-3/4">
        <li>
          <Link href="/">Blogs</Link>
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

