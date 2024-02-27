import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        /*
            setTimeout(함수, 시간) => 지정 된 시간만큼 함수 동작 지연시킴.
            clearTimeout(변수) => 변수에 저장 된 타이머를 삭제시킴.

            setTimeout()을 변수에 저장해서 실행하면 clearTimeout에 의해 정지시킬 수 있음.
        */
        const handler = setTimeout(() => {
            setDebounceValue(value)
        }, delay);
        return () => {
            clearTimeout(handler);
        }
    }, [value, delay]);

    return debounceValue;
};

export default useDebounce;