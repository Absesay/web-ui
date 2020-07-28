import React from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import * as data from "../data"


export default function App() {
    return (
        <div className="container">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}