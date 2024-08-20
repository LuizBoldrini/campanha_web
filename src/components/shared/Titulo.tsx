export interface TituloProps {
    tag?: string
    principal: string
}

export default function Titulo(props: TituloProps) {
    return (
        <div className="flex flex-col items-center gap-2">
            {props.tag && (
                <div className="text-sm md:text-base bg-zinc-700 px-4 py-1.5 rounded-md font-black mb-2">
                    {props.tag}
                </div>
            )}
            <h2 className="text-xl font-bold text-gradient sm:w-100 md:w-70 lg:w-30 break-words text-center">
                {props.principal}
            </h2>
            
        </div>
    )
}
