import NossasCampanhas from "@/components/campanha/NossasCampanhas"
import MenuSuperior from "@/components/shared/MenuSuperior"

export default function PaginaCampanha() {
    return (
        <div>
            <MenuSuperior />
            <div className="flex flex-col bg-zinc-900">
                <div
                    className="
                        container flex flex-col lg:flex-row 
                        items-center lg:items-start lg:justify-around 
                        gap-10 lg:gap-0 py-10 
                    "
                >
                    <NossasCampanhas />
                </div>
            </div>
        </div>
    )
}