'use client'
import { useState, useEffect } from "react"

export default function TermosDeUso() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    }, [])

    if (loading) {
        return <div>Carregando...</div>
    }

    return (
        <div className="flex flex-col gap-4 p-4 bg-zinc-800 text-zinc-100 rounded-xl pr-6 md:pr-12">
            <h1 className="text-2xl font-bold">Termos de Uso</h1>
            <p>Última atualização: 24/08/2024</p>

            <p>Bem-vindo ao site de votação da Associação ASMUV, desenvolvido pela EasyVote Systems, uma vertente da ConeSul Sistemas. Ao utilizar este site, você concorda em cumprir e estar sujeito aos seguintes Termos de Uso. Por favor, leia-os cuidadosamente.</p>

            <h2 className="text-xl font-bold">1. Aceitação dos Termos</h2>
            <p>Ao acessar ou utilizar o site de votação, você concorda em cumprir os Termos de Uso e todas as leis e regulamentos aplicáveis. Se você não concorda com algum desses termos, não use o site.</p>

            <h2 className="text-xl font-bold">2. Elegibilidade</h2>
            <p>Este site é destinado exclusivamente aos associados da ASMUV que possuem direito a voto nas eleições organizadas pela associação. Você deve garantir que as informações fornecidas para acessar o site sejam precisas e atualizadas.</p>

            <h2 className="text-xl font-bold">3. Uso Permitido</h2>
            <p>Você concorda em utilizar o site de votação apenas para fins legais e de acordo com os Termos de Uso. É proibido utilizar o site de qualquer maneira que possa danificar, desativar, sobrecarregar ou prejudicar o site ou interferir no uso de qualquer outra parte.</p>

            <h2 className="text-xl font-bold">4. Propriedade Intelectual</h2>
            <p>Todo o conteúdo, design, layout, textos, gráficos, logotipos, ícones e imagens disponíveis neste site são propriedade da EasyVote Systems e da ConeSul Sistemas, e estão protegidos pelas leis de direitos autorais e outras leis de propriedade intelectual. É proibida a reprodução, distribuição ou qualquer uso não autorizado deste conteúdo sem o consentimento prévio por escrito.</p>

            <h2 className="text-xl font-bold">5. Privacidade</h2>
            <p>O uso deste site está sujeito à nossa Política de Privacidade, que descreve como coletamos, utilizamos e protegemos as informações pessoais dos usuários. Ao utilizar o site, você concorda com as práticas descritas na Política de Privacidade.</p>

            <h2 className="text-xl font-bold">6. Limitação de Responsabilidade</h2>
            <p>Embora nos esforcemos para garantir a precisão e funcionalidade do site de votação, a EasyVote Systems, a ConeSul Sistemas e a ASMUV não serão responsáveis por quaisquer danos diretos, indiretos, incidentais, consequenciais ou punitivos decorrentes do uso ou da incapacidade de uso do site.</p>

            <h2 className="text-xl font-bold">7. Alterações nos Termos</h2>
            <p>A EasyVote Systems e a ASMUV reservam-se o direito de atualizar ou modificar estes Termos de Uso a qualquer momento, sem aviso prévio. As alterações entrarão em vigor imediatamente após a publicação no site. Recomendamos que você reveja estes Termos de Uso periodicamente para estar ciente de quaisquer alterações.</p>

            <h2 className="text-xl font-bold">8. Rescisão</h2>
            <p>A EasyVote Systems e a ASMUV podem, a seu exclusivo critério, suspender ou encerrar o seu acesso ao site de votação a qualquer momento, sem aviso prévio, caso você viole estes Termos de Uso ou qualquer lei aplicável.</p>

            <h2 className="text-xl font-bold">9. Lei Aplicável</h2>
            <p>Estes Termos de Uso são regidos e interpretados de acordo com as leis do Brasil, sem considerar seus conflitos de disposições legais. Qualquer disputa decorrente do uso do site será resolvida exclusivamente nos tribunais competentes do Brasil.</p>

            <h2 className="text-xl font-bold">10. Contato</h2>
            <p>Se você tiver dúvidas ou preocupações sobre estes Termos de Uso, entre em contato conosco:</p>
            <ul className="list-disc pl-6">
                <li>Associação ASMUV</li>
                <li>E-mail: asmuv_vha@hotmail.com</li>
                <li>Endereço: Av. Tancredo Neves, 3995 - Jardim América, Vilhena - RO, 76980-000</li>
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
