"use client";
import {useEffect, useMemo, useState} from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function Gallery({images}: Readonly<{ images: string[] }>) {
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [thumbnailApi, setThumbnailApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const mainImage = useMemo(
    () =>
      images.map((image, index) => (
        <CarouselItem key={index} className="relative aspect-square w-full">
          <Image
            src={image}
            alt={`Carousel Main Image ${index + 1}`}
            fill
            style={{objectFit: "cover"}}
          />
        </CarouselItem>
      )),
    [images],
  );

  const thumbnailImages = useMemo(
    () =>
      images.map((image, index) => (
        <CarouselItem
          key={index}
          className="relative aspect-square w-full basis-1/4"
          onClick={() => handleClick(index)}
        >
          <Image
            className={`${index === current ? "border-2" : ""}`}
            src={image}
            fill
            alt={`Carousel Thumbnail Image ${index + 1}`}
            style={{objectFit: "cover"}}
          />
        </CarouselItem>
      )),
    [images, current],
  );

  useEffect(() => {
    if (!mainApi || !thumbnailApi) {
      return;
    }

    const handleTopSelect = () => {
      const selected = mainApi.selectedScrollSnap();
      setCurrent(selected);
      thumbnailApi.scrollTo(selected);
    };

    const handleBottomSelect = () => {
      const selected = thumbnailApi.selectedScrollSnap();
      setCurrent(selected);
      mainApi.scrollTo(selected);
    };

    mainApi.on("select", handleTopSelect);
    thumbnailApi.on("select", handleBottomSelect);

    return () => {
      mainApi.off("select", handleTopSelect);
      thumbnailApi.off("select", handleBottomSelect);
    };
  }, [mainApi, thumbnailApi]);

  const handleClick = (index: number) => {
    if (!mainApi || !thumbnailApi) {
      return;
    }
    thumbnailApi.scrollTo(index);
    mainApi.scrollTo(index);
    setCurrent(index);
  };

  return (
    <div className="min-w-96">
      <Carousel setApi={setMainApi}>
        <CarouselContent className="m-1">{mainImage}</CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
      <Carousel setApi={setThumbnailApi}>
        <CarouselContent className="m-1">{thumbnailImages}</CarouselContent>
      </Carousel>
    </div>
  );
}
