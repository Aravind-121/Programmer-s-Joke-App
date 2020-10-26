import {useState} from 'react';

function useToggleHook(initVal){
    let [state,setState] = useState(initVal);
    
    const toggle = ()=>{
        setState(!state);
    }
    return [state,toggle];
}
export default useToggleHook;