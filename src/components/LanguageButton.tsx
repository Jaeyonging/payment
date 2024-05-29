import React from 'react'

interface Props {
    imageurl: string;
    isSelected: boolean;
    onClick: () => void;
}

export const LanguageButton = ({ imageurl, isSelected, onClick }: Props) => {
    return (
        <div className='flex flex-col items-center text-center p-[10px]' onClick={onClick}>
            <div className={`flex rounded-full p-[10px] w-[10vw] h-[10vw] justify-center items-center ${isSelected ? "bg-flag-rgba border-4 border-[blue]" : ""}`}>
                <img src={imageurl} className='w-[5vw]' />
            </div>
        </div>
    )
}