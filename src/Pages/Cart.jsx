import React, { useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import styles from './Cart.module.css'
import { HeartIcon } from '@heroicons/react/24/outline'
import { TrashIcon } from '@heroicons/react/24/outline'
import { GetId } from '../context/Goods'

export function Cart() {

    const [cartModal, setCartModal, cart, setCart, popup, setPopup, favorites, setFavorites] = useContext(AppContext)

    const deleteFromCart = (item) => {
        const updatedCart = cart.filter(p => item.id !== p.id)
        setCart(updatedCart)
    }

    const Inc = (product) => {
        if (product.quantity < 10) {
            const newCart = cart.map(item => {
                if (item.id === product.id) {
                    item.quantity++
                }
                return item
            })
            setCart(newCart)
            console.log(newCart.quantity)
        }
    }

    const Dec = (product) => {
        if (product.quantity > 1) {
            const newCart = cart.map(item => {
                if (item.id === product.id) {
                    item.quantity--
                }
                return item
            })
            setCart(newCart)
            console.log(newCart.quantity)
        }
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

    let res = cart.map((item) => {
        return (
            <div key={item.id} className={styles.item}>
                <input type="checkbox" />

                <div className={styles.photo}>
                    <img src={item.img} alt="Картинка" />
                </div>


                <div className={styles.item__info}>
                    <Link to={`/products/${item.id}`}>
                        <h3 onClick={() => GetId(item)}>{item.title}</h3>
                    </Link>

                    <div className={styles.count}>
                        <button onClick={() => Dec(item)}>–</button>
                        <p>{item.quantity}</p>
                        <button onClick={() => Inc(item)}>+</button>
                    </div>

                    <p>В наличии: <a href="#">12 магазинов</a></p>

                    <div className={styles.price}>
                        <h2>{item.price} ₽</h2>
                        <p>{item.oldPrice} ₽</p>
                    </div>
                </div>

                <div className={styles.icons}>
                    {
                        isFavorite(item) ?
                            <span onClick={() => removeFromFavorites(item)} >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"
                                        color='gray' /></svg>
                            </span>
                            : <HeartIcon className="size-6 text-gray-500 cursor-pointer" onClick={() => addToFavorites(item)} />
                    }

                    <TrashIcon className="size-6 text-gray-500 cursor-pointer" onClick={() => deleteFromCart(item)} />
                </div>
            </div>
        )
    })

    return (
        <>
            <div className='container'>
                <div className={styles.main}>

                    <div className={styles.path}>
                        <Link to={'/'}><p>Главная</p></Link>
                        <span>></span>
                        <h4>Корзина</h4>
                    </div>

                    <h1>Корзина</h1>

                    <div className={styles.info}>

                        <div className={styles.goods}>

                            <div className={styles.deleteSelected}>
                                <div className={styles.input}>
                                    <input type="checkbox" />
                                    <p>Выбрать все</p>
                                </div>
                                <span>Удалить выбранные</span>
                            </div>

                            <div className={styles.products}>
                                {res}
                            </div>


                        </div>

                        <div className={styles.details}>
                            <h3>Детали заказа</h3>
                            <button>Перейти к оформлению</button>
                        </div>

                    </div>

                </div>
            </div>


        </>
    )
}