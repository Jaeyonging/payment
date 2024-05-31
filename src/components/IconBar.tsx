import React from 'react'
import { IoArrowBackOutline } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

interface Props {
    url: string
}

export const IconBar = ({ url }: Props) => {
    const navigate = useNavigate()
    const onClick = (url2: string) => {
        navigate(url2)
    }

    return (
        <div className='flex justify-between flex-row'>
            <div className='text-[80px] cursor-pointer sm:text-[50px]' onClick={() => onClick(url)}>
                <IoArrowBackOutline />
            </div>
            <div className='flex flex-row text-[gray] cursor-pointer' onClick={() => onClick("/")}>
                <div className='text-[80px] mr-[20px] sm:text-[50px]'>
                    <FaHome />
                </div>
                {/* <div className='mt-[-5px] text-[60px] sm:text-[20px] sm:mt-[10px] sm:hidden'>
                    처음으로
                </div> */}
            </div>
        </div>
    )
}
