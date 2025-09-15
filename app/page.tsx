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

      <section>
        <ul className="space-y-3">
          {filteredBlogs.slice(0,3).map((blog) => (
            <li className="bg-white p-4 rounded-2xl" key={blog.id}>
              <div className="flex justify-between text-sm text-[#ccabab]">
                <p>Postado: {blog.data}</p>
                <p>Autor: {blog.autor}</p>
              </div>
              <h2 className="text-xl font-extrabold">{blog.titulo}</h2>

              <p>{blog.conteudo.slice(0, 100)}...</p>
              <Link className="text-blue-500 hover:underline" href={`/blogs/${blog.id}`}>
                Ler mais &raquo;
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
