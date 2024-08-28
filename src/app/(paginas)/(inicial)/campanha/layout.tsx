"use client"
import Pagina from "@/components/shared/Pagina"

export default function Layout(props: any) {
  return <Pagina bgClass="bg-zinc-900">{props.children}</Pagina>
}
