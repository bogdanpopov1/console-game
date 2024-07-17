import styles from "./Home.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, EffectCube, FreeMode, Navigation, Pagination, Scrollbar } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import { Categories } from "./Categories";
import { Bestsellers } from "./Bestsellers";

export function Home() {
    const slides = [
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
    ]
    return (
        <>
            <div className={styles.home}>
                <Swiper
                    loop={true}
                    className={styles.slider}
                    modules={[Navigation, Pagination, A11y, FreeMode]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    freeMode={true}
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        slides.map((slide, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className={styles.banner}>
                                        <h3>{slide.name}</h3>
                                        <img src="/images/home/slide.png" alt="Акция" />
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>

                <div>
                    <h1>Категории</h1>
                    <div>
                        <Categories />
                    </div>
                </div>

                <div>
                    <h1>Хиты продаж</h1>
                    <div>
                        <Bestsellers />
                    </div>
                </div>

            </div>
        </>
    )
}