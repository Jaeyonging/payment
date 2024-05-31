import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
    imageurl: string
    title: string
    teduri?: boolean
}

export const PaymentCardView = ({ imageurl, title, teduri = false }: Props) => {
    const [isSelected, setSelect] = useState(false)
    const navigate = useNavigate()

    const onClick = () => {
        navigate(`/payprogress/${title}`)
    }

    const pointerup = () => {
        setSelect(false)
    }

    const pointerdown = () => {
        setSelect(true)
    }

    return (
        <div className={`flex flex-col teduri rounded-[10px] justify-center w-[25vw] p-2 items-center ${isSelected ? "bg-[gray]" : "bg-[white]"}`} onPointerDown={pointerdown} onPointerUp={pointerup} onClick={onClick}>
            <div>
                <img src={imageurl} className={`w-[20vw] h-[7vh]  ${teduri ? "teduri rounded-[20px] p-[20px]" : "rounded-full"}`} />
            </div>
            <div className='mt-[20px]'>
                {title}
            </div>
        </div>)
}
