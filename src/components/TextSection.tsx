interface TextSectionProps {
  id?: string;
  label: string;
  placeholder: string;
  align?: "left" | "right";
  bg?: string;
}

export default function TextSection({
  id,
  label,
  placeholder,
  align = "left",
  bg = "bg-white",
}: TextSectionProps) {
  return (
    <div id={id} className={`min-h-screen flex items-center ${bg} px-6 py-20`}>
      <div className={`max-w-3xl ${align === "right" ? "ml-auto" : "mr-auto"}`}>
        <h3 className="uppercase mb-6 text-sm tracking-[0.3em] text-neutral-400">
          {label}
        </h3>
        <p className="text-2xl lg:text-4xl text-neutral-300 leading-tight italic border-l-2 border-neutral-200 pl-6">
          {placeholder}
        </p>
      </div>
    </div>
  );
}
