interface ImageTextProps {
  id?: string;
  image: string;
  alt: string;
  label: string;
  placeholder: string;
  imageOrder?: "left" | "right";
  bg?: string;
  dark?: boolean;
}

export default function ImageText({
  id,
  image,
  alt,
  label,
  placeholder,
  imageOrder = "right",
  bg = "bg-neutral-100",
  dark = false,
}: ImageTextProps) {
  return (
    <div
      id={id}
      className={`flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 ${bg}`}
    >
      <div
        className={`flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 ${
          imageOrder === "right" ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <img src={image} alt={alt} className="w-full h-full object-cover" />
      </div>
      <div
        className={`flex-1 text-left lg:h-[800px] flex flex-col justify-center ${
          imageOrder === "right" ? "lg:mr-12 lg:order-1" : "lg:ml-12 lg:order-2"
        }`}
      >
        <h3 className={`uppercase mb-4 text-sm tracking-wide ${dark ? "text-neutral-400" : "text-neutral-500"}`}>{label}</h3>
        <p className={`text-2xl lg:text-4xl leading-tight mb-6 ${dark ? "text-neutral-100" : "text-neutral-900"}`}>
          {placeholder}
        </p>
      </div>
    </div>
  );
}