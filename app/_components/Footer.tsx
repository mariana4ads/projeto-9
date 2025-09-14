export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-2 mt-10">
      <div className="container mx-auto text-center text-sm">
        © {new Date().getFullYear()} Desenvolvido por <a className="underline hover:text-amber-200" href="https:/github.com/mariana4ads">Mariana Rocha</a>.
      </div>
    </footer>
  );
}