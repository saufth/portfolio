// Hooks
import { useEffect } from "react"

const useEffectOnUpdate = (effect, deps = []) => {
  const isMounted = useRef(false)

  useEffect(() => {
    isMounted.current ? effect() : isMounted.current = true
  }, deps)
}

export default useEffectOnUpdate
