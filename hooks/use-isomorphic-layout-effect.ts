import { isBrowser } from '@/utils/is-browser'
import { useEffect, useLayoutEffect } from 'react'

/**
 * A hook that resolves to useEffect on the server and useLayoutEffect on the client
 */
export const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect
