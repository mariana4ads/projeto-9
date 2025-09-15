"use client";

export default function Search({ search, setSearch }) {
  return (
    <section>
      <input
        className="border p-2 bg-white"
        type="text"
        placeholder="Pesquise..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </section>
  );
}
