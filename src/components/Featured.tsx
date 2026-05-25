interface FeaturedProps {
  image?: string;
}

export default function Featured({ image }: FeaturedProps) {
  return (
    <div id="history" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-[#f5f0e8]">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src={image ?? "https://upload.wikimedia.org/wikipedia/commons/2/2d/Irkutsk%2C_Wooden_house%2C_Wooden_windows%2C_Russia.jpg"}
          alt="Деревянные дома Иркутска"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-500">Сибирское зодчество · XVIII–XIX век</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          В Иркутске сохранилось более 1500 памятников деревянного зодчества. Резные наличники, ажурные карнизы и массивные ворота — каждый элемент рассказывает о мастерах, живших здесь столетия назад.
        </p>
        <p className="text-base text-neutral-600 mb-8 leading-relaxed max-w-lg">
          Деревянный Иркутск — не просто архитектура. Это живая память о купеческих династиях, ссыльных декабристах и сибирских ремесленниках, которые превратили далёкий острог в культурную столицу за Уралом.
        </p>
        <button className="bg-neutral-900 text-white border border-neutral-900 px-6 py-3 text-sm transition-all duration-300 hover:bg-transparent hover:text-neutral-900 cursor-pointer w-fit uppercase tracking-wide">
          Читать далее
        </button>
      </div>
    </div>
  );
}