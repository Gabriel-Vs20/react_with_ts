import React, {useContext} from 'react';
import { AppContext } from '../App';
 
export function Context () {
    const details = useContext(AppContext)
    return(
    <>
    {details && (
        <div>
            <h2>Linguagem: {details?.language}</h2>
        </div>
    )}
    </>
    )
    
}
