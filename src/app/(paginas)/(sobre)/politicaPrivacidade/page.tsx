import MenuSuperior from "@/components/shared/MenuSuperior"
import PoliticaPrivacidade from "@/components/sobre/PoliticaPrivacidade"

export default function Home() {
  return (
    <div>
      <MenuSuperior />
      <div className="pt-4">
        <PoliticaPrivacidade />
      </div>
    </div>
  )
}
