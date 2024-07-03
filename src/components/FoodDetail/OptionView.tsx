import React, { useState, useEffect } from 'react';

interface Props {
    title: string;
    option1: string;
    option2: string;
    option3: string;
    onOptionChange: (optitle: string, opdesc: string) => void;
    defaultOption: string;
}

export const OptionView = ({ title, option1, option2, option3, onOptionChange, defaultOption }: Props) => {
    const [isSelected, setSelected] = useState(defaultOption);

    useEffect(() => {
        setSelected(defaultOption);
    }, [defaultOption]);

    const handleOptionClick = (option: string) => {
        setSelected(option);
        onOptionChange(title, option);
    };

    return (
        <div className="semi-font self-start w-full text-start teduri p-[30px] rounded-[25px] mt-[20px] sm:text-[20px] sm:text-center sm:p-[10px]">
            <div className='sm:text-center sm:font-bold'>
                {title}
            </div>
            <div className="flex justify-around text-center semi-font ">
                <div className={`p-[30px] teduri rounded-[20px] sm:p-[10px] sm:flex sm:flex-col sm:items-center sm:text-[15px] sm:break-keep  ${isSelected === option1 ? 'bg-selected-color' : ''}`} onClick={() => handleOptionClick(option1)}>
                    <img src="../ice_americano.jpeg" className="w-[200px] h-[300px] mb-[20px] sm:w-[50px] sm:h-[100px]" alt="option1" />
                    {option1}
                </div>
                <div className={`p-[30px] teduri rounded-[20px] sm:p-[10px] sm:flex sm:flex-col sm:items-center sm:text-[15px] ${isSelected === option2 ? 'bg-selected-color' : ''}`} onClick={() => handleOptionClick(option2)}>
                    <img src="../ice_americano.jpeg" className="w-[200px] h-[300px] mb-[20px] sm:w-[50px] sm:h-[100px]" alt="option2" />
                    {option2}
                </div>
                <div className={`p-[30px] teduri rounded-[20px] sm:p-[10px] sm:flex sm:flex-col sm:items-center sm:text-[15px] ${isSelected === option3 ? 'bg-selected-color' : ''}`} onClick={() => handleOptionClick(option3)}>
                    <img src="../ice_americano.jpeg" className="w-[200px] h-[300px] mb-[20px] sm:w-[50px] sm:h-[100px]" alt="option3" />
                    {option3}
                </div>
            </div>
        </div>
    );
};
