import React from "react"
import * as data from "../data"

export default function Nav() {
    return (
        <nav className="">
            <ul className="nav justify-content-end">
                {data.nav.map((n) => (
                        <li className="nav-item">
                            <a className="nav-link" href="#">{n}</a>
                        </li>
                    )
                )}
            </ul>
        </nav>
    )
}