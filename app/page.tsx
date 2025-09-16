"use client";

import { useState } from "react";
import { posts } from "./data/posts";
import Link from "next/link";
import Search from "./_components/Search";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter((post) => post.conteudo.toLowerCase().includes(search.toLowerCase()));

  return (
    <main className="px-6">
      <h1 className="text-4xl sm:text-5xl text-[#49111C] dark:text-[#ffefef] mt-6 text-center font-extrabold mb-6">
        console.<span className="text-[#ac3b37]">blog</span>
        <span className="text-[#e47979]">()</span>;
      </h1>

      <Search search={search} setSearch={setSearch} />

      <section>
        <ul className="space-y-3">
          {filteredPosts.slice(0, 3).map((post) => (
            <li className="bg-white p-4 rounded-2xl" key={post.id}>
              <div className="flex justify-between text-sm text-[#ccabab]">
                <p>Postado: {post.data}</p>
                <p>Autor: {post.autor}</p>
              </div>
              <h2 className="text-xl font-extrabold">{post.titulo}</h2>

              <p>{post.conteudo.slice(0, 100)}...</p>
              <Link className="text-blue-500 hover:underline" href={`/posts/${post.id}`}>
                Ler mais &raquo;
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
