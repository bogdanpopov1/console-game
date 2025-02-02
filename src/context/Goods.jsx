export const Goods = [
    {
        id: 1,
        img: '/images/goods/g1.png',
        title: 'Клавиатура проводная Aceline K-902BU',
        rating: '5.0',
        reviews: 12,
        price: 450,
        oldPrice: 699,
        isFavorite: false,
        inCart: false,
        quantity: 1,
    },
    {
        id: 2,
        img: '/images/goods/g2.png',
        title: 'Мышь проводная Aceline AGS-C04 черный',
        rating: '4.9',
        reviews: 52,
        price: 250,
        oldPrice: 449,
        isFavorite: false,
        inCart: false,
        quantity: 1,
    },
    {
        id: 3,
        img: '/images/goods/g3.png',
        title: 'Беспроводные наушники Logitech G435 белый',
        rating: '4.9',
        reviews: 100,
        price: 7999,
        oldPrice: 10699,
        isFavorite: false,
        inCart: false,
        quantity: 1,
    },
    {
        id: 4,
        img: '/images/goods/g4.png',
        title: '1 ТБ Внешний HDD Silicon Power Diamond D06',
        rating: '5.0',
        reviews: 14,
        price: 5399,
        oldPrice: 6699,
        isFavorite: false,
        inCart: false,
        quantity: 1,
    },
    {
        id: 5,
        img: '/images/goods/g5.png',
        title: '14" Сумка DEXP Oxf-WAS-20',
        rating: '4.9',
        reviews: 21,
        price: 999,
        oldPrice: 1299,
        isFavorite: false,
        inCart: false,
        quantity: 1,
    },
]

export let id = 1;

export const GetId = (item) => {
    id = item.id
}
