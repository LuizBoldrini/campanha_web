import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandWhatsapp,
    IconBrandYoutube,
} from '@tabler/icons-react'
import Link from 'next/link'

export default function Rodape() {
    return (
        <footer className="flex items-center bg-black ">
            <div className="container flex flex-col gap-2 py-2">
                <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-5">
                    <div className="flex flex-col gap-1 items-center md:items-start">
                        <span className="text-2xl text-zinc-300 font-bold mb-2.5">Sobre</span>
                        <span className="text-sm text-zinc-400">Nossa História</span>
                        <span className="text-sm text-zinc-400"><Link href="/politicaPrivacidade">Política de Privacidade</Link></span>
                        <span className="text-sm text-zinc-400"><Link href="/termoDeUso">Termos de Uso</Link></span>
                    </div>
                    <div className="flex flex-col gap-1 items-center md:items-start">
                        <span className="text-2xl text-zinc-300 font-bold mb-2.5">Contato</span>
                        <span className="text-sm text-zinc-400">asmuv_vha@hotmail.com</span>
                        <div className="flex items-center gap-2 text-sm text-zinc-400">
                            <IconBrandWhatsapp size={20} className="text-green-500" />
                            <span>69 3322-2335</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                    <div className="flex gap-2 text-zinc-400">
                        <Link href="https://www.instagram.com/asmuvvha?igsh=Z282ZGRodnB1MG1h" target='_blank'>
                            <IconBrandInstagram size={28} stroke={1} />
                        </Link>
                        <Link href="https://www.facebook.com/profile.php?id=100063554530983&locale=pt_BR" target='_blank'>
                            <IconBrandFacebook size={28} stroke={1} />
                        </Link>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-1.5 text-zinc-400 text-sm">
                        <div className="flex gap-1.5">
                            <span>Desenvolvido por </span>
                            <span><strong>EasyVote Systems</strong></span>
                        </div>
                        <span className="hidden md:inline-block">-</span>
                        <span>Todos os direitos reservados</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
