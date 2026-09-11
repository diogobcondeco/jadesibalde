import Link from "next/link";
import Wrapper from "@/components/Wrapper";

export default function NotFound() {
  return (
    <div className="py-16">
      <Wrapper>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-gray-500">Erro 404</p>

          <h1 className="mt-3 text-3xl font-semibold text-gray-900">
            Página não encontrada
          </h1>

          <p className="mt-4 text-gray-600">
            A página que procura não existe ou pode ter sido removida.
          </p>

          <Link
            href="/"
            className="mt-8 inline-block text-sm font-medium text-gray-900 underline underline-offset-4 hover:text-gray-600"
          >
            Voltar à página inicial
          </Link>
        </div>
      </Wrapper>
    </div>
  );
}
