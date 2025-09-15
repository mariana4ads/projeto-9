export default function Contact() {
  return (
    <section className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-[#49111C] dark:text-[#ffefef]">Contato</h2>

      <div className="mb-6">
        <ul className="flex gap-4">
          <li>
            <a
              href="https://linkedin.com/in/mariana4ads"
              title="Ir para o LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://t.me/mariana4ads"
              title="Enviar mensagem no Telegram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Telegram
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mariana4ads"
              title="Ir para o GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="mailto:mariana4ads@gmail.com"
              title="Enviar um e-mail"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Email
            </a>
          </li>
        </ul>
      </div>

      <form className="space-y-4">
        <div>
          <label className="block font-semibold">Nome:</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Email:</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Mensagem:</label>
          <textarea
            name="message"
            required
            className="w-full border border-gray-300 p-2 rounded h-32"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#49111C] text-white px-4 py-2 rounded hover:bg-[#38040A]"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
