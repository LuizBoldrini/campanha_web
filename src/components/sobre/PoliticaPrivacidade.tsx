"use client"
import { useState, useEffect } from "react"

export default function PoliticaPrivacidade() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) {
    return <div>Carregando...</div>
  }

  return (
    <div className="flex flex-col gap-4 p-4 bg-zinc-800 text-zinc-100 rounded-xl pr-6 md:pr-12">
      <h1 className="text-2xl font-bold">Política de Privacidade</h1>
      <p>Última atualização: 24/08/2024</p>

      <p>
        A Associação ASMUV, em parceria com a EasyVote Systems, uma vertente da
        ConeSul Sistemas, valoriza a privacidade dos seus associados e está
        comprometida em proteger as informações pessoais que coletamos e
        utilizamos durante os processos de votação online. Esta Política de
        Privacidade descreve como coletamos, utilizamos, armazenamos e
        protegemos as informações pessoais dos usuários do nosso site de
        votação.
      </p>

      <h2 className="text-xl font-bold">1. Informações que Coletamos</h2>
      <p>
        Durante o processo de votação, podemos coletar as seguintes informações
        pessoais dos associados:
      </p>
      <ul className="list-disc pl-6">
        <li>Nome completo</li>
        <li>CPF</li>
        <li>Data de nascimento</li>
        <li>Endereço de e-mail</li>
        <li>Número de matrícula</li>
        <li>Dados de votação (opções escolhidas, data e hora do voto)</li>
        <li>
          Endereço IP e informações sobre o dispositivo utilizado para acessar o
          site
        </li>
      </ul>

      <h2 className="text-xl font-bold">2. Uso das Informações</h2>
      <p>As informações coletadas são utilizadas para:</p>
      <ul className="list-disc pl-6">
        <li>
          Verificar a identidade dos associados e garantir a integridade do
          processo de votação
        </li>
        <li>
          Facilitar a comunicação relacionada à votação, como confirmações de
          participação
        </li>
        <li>Contabilizar os votos de forma segura e confidencial</li>
        <li>Melhorar nossos serviços e a experiência do usuário</li>
        <li>Cumprir obrigações legais e regulamentares</li>
      </ul>

      <h2 className="text-xl font-bold">3. Compartilhamento de Informações</h2>
      <p>
        A EasyVote Systems e a Associação ASMUV não compartilham as informações
        pessoais dos associados com terceiros, exceto nas seguintes situações:
      </p>
      <ul className="list-disc pl-6">
        <li>
          Com fornecedores de serviços que auxiliam na operação e segurança do
          site de votação, sob acordos que garantam a proteção dos dados
        </li>
        <li>
          Quando exigido por lei, ordem judicial ou outras autoridades
          competentes
        </li>
        <li>Com o consentimento expresso do associado</li>
      </ul>

      <h2 className="text-xl font-bold">4. Segurança dos Dados</h2>
      <p>
        Implementamos medidas técnicas e organizacionais para proteger as
        informações pessoais contra acesso não autorizado, perda, destruição ou
        alteração. Isso inclui o uso de criptografia, controle de acesso e
        monitoramento contínuo de nossos sistemas.
      </p>

      <h2 className="text-xl font-bold">5. Retenção de Dados</h2>
      <p>
        As informações pessoais coletadas durante as votações serão mantidas
        apenas pelo tempo necessário para cumprir os propósitos descritos nesta
        Política de Privacidade, a menos que um período de retenção maior seja
        exigido ou permitido por lei.
      </p>

      <h2 className="text-xl font-bold">6. Direitos dos Associados</h2>
      <p>Os associados têm o direito de:</p>
      <ul className="list-disc pl-6">
        <li>Acessar suas informações pessoais mantidas por nós</li>
        <li>
          Corrigir quaisquer informações pessoais incorretas ou desatualizadas
        </li>
        <li>
          Solicitar a exclusão de suas informações pessoais, sujeito às nossas
          obrigações legais
        </li>
        <li>
          Retirar o consentimento para o uso de suas informações pessoais,
          quando aplicável
        </li>
      </ul>

      <h2 className="text-xl font-bold">
        7. Alterações nesta Política de Privacidade
      </h2>
      <p>
        Esta Política de Privacidade pode ser atualizada periodicamente para
        refletir mudanças em nossas práticas ou em requisitos legais.
        Notificaremos os associados sobre mudanças significativas através do
        nosso site de votação ou outros meios de comunicação adequados.
      </p>

      <h2 className="text-xl font-bold">8. Contato</h2>
      <p>
        Se você tiver dúvidas, preocupações ou solicitações relacionadas a esta
        Política de Privacidade ou ao tratamento de suas informações pessoais,
        entre em contato conosco:
      </p>
      <ul className="list-disc pl-6">
        <li>Associação ASMUV</li>
        <li>E-mail: asmuv_vha@hotmail.com</li>
        <li>
          Endereço: Av. Tancredo Neves, 3995 - Jardim América, Vilhena - RO,
          76980-000
        </li>
        <li>Telefone: 69 3322-2335</li>
      </ul>
      <ul className="list-disc pl-6 mt-4">
        <li>EasyVote Systems - ConeSul Sistemas</li>
        <li>E-mail: suporte@conesulsistemas.com.br</li>
        <li>Endereço: R. 8207, Vilhena - RO, 76980-000</li>
        <li>Telefone: 69 9341-4639</li>
      </ul>
    </div>
  )
}
