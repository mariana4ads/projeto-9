import { posts } from "@/app/data/posts";

export default function PostPage({ params }) {
  const post = posts.find((p) => p.id === Number(params.id));

  if (!post) {
    return (
      <div className="text-center items-center h-full">
        <h1>Post não encontrado</h1>
        <p>Voltar</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{post.titulo}</h1>
      <p>{post.conteudo}</p>
      <p className="text-sm text-gray-500 mt-4">Autor: {post.autor}</p>
    </div>
  );
}
