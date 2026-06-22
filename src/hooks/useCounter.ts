import { useState } from 'react'

interface UseCounterReturn {
  count: number
  increment: () => void
}

export const useCounter = (): UseCounterReturn => {
  const [count, setCount] = useState<number>(0)

  const increment = (): void => {
    setCount((prevCount: number) => prevCount + 1)
  }

  return { count, increment }
}
