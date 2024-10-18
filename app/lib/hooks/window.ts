import { useContext } from 'react'
import { PageSizeContext } from '../ctx/window'

export function useWindowSize() {
  return useContext(PageSizeContext)
}
