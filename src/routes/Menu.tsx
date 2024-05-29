import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/configureStore'

export const Menu = () => {
    const itemState = useSelector((state: RootState) => state.item)
    console.log(itemState)
    return (
        <div>Menu</div>
    )
}
