import Rodape from './Rodape'

export interface PaginaProps {
    children: React.ReactNode
}
export default function Pagina(props: PaginaProps) {
    return (
        <div className="flex flex-col min-h-screen w-screen bg-zinc-900">
            <main className='flex-grow'>{props.children}</main>
            <Rodape />
        </div>
    )
}
