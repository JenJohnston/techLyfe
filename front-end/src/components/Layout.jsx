
import React from 'react'

import { ModalSearchContextProvider } from '../context/modalSearchContext'

import Footer from './Footer'
import Header from './Header'
import SearchModal from './SearchModal'

export default function Layout({ children }) {
    

    return (
        <>
            <ModalSearchContextProvider>
                <Header/>
                <SearchModal/>
                {children}
                <Footer/>
            </ModalSearchContextProvider>
           
        </>
    )
}
