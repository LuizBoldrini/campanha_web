import MenuSuperior from "@/components/shared/MenuSuperior"
import ComoVotar from "@/components/sobre/ComoVotar"

export default function Home() {
  return (
    <div>
      <MenuSuperior />
      <div className="pt-4">
        <ComoVotar />
      </div>
    </div>
  )
}
