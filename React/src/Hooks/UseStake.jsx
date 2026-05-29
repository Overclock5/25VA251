import React, { useState } from 'react'

function UseState() {
    const [color, setColor] = useState('pink')
    const [count, setCount] = useState(0)

    const mouseOver = () => {
        setColor(color === 'blue' ? 'red' : 'blue')
    }

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <>
            <h1>UseState</h1>
            <p style={{ color: color }} onMouseOver={mouseOver}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
                possimus fugit dolores aperiam inventore incidunt tenetur aut officia
                delectus vero facilis hic harum accusamus sapiente, dignissimos atque
                magnam reiciendis sed.
            </p>
            <div>
                <h2>{count}</h2>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
        </>
    )
}

export default UseState