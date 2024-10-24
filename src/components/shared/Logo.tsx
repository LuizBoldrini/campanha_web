import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center h-14">
      <Image
        src="/Logo.png"
        alt="Logo"
        width={65}
        height={65}
        className="hidden sm:block rounded-md"
      />
      <Image
        src="/Logo.png"
        alt="Logo"
        width={50}
        height={50}
        className="block sm:hidden"
      />
      <div className="flex flex-col justify-center h-full p-1">
        <span className="text-xl sm:text-2l font-extralight leading-4 tracking-widest">
          EasyVote
        </span>
        <span className="text-[14px] sm:text-[18px] font-bold leading-4 px-12">
          Systems
        </span>
      </div>
    </Link>
  )
}
