"use client";

import { useState } from "react";
import { blogs } from "./data/blogs";
import Link from "next/link";
import Search from "./_components/Search";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredBlogs = blogs.filter((blog) => blog.conteudo.toLowerCase().includes(search.toLowerCase()));

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">console.blog();</h1>

      <Search search={search} setSearch={setSearch} />

      <ul className="space-y-4">
        {filteredBlogs.slice(-3).map((blog) => (
          <li className="border p-4 rounded-lg shadow-sm" key={blog.id}>
            <h2 className="text-2xl font-semibold">{blog.titulo}</h2>
            <p>{blog.conteudo.slice(0, 160)}...</p>
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