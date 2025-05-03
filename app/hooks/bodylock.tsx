import { useEffect } from 'react'

const useBodyScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    if (isLocked) {
      document.body.classList.add('lock-scroll')
    } else {
      document.body.classList.remove('lock-scroll')
    }

    // Cleanup on component unmount
    return () => {
      document.body.classList.remove('lock-scroll')
    }
  }, [isLocked])
}

export default useBodyScrollLock
