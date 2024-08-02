import NossasCampanhas from "@/components/campanha/NossasCampanhas";
import MenuSuperior from "@/components/shared/MenuSuperior";
import { Suspense } from "react";

export default function PaginaCampanha() {
    return (
        <div className="flex flex-col bg-zinc-900">
           <MenuSuperior />
        
            <div
                className="
                    container flex flex-col lg:flex-row 
                    items-center lg:items-start lg:justify-around 
                    gap-10 lg:gap-0 py-10
                "
            >
                <Suspense fallback={<div>Carregando...</div>}>
                    <NossasCampanhas />
                </Suspense>
            </div>
        </div>
    )
}