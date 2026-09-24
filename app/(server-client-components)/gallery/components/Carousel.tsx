'use client';

import { images } from '@/app/data/next-js-concepts';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

export default function Carousel() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div ref={emblaRef} className="overflow-hidden mt-4">
      <div className="flex">
        {images.map((image) => (
          <div key={image} className="min-w-0 flex-[0_0_100%]">
            <Image
              src={image}
              alt="Gallery image"
              width={1280}
              height={720}
              className="h-64 w-full object-cover"
            />{' '}
          </div>
        ))}
      </div>
    </div>
  );
}
