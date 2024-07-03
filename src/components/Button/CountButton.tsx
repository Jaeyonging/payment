import React, { useState } from 'react'

interface Props {
    title: string
    onClick: () => void
    className?: string
}

export const CountButton = ({ onClick, title, className }: Props) => {
    const [isSelected, setSelected] = useState(false)
    return (
        <div className={`${className ? "w-[50px] border-2 border-[black] rounded-[10px] items-center " + className : "w-[50px] border-2 border-[black] rounded-[10px] items-center"} ${isSelected ? "bg-[gray]" : "bg-[white]"}`} onPointerDown={() => setSelected(true)} onPointerUp={() => { setSelected(false) }} onClick={onClick} onPointerLeave={() => setSelected(false)}>{title}</div>
    )
}
