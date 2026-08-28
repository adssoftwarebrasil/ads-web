export default function Footer() {
  return (
    <footer className="bg-foreground py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-background/50">
          © {new Date().getFullYear()} AM Clínica de Medicina do Trabalho. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
