import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";
import TextSection from "@/components/TextSection";
import ParallaxSection from "@/components/ParallaxSection";
import ImageText from "@/components/ImageText";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />

      <Hero />

      {/* Вводный текст */}
      <TextSection
        id="intro"
        label="Введение"
        placeholder="(здесь рассказать о том, почему деревянная архитектура Иркутска уникальна и чем отличается от других городов Сибири)"
        bg="bg-[#f5f0e8]"
      />

      {/* История домов — фото + текст */}
      <Featured />

      {/* Параллакс — цитата о наличниках */}
      <Promo />

      {/* Купеческий быт — фото интерьера + текст */}
      <ImageText
        id="life"
        image="https://cdn.poehali.dev/projects/8f8ab115-1b87-4327-a5aa-696376443c91/files/d259e9bb-ec01-4282-a18c-c0aa5d7c5985.jpg"
        alt="Интерьер купеческого дома"
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
        image="https://cdn.poehali.dev/projects/8f8ab115-1b87-4327-a5aa-696376443c91/files/4afcbb21-92a5-40f6-9f5d-02d5aac26267.jpg"
        alt="Мастер резчик по дереву"
        label="Мастера и ремёсла"
        placeholder="(здесь рассказать о сибирских плотниках и резчиках — кто они, откуда брали узоры, как передавали мастерство)"
        textPosition="bottom-left"
      />

      {/* Карта объектов — фото + текст */}
      <ImageText
        id="map"
        image="https://cdn.poehali.dev/projects/8f8ab115-1b87-4327-a5aa-696376443c91/files/a3eff44b-ff3a-4aa2-ab42-e03182165a2b.jpg"
        alt="Карта исторических объектов Иркутска"
        label="Маршрут · Где смотреть"
        placeholder="(здесь рассказать о маршруте по деревянному Иркутску — ключевые улицы, адреса, что обязательно стоит увидеть)"
        imageOrder="right"
        bg="bg-[#f5f0e8]"
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
