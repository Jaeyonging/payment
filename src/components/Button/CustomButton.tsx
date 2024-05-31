import React, { useState } from 'react'

interface Props {
    title: string
    onClick: () => void
}

export const CustomButton = ({ title, onClick }: Props) => {
    const [isSelected, setSelected] = useState(false)
    return (
        <div className={`w-[250px] sm:w-[80px] sm:text-[15px] border-2 border-[black] p-[20px] rounded-[20px] text-center text-[30px] ${isSelected ? "bg-[gray]" : "bg-[white]"}`}
            onClick={onClick} onPointerDown={() => setSelected(true)} onPointerUp={() => setSelected(false)} onPointerLeave={() => setSelected(false)}>{title}</div>)
}
