import {useMemo} from 'react'
import gsap from 'gsap'

export function useGsapContext(scope) {
    const ctx = useMemo(() => gsap.context(() => {}, scope), [scope]);
    return ctx;
}

