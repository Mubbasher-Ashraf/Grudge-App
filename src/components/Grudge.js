import React from 'react';
import { GrudgeContext } from './GrudgeContext';

const Grudge = React.memo(({ grudge }) => {
    const { toggleForgiveness } = React.useContext(GrudgeContext);
    const forgive = () => toggleForgiveness(grudge.id);

    return (
        <article className="Grudge">
            <h3>{grudge.person}</h3>
            <p>{grudge.reason}</p>
            <div className="Grudge=controls">
                <label className="Grudge-forgiven">
                    <input type="checkbox" checked={grudge.forgiven} onChange={forgive} />{' '}
                    Forgiven
                </label>
            </div>
        </article>
    )
});


// commented after using context api
// const Grudge = React.memo(({ grudge, onForgive }) => {
//     const forgive = () => onForgive(grudge.id);
//     console.log('Rendering Grudge', grudge.id);

//     return (
//         <article className="Grudge">
//             <h3>{grudge.person}</h3>
//             <p>{grudge.reason}</p>
//             <div className="Grudge=controls">
//                 <label className="Grudge-forgiven">
//                     <input type="checkbox" checked={grudge.forgiven} onChange={forgive} />{' '}
//                     Forgiven
//                 </label>
//             </div>
//         </article>
//     )
// });

export default Grudge;