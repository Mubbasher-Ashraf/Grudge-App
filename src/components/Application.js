import React from 'react'; //, { useReducer, useCallback }
// import { v4 as id } from 'uuid';

import Grudges from './Grudges';
import NewGrudge from './NewGrudge';

// this code is commented after using context api
// import initialState from './initialState';

// const GRUDGE_ADD = 'GRUDGE_ADD';
// const GRUDGE_FORGIVE = 'GRUDGE_FORGIVE';

// re render or not while props are same as previous 
//React.memo() // take function component
// useCallback() useCallback will give you a new function that you can call. gives you function rather than results;
//useMemo() call function as dependencies have`nt changed, it will not call function again;


// const reducer = (state, action) => {
//     if(action.type === GRUDGE_ADD) {
//         return [ action.payload, ...state ];
//     }
//     if(action.type === GRUDGE_FORGIVE) {
//         return state.map(grudge => {
//             if(grudge.id !== action.payload.id) return grudge;
//             return { ...grudge, forgiven: !grudge.forgiven };
//         })
//     }
//     return state;
// };
// end
const Application = () => {

// this code is commented after using context api
    // const [ grudges, dispatch ] = useReducer(reducer, initialState);
    // const [ grudges, setGrudges ] = useState(initialState);

    // const addGrudge = useCallback(({ person, reson }) => {
    //     dispatch({
    //         type: GRUDGE_ADD,
    //         payload: {
    //             id: id(),
    //             person,
    //             reson,
    //             forgiven: false,
    //         },
    //     });

        // grudge.id = id();
        // grudge.forgiven = false;
        // setGrudges([grudge, ...grudges]);
    // }, [dispatch]);

    // const toggleFrogiveness = useCallback(id => {
    //     dispatch({
    //         type: GRUDGE_FORGIVE,
    //         payload: { id },
    //     });
        // setGrudges(
        //     grudges.map(grudge => {
        //         if(grudge.id !== id) return grudge;
        //         return { ...grudge, forgiven: !grudge.forgiven };
        //     })
        // );
    // }, [dispatch]);
// end
    return (
        <div className= "Application">
            <NewGrudge />
             {/* onSubmit={addGrudge} /> */}
            <Grudges />
            {/* grudges={grudges} onForgive={toggleFrogiveness} /> */}
        </div>
    )
}

export default Application;