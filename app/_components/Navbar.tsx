import Link from "next/link";

const classLink =
  "relative py-5 px-2 sm:px-6 text-[#ffefef] font-bold hover:text-red-200 hover:bg-[#38040A]" 
  
export default function Navbar() {
  return (
    <div className="bg-[#49111C]">
      <ul className="flex flex-row justify-center h-16 mx-auto items-center text-1xl font-bold">
        <li>
          <Link className={classLink} href="/">
            Início
          </Link>
        </li>
        <li>
          <Link className={classLink} href="/about">
            Sobre mim
          </Link>
        </li>
        <li>
          <Link className={classLink} href="/profile">
            Portfólio
          </Link>
        </li>
        <li>
          <Link className={classLink} href="/contact">
            Contato
          </Link>
        </li>
      </ul>
    </div>
  );
}
