import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/configureStore';
import { isTakeOut } from '../store/itemSlice';
import { useNavigate } from 'react-router-dom';

interface Props {
    title: string,
    imageurl: string,
}

export const CardView = ({ title, imageurl }: Props) => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate()
    const [isSelected, setSelected] = useState(false)

    const imagePointerdown = () => {
        setSelected(true)
    }

    const imagePointerup = () => {
        setSelected(false)
    }

    const imageClick = (title: string) => {
        if (title.includes("take-out")) {
            dispatch(isTakeOut(0))
        } else {
            dispatch(isTakeOut(1))
        }
        navigate("/menu")
    }

    return (
        <div
            className={`flex flex-col w-[40vw] h-[40vw] bg-cardbg-rgb justify-center items-center rounded-[50px] cursor-pointer ${isSelected ? "bg-gray-500" : ""}`}
            onPointerDown={imagePointerdown}
            onPointerUp={imagePointerup}
            onPointerLeave={imagePointerup}
            onClick={() => imageClick(imageurl)}
        >
            <img src={imageurl} className='w-[30vw]' alt="item" />
            <div className='text-[40px] font-bold sm:text-[20px]'>
                {title}
            </div>
        </div>
    )
}
