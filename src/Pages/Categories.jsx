import React from 'react'
import styles from './Categories.module.css'
import DOMPurify from 'dompurify'

export function Categories() {

    const categories = [
        {
            id: 1,
            title: 'Мыши и клавиатуры',
            img: '/images/categories/c1.png'
        },
        {
            id: 2,
            title: 'Аудио-системы',
            img: '/images/categories/c2.png'
        },
        {
            id: 3,
            title: 'USB флешки <br> и жесткие диски',
            img: '/images/categories/c3.png'
        },
        {
            id: 4,
            title: 'Кабели и разветвители',
            img: '/images/categories/c4.png'
        },
        {
            id: 5,
            title: 'Товары для гейминга',
            img: '/images/categories/c5.png'
        },
        {
            id: 6,
            title: 'Электропитание',
            img: '/images/categories/c6.png'
        },
        {
            id: 7,
            title: 'Сумки и рюкзаки <br> для ноутбуков',
            img: '/images/categories/c7.png'
        },
        {
            id: 8,
            title: 'Роутеры и сетевое оборудование',
            img: '/images/categories/c8.png'
        },
        {
            id: 9,
            title: 'Коврики для мыши',
            img: '/images/categories/c9.png'
        },
        {
            id: 10,
            title: 'Компьютерные наушники',
            img: '/images/categories/c10.png'
        },
    ]

    let res = categories.map((item) => {
        return (
            <div key={item.id} className={styles.card}>
                <div className={styles.photo}>
                    <img src={item.img} alt="Фото категории" />
                </div>
                <div className={styles.title}>
                    <h2 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.title) }}></h2>
                </div>
            </div>
        )
    })

    return (
        <>
            <div className={styles.categories}>
                {res}
            </div>
        </>
    )
}
