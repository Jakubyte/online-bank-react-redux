import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { flip } from './changerSlice';
// style module import

export function Changer() {
    const change = useAppSelector((state) => state.changer.value);
    const dispatch = useAppDispatch();

    function handleClick() {
        dispatch(flip());
    }

    if (!change) {
        return (
            <div>
                <p>red</p>
                <button onClick={() => {handleClick()}}>Flip</button>
            </div>
        )
    }

    return (
        <div id="hello">
            <p>blue</p>
            <button onClick={() => {handleClick()}}>Flip</button>
        </div>
    );
}
