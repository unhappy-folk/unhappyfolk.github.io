import { useState } from "react"

function Loading ({color = 'facc15', isLoading}) {
    const [dots, setDots] = useState('')
    
    const dotsTimer = setTimeout(() => {
        dots.length === 4 ? 
        setDots('')
        :
        setDots(`${dots}.`)
    }, 500)

    if(!isLoading) {
        clearTimeout(dotsTimer);
    }

    return (
        <p className={`text-4xl text-[#${color}]`}>{dots}</p>
    )
}

export default Loading;