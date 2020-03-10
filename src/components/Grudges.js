import React from 'react';
import Grudge from './Grudge';
import { GrudgeContext } from './GrudgeContext';

const Grudges = () => {
    const { grudges } = React.useContext(GrudgeContext);
    return (
        <section className="Grudges">
            <h2>Grudges ({grudges.length})</h2>
            { grudges.map(grudge => (
                <Grudge key={grudge.id} grudge={grudge} />
            ))}
        </section>
    )
}

// commented after using context api
// const Grudges = ({ grudges = [], onForgive }) => {

//     return (
//         <section className="Grudges">
//             <h2>Grudges ({grudges.length})</h2>
//             { grudges.map(grudge => (
//                 <Grudge key={grudge.id} grudge={grudge} onForgive= {onForgive} />
//             ))}
//         </section>
//     )
// }

export default Grudges;