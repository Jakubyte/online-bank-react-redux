import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { flip } from '../change/changerSlice';

export function UseChanger() {
    const change = useAppSelector((state) => state.changer.value);

    if (!change) {
        return (
            <div>
                <p>:(</p>
            </div>
        )
    }

    return (
        <div>
            <p>:)</p>
        </div>
    );
}