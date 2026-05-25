import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";
import TextSection from "@/components/TextSection";
import ParallaxSection from "@/components/ParallaxSection";
import ImageText from "@/components/ImageText";

// Реальные фото Иркутска из Wikimedia Commons (CC лицензии)
const PHOTOS = {
  // Деревянный дом с резными окнами — 2024
  woodenWindows: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Irkutsk%2C_Wooden_house%2C_Wooden_windows%2C_Russia.jpg",
  // Деревянный дом — 2024
  houseCity: "https://upload.wikimedia.org/wikipedia/commons/8/83/House_in_Irkutsk_city1.jpg",
  // Традиционный деревянный дом, 1990
  traditional1990: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Irkutsk%2C_Siberia_1990_Traditional_Wooden_House.jpg",
  // Движение на улицах Иркутска — современный город
  modernTraffic: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Traffic_in_Irkutsk_city.jpg",
  // Микрорайон Ершовский — современная застройка
  modernDistrict: "https://upload.wikimedia.org/wikipedia/commons/5/50/Russia%2C_Irkutsk_-_%D0%9C%D0%B8%D0%BA%D1%80%D0%BE%D1%80%D0%B0%D0%B9%D0%BE%D0%BD_%D0%95%D1%80%D1%88%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_WMID5908378.jpg",
  // Конный остров — природа и город
  island: "https://upload.wikimedia.org/wikipedia/commons/6/65/Russia%2C_Irkutsk_-_%D0%9A%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2_%28%D0%98%D1%80%D0%BA%D1%83%D1%82%D1%81%D0%BA%29_WMID5665858.jpg",
};

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero — традиционный деревянный дом */}
      <Hero image={PHOTOS.houseCity} />

      {/* Вводный текст */}
      <TextSection
        id="intro"
        label="Введение"
        placeholder="(здесь рассказать о том, почему деревянная архитектура Иркутска уникальна и чем отличается от других городов Сибири)"
        bg="bg-[#f5f0e8]"
      />

      {/* История домов — фото + текст */}
      <Featured image={PHOTOS.woodenWindows} />

      {/* Параллакс — цитата о наличниках */}
      <Promo image={PHOTOS.traditional1990} />

      {/* Купеческий быт — фото + текст */}
      <ImageText
        id="life"
        image={PHOTOS.island}
        alt="Иркутск — вид на город"
        label="Купеческий быт · XIX век"
        placeholder="(здесь рассказать о том, как жили купцы в деревянных особняках — убранство, традиции, семейный уклад)"
        imageOrder="left"
        bg="bg-white"
      />

      {/* Текстовый слайд — упадок и угрозы */}
      <TextSection
        id="threat"
        label="Угрозы наследию"
        placeholder="(здесь рассказать об угрозах сохранности деревянных построек: пожары, снос, отсутствие финансирования, равнодушие)"
        align="right"
        bg="bg-neutral-900"
      />

      {/* Параллакс — мастера */}
      <ParallaxSection
        id="craftsmen"
        image={PHOTOS.woodenWindows}
        alt="Резные окна деревянного дома Иркутска"
        label="Мастера и ремёсла"
        placeholder="(здесь рассказать о сибирских плотниках и резчиках — кто они, откуда брали узоры, как передавали мастерство)"
        textPosition="bottom-left"
      />

      {/* Карта объектов — фото + текст */}
      <ImageText
        id="map"
        image={PHOTOS.traditional1990}
        alt="Традиционный деревянный дом Иркутска"
        label="Маршрут · Где смотреть"
        placeholder="(здесь рассказать о маршруте по деревянному Иркутску — ключевые улицы, адреса, что обязательно стоит увидеть)"
        imageOrder="right"
        bg="bg-[#f5f0e8]"
      />

      {/* Современный Иркутск — исчезновение деревянных домов */}
      <ImageText
        id="gallery"
        image={PHOTOS.modernTraffic}
        alt="Современный Иркутск"
        label="Современный Иркутск"
        placeholder="(здесь рассказать о том, что старые деревянные дома постепенно исчезают — их сносят ради новостроек, они горят, ветшают, и город теряет свой исторический облик)"
        imageOrder="left"
        bg="bg-neutral-900"
        dark
      />

      {/* Итоговый текст */}
      <TextSection
        id="epilogue"
        label="Эпилог"
        placeholder="(здесь написать заключение — что будет с деревянным Иркутском, надежда на сохранение, призыв к читателю)"
        bg="bg-white"
      />

      <Footer />
    </main>
  );
};

export default Index;
