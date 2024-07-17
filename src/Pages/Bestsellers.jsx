import React from 'react'
import styles from './Bestsellers.module.css'
import DOMPurify from 'dompurify'
import { HeartIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { Goods } from '../context/Goods'
import { useContext } from 'react'
import { AppContext } from "./../context/AppContext"
import { useEffect } from 'react'

export function Bestsellers() {

    const [cartModal, setCartModal, cart, setCart, popup, setPopup, favorites, setFavorites] = useContext(AppContext)

    const addToCart = (item) => {
        const exists = cart.find((p) => p.id === item.id)
        if (!exists) {

            const newCart = [
                ...cart,
                {
                    ...item,
                    quantity: 1,
                }
            ]
            item.inCart = !item.inCart
            setCart(newCart)
        }
    }

    const removeFromCart = (item) => {
        const updatedCart = cart.filter(p => p.id !== item.id)
        item.inCart = !item.inCart
        setCart(updatedCart)
    }



    const addToFavorites = (item) => {
        const exists = favorites.find((p) => p.id === item.id)
        if (!exists) {

            const newCart = [
                ...favorites,
                {
                    ...item,
                    quantity: 1,
                }
            ]
            item.isFavorite = !item.isFavorite
            setFavorites(newCart)
        }
    }

    const removeFromFavorites = (item) => {
        const updatedFavorites = favorites.filter(p => p.id !== item.id)
        item.isFavorite = !item.isFavorite
        setFavorites(updatedFavorites)
    }

    const isFavorite = (item) => {
        return favorites.find((p) => p.id === item.id)
    }

    const inCart = (item) => {
        return cart.find((p) => p.id === item.id)
    }


    const bestsellers = Goods

    let res = bestsellers.map((item) => {
        return (
            <div key={item.id} className={styles.card}>

                <div className={styles.photo}>
                    <img src={item.img} alt="Фото категории" />
                </div>

                <div className={styles.title}>
                    <h3 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.title) }}></h3>
                </div>

                <div className={styles.info}>
                    <div className={styles.rating}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" color='#12C043' />
                        </svg>
                        <p>{item.rating}</p>
                    </div>

                    <p className={styles.reviews}>{item.reviews} отзывов</p>
                </div>

                <div className={styles.price}>
                    <h2>{item.price} ₽</h2>
                    <p>{item.oldPrice} ₽</p>
                </div>

                <div className={styles.buttons}>
                    {
                        inCart(item) ?
                            <button onClick={() => removeFromCart(item)} className={styles.selectedButton}>Товар в корзине</button>
                            : <button onClick={() => addToCart(item)}>Добавить в корзину</button>
                    }

                    {
                        isFavorite(item) ?
                            <span onClick={() => removeFromFavorites(item)} >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-9">
                                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" color='#12C043' /></svg>
                            </span>
                            : <HeartIcon className={styles.heart__icon} onClick={() => addToFavorites(item)} />

                    }


                </div>

            </div >
        )
    })

    return (
        <>
            <div className={styles.bestsellers}>
                {res}
            </div>
        </>
    )
}
