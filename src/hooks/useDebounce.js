import { useEffect, useState } from 'react';

export const useDebounce = (value, delay) => {
    const [debouncsValue, setDebouncsValue] = useState(value);

    useEffect(()=>{
        const handler = setTimeout(()=>{
            setDebouncsValue(value)
        }, delay);
        return () => {
            clearTimeout(handler);
        }
    }, [value, delay]);

    return debouncsValue;
};