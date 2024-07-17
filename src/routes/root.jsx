import { Outlet } from "react-router-dom";
import { HeaderComponent } from "../Components/HeaderComponent";
import { FooterComponent } from "../Components/FooterComponent";
import { useState } from 'react'
import { AppContext } from '../context/AppContext'
import { SubForm } from "../Components/SubForm";

export function Root() {

    const [cartModal, setCartModal] = useState(false)
    const [cart, setCart] = useState([])
    const [popup, setPopup] = useState(false)
    const [favorites, setFavorites] = useState([])

    return (
        <>
            <AppContext.Provider value={[cartModal, setCartModal, cart, setCart, popup, setPopup, favorites, setFavorites]}>
                <div className="wrapper">
                    { cartModal ? <Cart/> : '' }
                    <HeaderComponent/>
                    <main className="main">
                        <div className="container">
                            <Outlet/>
                        </div>
                        <SubForm />
                    </main>
                    <FooterComponent/>
                </div>
            </AppContext.Provider>
        </>
    )
}