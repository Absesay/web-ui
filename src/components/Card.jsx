import React from "react"
import * as data from "../data"

export default function Card() {
    return (
        <div className="card-deck mb-3">
                {data.footerCards.map(function(card){
                    return (
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">{card.title} <small className="text-muted">/ mo</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                <li>{card.content[0]}</li>
                                <li>{card.content[1]}</li>
                                <li>{card.content[2]}</li>
                                <li>{card.content[3]}</li>
                                </ul>
                                <button type="button" className="btn btn-lg btn-block btn-outline-primary fbtn">{card.button}</button>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}