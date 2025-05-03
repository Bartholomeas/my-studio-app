'use client';

import { useState } from "react";

import { Button } from "@/features/common/components/ui/button";
import { Card } from "@/features/common/components/ui/card";
import { Input } from "@/features/common/components/ui/input";

import { Text } from "@/features/common/components/text";
import { Title } from "@/features/common/components/title";

const SAMPLE_CATEGORIES = [
  "STARTUP",
  "PRODUCT DISCOVERY",
  "DESIGN",
  "UX",
  "DEVELOPMENT",
  "REACT",
  "MOBILE"
];

const SORT_OPTIONS = [
  { value: "newest", label: "Najnowsze" },
  { value: "oldest", label: "Najstarsze" },
  { value: "a-z", label: "A-Z" },
  { value: "z-a", label: "Z-A" }
];

export interface BlogFiltersProps {
  className?: string;
}

export const BlogFilters = ({ className }: BlogFiltersProps) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSortOption, setActiveSortOption] = useState<string>("newest");

  return (
    <div className={className}>
      <Card
        variant={"default"}
        padding={"lg"}
        className={"bg-background/90 sticky top-24 flex flex-col gap-6 rounded-lg backdrop-blur-sm"}
      >
        <Title type={"h3"} size={"h4"}>Filtry</Title>

        <div className={"flex flex-col gap-2"}>
          <Text size={"sm"} weight={"medium"}>Szukaj</Text>
          <Input
            type={"text"}
            placeholder={"Szukaj artykułów..."}
          />
        </div>

        <div className={"flex flex-col gap-3"}>
          <Text size={"sm"} weight={"medium"}>Kategorie</Text>
          <div className={"flex flex-wrap gap-2"}>
            <Button
              size={"sm"}
              variant={activeCategory === null ? "primary" : "outline"}
              className={"rounded-full text-xs"}
              onClick={() => setActiveCategory(null)}
            >
              All
            </Button>
            {SAMPLE_CATEGORIES.map(category => (
              <Button
                key={category}
                size={"sm"}
                variant={activeCategory === category ? "primary" : "outline"}
                className={"rounded-full text-xs"}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Sort */}
        <div className={"flex flex-col gap-3"}>
          <Text size={"sm"} weight={"medium"}>Sortuj po</Text>
          <div className={"grid grid-cols-2 gap-2"}>
            {SORT_OPTIONS.map((option) => (
              <Button
                key={option.value}
                size={"sm"}
                variant={activeSortOption === option.value ? "primary" : "outline"}
                className={"rounded-full text-xs"}
                onClick={() => setActiveSortOption(option.value)}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>

        <Button
          variant={"ghost"}
          size={"sm"}
          className={"mt-2 self-start"}
          onClick={() => {
            setActiveCategory(null);
            setActiveSortOption("newest");
          }}
        >
          Resetuj filtry
        </Button>
      </Card>
    </div>
  );
};