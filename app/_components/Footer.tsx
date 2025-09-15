export default function Footer() {
  return (
    <footer className="flex bg-[#49111C] text-[#ffefef] h-8 mt-10 items-center">
      <div className="container mx-auto text-center text-sm items-center">
        © {new Date().getFullYear()} Desenvolvido por <a className="underline hover:text-red-200" href="https:/github.com/mariana4ads">Mariana Rocha</a>.
      Todos os direitos reservados.</div>
    </footer>
  );
}