import React from "react"

export default function Nav() {
    return (
        <nav className="">
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Workouts & Programs</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Nutrition</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Community</a>
                </li>
            </ul>
        </nav>
    )
}