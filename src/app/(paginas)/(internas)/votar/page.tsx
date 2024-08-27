import NossasChapas from "@/components/votar/NossasChapas"

export default function Votar() {
  return (
    <div className="flex flex-col bg-zinc-900">
      <div
        className="
                container flex flex-col lg:flex-row 
                items-center lg:items-start lg:justify-around 
                gap-10 lg:gap-0 py-10
            "
      >
        <NossasChapas />
      </div>
    </div>
  )
}
