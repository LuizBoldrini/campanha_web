import MenuSuperior from "@/components/shared/MenuSuperior"
import TermosDeUso from "@/components/sobre/TermoDeUso"

export default function Home() {
  return (
    <div>
      <MenuSuperior />
      <div className="pt-4">
        <TermosDeUso />
      </div>
    </div>
  );
}
