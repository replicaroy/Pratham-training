import { useState } from "react"

export const useCounter = ()=> {
    const [counts, setCounts] = useState(0)

    const increment = ()=> {
        setCounts(count => count + 1)
    }
    const decrement = ()=> {
        setCounts(count=> count - 1)
    }
    const increasebyFive = ()=> {
        setCounts(count => count+5)
    }

    const decreasebyFive = ()=> {
        setCounts(count=> count -5)
    }
    return {counts, increment, decrement, increasebyFive, decreasebyFive}
}