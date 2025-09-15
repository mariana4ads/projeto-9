export default function Footer() {
  return (
    <footer className="flex bg-foreground text-background h-8 mt-10 items-center">
      <div className="container mx-auto text-center text-sm items-center">
        © {new Date().getFullYear()} Desenvolvido por <a className="underline hover:text-amber-200" href="https:/github.com/mariana4ads">Mariana Rocha</a>.
      </div>
    </footer>
  );
}