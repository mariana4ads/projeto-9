"use client";
import Image from "next/image";

export default function Search({ search, setSearch }) {
  return (
    <section className="flex justify-center items-center sm:justify-end mb-4">
      <input
        className="flex border border-[#49111C] px-2 h-10 rounded-l-xl bg-white focus:outline-none text-zinc-600 text-sm"
        type="text"
        placeholder="Pesquise..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}/>
      <div className="flex bg-[#49111C] h-10 w-10 items-center justify-center border border-[#49111C] rounded-r-xl">
        <Image
          className="invert"
          width={20} 
          height={20} 
          src="https://img.icons8.com/external-sbts2018-outline-sbts2018/58/external-search-ecommerce-basic-1-sbts2018-outline-sbts2018.png"
          alt="imagem de uma lupa"
        />
      </div>
    </section>
  );
}
