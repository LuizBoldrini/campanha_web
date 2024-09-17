"use client"
import { useState, useEffect } from "react"
import MostraImagemTutorial from "../shared/MostraImagemTutorial"

export default function ComoVotar() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) {
    return <div>Carregando...</div>
  }

  return (
    <div className="flex flex-col gap-4 p-4 px-10 bg-zinc-800 text-zinc-100 rounded-xl pr-6 md:pr-12">
      <h1 className="text-2xl font-bold">Tutorial de Votação</h1>

      <MostraImagemTutorial src="/images/paginaIncial.png" alt="Página inicial">
        <h2 className="text-xl font-bold">1. Página Inicial</h2>
        <span>
          Clique em <strong>Votar Agora</strong> para visualizar a lista de
          campanhas disponíveis.
        </span>
      </MostraImagemTutorial>

      <MostraImagemTutorial
        src="/images/paginaCampanha.png"
        alt="Página de campanhas"
        position="esquerda"
      >
        <h2 className="text-xl font-bold">2. Campanhas</h2>
        <span>
          Nessa página, serão exibidas as campanhas eleitorais disponíveis.
          Clique na campanha na qual deseja votar.
        </span>
      </MostraImagemTutorial>

      <MostraImagemTutorial src="/images/paginaLogin.png" alt="Página de login">
        <h2 className="text-xl font-bold">3. Login</h2>
        <span>
          Insira seu <strong>CPF</strong> (apenas os números). Se os dados forem
          válidos, você receberá um código de 4 dígitos no WhatsApp.
        </span>
      </MostraImagemTutorial>

      <MostraImagemTutorial
        src="/images/verificaCod.png"
        alt="Página de login"
        position="esquerda"
      >
        <h2 className="text-xl font-bold">4. Login</h2>
        <span>
          Insira o <strong>código</strong> de 4 dígitos que foi enviado no
          WhatsApp.
        </span>
      </MostraImagemTutorial>

      <MostraImagemTutorial
        src="/images/selecionaCandidato.png"
        alt="Página de seleção de candidatos"
      >
        <h2 className="text-xl font-bold">5. Escolha de Chapas</h2>
        <span>
          Depois de confirmar a identidade, você verá uma lista de chapas e
          candidatos. Escolha o candidato desejado ou opte por
          <strong> voto em branco</strong> ou <strong>voto nulo</strong>. Após
          escolher, clique no botão
          <strong> Confirmar Seleção</strong>.
        </span>
      </MostraImagemTutorial>

      <MostraImagemTutorial
        src="/images/comprovante.png"
        alt="Página do comprovante do voto"
        position="esquerda"
      >
        <h2 className="text-xl font-bold">5. Comprovante de Voto</h2>
        <span>
          Após confirmar o voto, será exibido um{" "}
          <strong>comprovante de votação</strong> com as informações:
        </span>
        <ul className="list-disc pl-6">
          <li>Nome e matrícula</li>
          <li>Data e hora do voto</li>
          <li>Código de autenticação</li>
        </ul>
        <p>
          Você pode baixar o comprovante em PDF clicando no botão{" "}
          <strong>Baixar Comprovante</strong> ou voltar à página de campanhas.
        </p>
      </MostraImagemTutorial>
    </div>
  )
}
