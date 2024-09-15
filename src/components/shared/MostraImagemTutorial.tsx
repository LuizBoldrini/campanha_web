interface ImageWrapperProps {
  src: string
  alt: string
  position?: "esquerda" | "direita"
  children: React.ReactNode
}

export default function ImageWrapper({
  src,
  alt,
  position = "direita",
  children,
}: ImageWrapperProps) {
  return (
    <div
      className={`flex flex-col md:flex-row md:items-center gap-6 ${position === "esquerda" ? "md:flex-row-reverse" : ""}`}
    >
      <div className="md:w-2/3">{children}</div>
      <div className="md:w-1/3 flex justify-center">
        <div
          className="relative p-4 bg-black rounded-3xl shadow-lg border border-zinc-800"
          style={{
            width: 240,
            height: 450,
          }}
        >
          <img
            src={src}
            alt={alt}
            className="rounded-xl object-contain w-full h-full"
          />

          <div className="absolute top-1/2 left-0 w-1 h-12 bg-gray-700 rounded-r-lg"></div>
          <div className="absolute top-1/2 right-0 w-1 h-12 bg-gray-700 rounded-l-lg"></div>

          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-10 h-2 bg-gray-700 rounded-full"></div>
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gray-900 rounded-full border-4 border-gray-700 shadow-inner"></div>
        </div>
      </div>
    </div>
  )
}
