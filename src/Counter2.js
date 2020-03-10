import React, { useState, useEffect } from 'react';

//use state behave differently when setState takes callback and repeat it multiple time 

// const getStateFromLocalStorage = () => {
//     const storage = localStorage.getItem('counterState');
//     if(storage) return JSON.parse(storage).count;
//     return { count: 0 };
// }

// const storeStateInLocalStorage = count => {
//     localStorage.setItem('counterState', JSON.stringify({ count }));
//     console.log(localStorage);
// }

// const useLocalStorage = (initialState, key) => {
//     const get = () => {
//         const storage = localStorage.getItem(key);
//         console.log(localStorage, storage)
//         if(storage) return JSON.parse(storage)[value];
//         return initialState;
//     };

//     const [ value, setValue ] = useState(get());

//     useEffect(() => {
//         localStorage.setItem(key, JSON.stringify({ value }));
//     }, [ value ]);

//     return [ value, setValue ];
// };

const Counter = ({ max, step }) => {
    const countRef = React.useRef();
    // const [ count, setCount ] = useLocalStorage(0, 'counter');
    const [ count, setCount ] = useState(0);
    // const [ count, setCount ] = useState(getStateFromLocalStorage());
    let message = '';
    if(countRef.current < count) message = 'Higher';
    if(countRef.current > count) message = 'Lower';
    countRef.current = count;
    
    const increament = () => {
        // setCount(co => {
        //     if( co >= max) return co;
        //     return co + step;
        
        setCount(co => co + 1);
        // setCount(co => co + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // console.log('incremant : ', count);
    // });
}
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

/************useEffect use cases */
/* 
    1 functional component can have multiple useEffect functions
    if dependency(2nd argument) not pass then it will run on every signle render
    if dependency is [] then it will run very first time
    if dependency pass in array then it will run on whenever their values changed/updated
    settimeout work differentlly in useEffect
    cleanup is also important while using useEffect
*/

    useEffect(() => {
        // document.title = `Counter: ${count}`;
        const id = setInterval(() => {
            console.log(`Count: ${count}`);
          }, 3000);

          return () => clearInterval(id);
    }, [count]);

    // useEffect(() => {
    //     storeStateInLocalStorage(count);
    // }, [count]);

    return(
        <div className="Counter">
            <p>{ message }</p>
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick= {increament}>Increment</button>
          <button onClick= {decrement}>Decrement</button>
          <button onClick= {reset}>Reset</button>
        </section>
      </div>
    );
};

export default Counter;