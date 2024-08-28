import Rodape from "./Rodape"

export interface PaginaProps {
  children: React.ReactNode
  bgClass?: string
  mostraRodape?: boolean
}

export default function Pagina({
  children,
  bgClass = "bg-zinc-900",
  mostraRodape = true,
}: PaginaProps) {
  return (
    <div className={`flex flex-col min-h-screen ${bgClass}`}>
      <main className="flex-grow">{children}</main>
      {mostraRodape && <Rodape />}
    </div>
  )
}
