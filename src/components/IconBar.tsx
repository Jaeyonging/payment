import React from 'react'
import { IoArrowBackOutline } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';

export const IconBar = () => {
    const navigate = useNavigate()
    const onClick = (url: string) => {
        navigate(url)
    }

    return (
        <div className='flex justify-between flex-row'>
            <div className='text-[80px] cursor-pointer sm:text-[50px]' onClick={() => onClick("/main")}>
                <IoArrowBackOutline />
            </div>
            <div className='flex flex-row text-[gray] cursor-pointer' onClick={() => onClick("/")}>
                <div className='text-[80px] mr-[20px] sm:text-[50px]'>
                    <GrPowerReset />
                </div>
                <div className='mt-[-5px] text-[60px] sm:text-[20px] sm:mt-[10px]'>
                    처음으로
                </div>
            </div>
        </div>
    )
}
