import { useEffect, useState } from 'react'
import { type Advice } from '../types/Advice.d'

export default function useAdvice() {
  const [advice, setAdvice] = useState<string>('')
  const [adviceId, setAdviceId] = useState<number>(117)
  const [rotate, setRotate] = useState<boolean>(false)

  useEffect(() => {
    fetch(`https://api.adviceslip.com/advice/${adviceId}`)
      .then(res => res.json())
      .then((data: Advice) => setAdvice(data.slip.advice))
      .catch((err: Error) => {
        console.error(err.message)
      })
  }, [adviceId])

  const handleClick = () => {
    setAdviceId(getRandomInt(1, 224))
    toggleRotate()
  }

  const toggleRotate = () => {
    setRotate(!rotate)
  }

  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
  }

  return {
    advice,
    adviceId,
    handleClick,
    rotate
  }
}