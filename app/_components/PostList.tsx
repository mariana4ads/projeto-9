"use client";

import { useState } from "react";
import { posts } from "../data/posts";
import Link from "next/link";
import Search from "./Search";

export default function PostList() {
  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter((post) => {
    const text = search.toLowerCase();

    return (
      post.conteudo.toLowerCase().includes(text) ||
      post.titulo.toLowerCase().includes(text) ||
      post.data.toLowerCase().includes(text) ||
      post.tags?.some((tag) => tag.toLowerCase().includes(text))
    );
  });

  return (
    <main className="px-6 sm:px-10">
      <h1 className="text-4xl sm:text-5xl text-[#49111C] dark:text-[#ffefef] mt-6 text-center font-extrabold mb-2 pb-4">
        console.<span className="text-[#ac3b37]">blog</span>
        <span className="text-[#e47979]">()</span>;
      </h1>

      <Search search={search} setSearch={setSearch} />

      <section>
        <ul className="space-y-3 lg:grid grid-cols-3 2xl:grid-cols-4 gap-4 h-auto">
          {filteredPosts.map((post) => (
            <li className="bg-white dark:bg-[#49111C] p-4 mb-0 mb-3" key={post.id}>
              <div className="flex justify-between text-xs pb-1 text-[#ccabab] border-b">
                <p>{post.data}</p>
                <p>Autor: {post.autor}</p>
              </div>
              <h2 className="text-lg font-extrabold pt-3 pb-3 text-[#e47979]">{post.titulo}</h2>

              <p className="text-sm">{post.conteudo.slice(0, 100)}...</p>
              <Link
                className="bg-[#e47979] py-1 px-3 text-background text-sm hover:underline justify-end items-end"
                href={`/posts/${post.id}`}
              >
                Ler mais ⟹
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
