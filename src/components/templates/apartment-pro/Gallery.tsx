'use client';

import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay, Parallax } from 'swiper/modules';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/parallax';

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    src: '/templates/apartment-pro/images/apart-0.png',
    title: 'Apartment View',
    subtitle: '外観・内観',
  },
  {
    src: '/templates/apartment-pro/images/apart-1.png',
    title: 'Interior View 1',
    subtitle: '内観',
  },
  {
    src: '/templates/apartment-pro/images/apart-2.png',
    title: 'Interior View 2',
    subtitle: '内観',
  },
  {
    src: '/templates/apartment-pro/images/apart-3.png',
    title: 'Interior View 3',
    subtitle: '内観',
  },
  {
    src: '/templates/apartment-pro/images/apart-4.png',
    title: 'Interior View 4',
    subtitle: '内観',
  },
  {
    src: '/templates/apartment-pro/images/apart-5.png',
    title: 'Interior View 5',
    subtitle: '内観',
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelector('.gallery-title'),
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );
    }
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 gallery-title">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary text-sm md:text-base font-montserrat tracking-[0.3em] uppercase mb-4 block"
          >
            GALLERY
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold font-serif mb-6"
          >
            ギャラリー
          </motion.h2>
        </div>

        {/* Swiper Gallery */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <Swiper
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay, Parallax]}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            parallax
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop
            className="gallery-swiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="!w-[80%] md:!w-[60%] lg:!w-[50%]">
                <div className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 60vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl font-bold font-montserrat mb-2">{image.title}</h3>
                      <p className="text-secondary text-lg">{image.subtitle}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Custom styles for swiper */}
        <style jsx global>{`
          .gallery-swiper {
            padding: 60px 0 80px;
          }

          .gallery-swiper .swiper-pagination-bullet {
            background: rgba(212, 175, 55, 0.5);
            opacity: 1;
            width: 12px;
            height: 12px;
          }

          .gallery-swiper .swiper-pagination-bullet-active {
            background: #d4af37;
            width: 30px;
            border-radius: 6px;
          }

          .gallery-swiper .swiper-button-next,
          .gallery-swiper .swiper-button-prev {
            color: #d4af37;
            background: rgba(0, 0, 0, 0.5);
            width: 50px;
            height: 50px;
            border-radius: 50%;
            transition: all 0.3s;
          }

          .gallery-swiper .swiper-button-next:hover,
          .gallery-swiper .swiper-button-prev:hover {
            background: rgba(212, 175, 55, 0.8);
            color: #000;
            transform: scale(1.1);
          }

          .gallery-swiper .swiper-button-next::after,
          .gallery-swiper .swiper-button-prev::after {
            font-size: 20px;
          }

          @media (max-width: 768px) {
            .gallery-swiper .swiper-button-next,
            .gallery-swiper .swiper-button-prev {
              width: 40px;
              height: 40px;
            }

            .gallery-swiper .swiper-button-next::after,
            .gallery-swiper .swiper-button-prev::after {
              font-size: 16px;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
