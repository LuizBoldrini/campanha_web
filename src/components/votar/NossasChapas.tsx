"use client"
import Titulo from "../shared/Titulo"
import ChapaItem from "./ChapaItems"

export default function NossasChapas() {
  return (
    <div className="flex flex-col gap-5 mx-4 lg:mx-20 xl:mx-30">
      <Titulo
        tag="Candidatos disponíveis"
        principal="Selecione o seu candidato de preferência"
      />
      <div className="flex flex-col w-full bg-zinc-800 rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-4 px-4 lg:px-8">
          <ChapaItem />
        </div>
      </div>
    </div>
  )
}
