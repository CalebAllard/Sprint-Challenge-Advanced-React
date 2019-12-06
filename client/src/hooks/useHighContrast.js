import {useLocalStorage} from './useLocal';
import {useEffect} from 'react';

export const useHighContrast = (value) => {

    const [mode, setMode] = useLocalStorage('mode',value);

    useEffect(() => {
        if (mode){
            document.querySelector('body').classList.add('dark-mode');
        }else{
            document.querySelector('body').classList.remove('dark-mode');
        }


    },[mode]);



    return [mode, setMode];


}