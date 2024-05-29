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
            <div className='text-[5vw]' onClick={() => onClick("/main")}>
                <IoArrowBackOutline />
            </div>
            <div className='flex flex-row text-[gray]' onClick={() => onClick("/")}>
                <div className='text-[5vw] mr-[20px]'>
                    <GrPowerReset />
                </div>
                <div className='mt-[-5px] text-[4vw]'>
                    처음으로
                </div>
            </div>
        </div>
    )
}
