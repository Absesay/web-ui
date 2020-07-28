import React from "react"
import * as data from "../data"

export default function HeaderText() {
    return (
        <h1 className="display-4">{data.heading}</h1>
    )
}