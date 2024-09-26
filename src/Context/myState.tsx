import MyContext from './myContext';
import { useEffect, useState, ReactNode } from 'react';

interface MyStateProps {
    children: ReactNode;
}

function MyState({ children }: MyStateProps) {
    const [cartopen, setCartopen] = useState(false);

const opencart = async () => {
    setCartopen(!cartopen)
}

useEffect(()=>{
    
})

    return (
        <MyContext.Provider value={{ cartopen,setCartopen,opencart }}>
            {children}
        </MyContext.Provider>
    );
}

export default MyState;
