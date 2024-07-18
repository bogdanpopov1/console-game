import { Link } from "react-router-dom";
import styles from "./Header.module.css"
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export function HeaderComponent() {
    const [cartModal, setCartModal] = useContext(AppContext)
    return (
        <>
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.row}>
                        <div className={styles.location}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <p>Казань</p>
                        </div>

                        <ul className={styles.menu}>
                            <li><Link to={'/'}>Акции</Link></li>
                            <li><Link to={'/'}>Магазины</Link></li>
                            <li><Link to={'/'}>Доставка</Link></li>
                            <li><Link to={'/'}>Бонусная программа</Link></li>
                        </ul>

                        <div className={styles.phone}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            <p>8-800-700-10-01</p>
                        </div>
                    </div>

                    <div className={styles.info}>
                        <div className={styles.logo}>
                            <Link to={'/'}><img src="/images/logo/logo.png" alt="Logo" /></Link>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                    <path d="M4.21814 11.8125C3.99436 11.8125 3.77975 11.7236 3.62152 11.5654C3.46328 11.4071 3.37439 11.1925 3.37439 10.9687V4.22044C3.37439 3.99666 3.46328 3.78205 3.62152 3.62381C3.77975 3.46558 3.99436 3.37669 4.21814 3.37669H10.9681C11.1919 3.37669 11.4065 3.46558 11.5648 3.62381C11.723 3.78205 11.8119 3.99666 11.8119 4.22044V10.9687C11.8119 11.1925 11.723 11.4071 11.5648 11.5654C11.4065 11.7236 11.1919 11.8125 10.9681 11.8125H4.21814ZM16.0306 11.8125C15.8069 11.8125 15.5923 11.7236 15.434 11.5654C15.2758 11.4071 15.1869 11.1925 15.1869 10.9687V4.22044C15.1869 3.99666 15.2758 3.78205 15.434 3.62381C15.5923 3.46558 15.8069 3.37669 16.0306 3.37669H22.779C23.0027 3.37669 23.2173 3.46558 23.3756 3.62381C23.5338 3.78205 23.6227 3.99666 23.6227 4.22044V10.9687C23.6227 11.1925 23.5338 11.4071 23.3756 11.5654C23.2173 11.7236 23.0027 11.8125 22.779 11.8125H16.0306ZM4.21814 23.625C3.99436 23.625 3.77975 23.5361 3.62152 23.3779C3.46328 23.2196 3.37439 23.005 3.37439 22.7812V16.0312C3.37439 15.8075 3.46328 15.5929 3.62152 15.4346C3.77975 15.2764 3.99436 15.1875 4.21814 15.1875H10.9681C11.1919 15.1875 11.4065 15.2764 11.5648 15.4346C11.723 15.5929 11.8119 15.8075 11.8119 16.0312V22.7812C11.8119 23.005 11.723 23.2196 11.5648 23.3779C11.4065 23.5361 11.1919 23.625 10.9681 23.625H4.21814ZM16.0306 23.625C15.8069 23.625 15.5923 23.5361 15.434 23.3779C15.2758 23.2196 15.1869 23.005 15.1869 22.7812V16.0312C15.1869 15.8075 15.2758 15.5929 15.434 15.4346C15.5923 15.2764 15.8069 15.1875 16.0306 15.1875H22.779C23.0027 15.1875 23.2173 15.2764 23.3756 15.4346C23.5338 15.5929 23.6227 15.8075 23.6227 16.0312V22.7812C23.6227 23.005 23.5338 23.2196 23.3756 23.3779C23.2173 23.5361 23.0027 23.625 22.779 23.625H16.0306Z" fill="white" />
                                </svg>
                                Каталог
                            </span>
                        </div>

                        <div className={styles.search}>
                            <input placeholder="Поиск по сайту" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>

                        <div className={styles.sections}>
                            <Link to={'/favorites'}>
                                <div className={styles.section}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                    <p>Избранное</p>
                                </div>
                            </Link>

                            <Link to={'/cart'}>
                                <div className={styles.section}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>

                                    <p>Корзина</p>
                                </div>
                            </Link>

                            <Link to={'/'}>
                                <div className={styles.section}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>

                                    <p>Войти</p>
                                </div>
                            </Link>
                        </div>

                    </div>


                </div>
            </header>
        </>
    )
}