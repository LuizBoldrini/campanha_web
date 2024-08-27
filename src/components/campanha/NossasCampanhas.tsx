"use client"
import Titulo from "../shared/Titulo"
import CampanhaItem from "./CampanhaItem"

export default function NossasCampanhas() {
  return (
    <div className="flex flex-col gap-5">
      <Titulo
        tag="Campanhas disponíveis"
        principal="Selecione uma campanha para votar"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-2">
        <CampanhaItem />
      </div>
    </div>
  )
}
