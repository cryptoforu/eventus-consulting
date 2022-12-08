import {useEffect, useLayoutEffect} from 'react';

const useIsomorphicLayoutEffect = () => {

   return typeof window !== 'undefined' ? useEffect : useLayoutEffect
};

export default useIsomorphicLayoutEffect;