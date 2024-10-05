import { BrainIcon, CheckIcon, CodeIcon, HandshakeIcon, PencilIcon, RocketIcon, SearchIcon } from "lucide-react";

import { Text } from "@/components/common/text";
import { Title } from "@/components/common/title";
import { Timeline } from "@/components/Timeline/timeline";
import { type TimelineBoxProps } from "@/components/Timeline/timeline-box";

const data: TimelineBoxProps[] = [
  {
    title: "Wstępne warunki i zakres pracy",
    content: (
      <div className={"flex flex-col gap-4"}>
        <Text size={'lg'}>
          Na początku ustalamy satysfakcjonujące nas warunki współpracy, takie jak czas realizacji, budżet i oczekiwania.
          Podpisujemy umowy, które jasno określają zakres projektu, aby zapewnić przejrzystość na każdym etapie.
        </Text>
      </div>
    ),
    icon: <HandshakeIcon />
  },
  {
    title: "Ustalenia dotyczące wyglądu i funkcjonalności",
    content: (
      <div className={"flex flex-col gap-4"}>
        <Text size={'lg'}>
          Omawiamy przeznaczenie projektu, jego główne cele oraz wygląd. Możesz przesłać przykłady innych projektów, które
          Ci się podobają, co pomoże lepiej zrozumieć Twoje oczekiwania. Im więcej szczegółów dostarczysz, tym lepiej!
        </Text>
        <Text size={'lg'}>
          To również moment, w którym ustalamy główne funkcjonalności i wymagania techniczne, aby wszystko działało tak, jak sobie życzysz.
        </Text>
      </div>
    ),
    icon: <BrainIcon />
  },
  {
    title: "Szukanie inspiracji i badania",
    content: (
      <div className={"flex flex-col gap-4"}>
        <Text size={'lg'}>
          Zbieramy kluczowe dane i pomysły, aby projekt był unikalny i dopasowany do Twojej marki. Analizujemy konkurencję, szukamy
          inspiracji w najnowszych trendach oraz technologiach, które można zaimplementować.
        </Text>
        <Text size={'lg'}>
          Tworzę moodboardy, które pomogą zwizualizować kierunek estetyczny, zanim przejdziemy do projektowania mockupu.
        </Text>
      </div>
    ),
    icon: <SearchIcon />
  },
  {
    title: "Akceptacja mockupu",
    content: (
      <div className={"flex flex-col gap-4"}>
        <Text size={'lg'}>
          Przesyłam Ci wstępny szkielet wizualny projektu (mockup), który przedstawia układ i wygląd strony/aplikacji.
          Na tym etapie możesz wprowadzić swoje uwagi, a ja wprowadzam potrzebne poprawki.
        </Text>
        <Text size={'lg'}>
          Gdy mockup jest zatwierdzony, ruszamy z właściwym kodowaniem i implementacją!
        </Text>
      </div>
    ),
    icon: <PencilIcon />
  },
  {
    title: "Projekt w budowie",
    content: (
      <div className={"flex flex-col gap-4"}>
        <Text size={'lg'}>
          Rozpoczynamy prace nad budową strony lub aplikacji. Każdy etap jest starannie przemyślany, aby spełniał Twoje wymagania
          pod względem funkcjonalności, wydajności oraz estetyki.
        </Text>
        <Text size={'lg'}>
          Możesz śledzić postępy na bieżąco, a ja regularnie informuję o postępach, abyś miał pełną kontrolę nad projektem.
        </Text>
      </div>
    ),
    icon: <CodeIcon />
  },
  {
    title: "Testowanie i optymalizacja",
    content: (
      <div className={"flex flex-col gap-4"}>
        <Text size={'lg'}>
          Przed finalnym oddaniem projektu przeprowadzamy testy funkcjonalności, responsywności i wydajności.
          Wprowadzamy niezbędne poprawki, aby upewnić się, że wszystko działa idealnie na różnych urządzeniach i przeglądarkach.
        </Text>
        <Text size={'lg'}>
          Dodatkowo optymalizujemy stronę pod kątem SEO, aby była lepiej widoczna w wyszukiwarkach.
        </Text>
      </div>
    ),
    icon: <CheckIcon />
  },
  {
    title: "Finalna wersja i wdrożenie",
    content: (
      <div className={"flex flex-col gap-4"}>
        <Text size={'lg'}>
          Po zakończeniu testów i optymalizacji, przekazujemy gotowy produkt. Jeśli wszystko jest zgodne z oczekiwaniami,
          publikujemy stronę/aplikację i uruchamiamy ją w produkcyjnym środowisku.
        </Text>
        <Text size={'lg'}>
          Oferujemy również wsparcie po wdrożeniu, abyś zawsze mógł liczyć na pomoc w przypadku jakichkolwiek pytań lub potrzebnych aktualizacji.
        </Text>
      </div>
    ),
    icon: <RocketIcon />
  }
];

export const WorkProcessSection = () => {
  return (
    <section className={"container min-h-screen bg-background py-20"}>
      <Title type={"h2"}>Nasz proces tworzenia</Title>
      <Timeline data={data} />
    </section>
  );
};
