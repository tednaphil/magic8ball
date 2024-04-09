import { useState } from "react";
import Card from "./Card";

function Readings({readings}) {
    const cards = readings.map(reading => {
        return (
            <Card question={reading.question}
            reading={reading.response} key={Date.now()}/>
        )
    })

    return (
        <>
        <section className="readings">
            <h2>Readings Section</h2>
            {cards}
        </section>
        </>
    )
}

export default Readings