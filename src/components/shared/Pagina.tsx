import Rodape from "./Rodape"

export interface PaginaProps {
  children: React.ReactNode
  bgClass?: string
}
export default function Pagina({
  children,
  bgClass = "bg-zinc-900",
}: PaginaProps) {
  return (
    <div className={`flex flex-col min-h-screen w-screen ${bgClass}`}>
      <main className="flex-grow">{children}</main>
      <Rodape />
    </div>
  )
}
