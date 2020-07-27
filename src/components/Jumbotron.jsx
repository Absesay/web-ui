import React from "react"
import HeroText from "./HeroText"
import SubHeroText from "./SubHeroText"
import Button from "./Button"


export default function Jumbotron() {
    return (
        <div className="col">
            <div className="jumbotron">
                <HeroText />
                <SubHeroText />
                <Button />
            </div>
        </div>
    )
}