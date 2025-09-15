"use client";

import { useState } from "react";
import { blogs } from "./data/blogs";
import Link from "next/link";
import Search from "./_components/Search";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredBlogs = blogs.filter((blog) => blog.conteudo.toLowerCase().includes(search.toLowerCase()));

  return (
    <main className="px-6">
      <h1 className="text-4xl sm:text-5xl text-[#49111C] dark:text-[#ffefef] mt-6 text-center font-extrabold mb-6">
        console.<span className="text-[#ac3b37]">blog</span>
        <span className="text-[#e47979]">()</span>;
      </h1>

        <Search search={search} setSearch={setSearch} />

      <ul className="bg-amber-300 space-y-4">
        {filteredBlogs.slice(-3).map((blog) => (
          <li className="border p-4 rounded-lg shadow-sm" key={blog.id}>
            <h2 className="text-2xl font-semibold">{blog.titulo}</h2>
            <p>{blog.conteudo.slice(0, 100)}...</p>
            <p className="text-gray-400">{blog.autor}</p>
            <Link className="text-blue-500 hover:underline" href={`/blogs/${blog.id}`}>
              Ler mais &raquo;
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
