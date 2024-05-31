import React, { useState } from 'react'

interface Props {
    title: string
    onClick: () => void
}

export const CountButton = ({ onClick, title }: Props) => {
    const [isSelected, setSelected] = useState(false)
    return (
        <div className={`w-[50px] border-2 border-[black] rounded-[10px] ${isSelected ? "bg-[gray]" : "bg-[white]"}`} onPointerDown={() => setSelected(true)} onPointerUp={() => { setSelected(false) }} onClick={onClick} onPointerLeave={() => setSelected(false)}>{title}</div>
    )
}
