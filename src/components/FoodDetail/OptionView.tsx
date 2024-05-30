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
        <div className="semi-font self-start w-full text-start bg-[gray] p-[30px] rounded-[25px] mt-[20px]">
            {title}
            <div className="flex flex-row justify-around text-center semi-font">
                <div
                    className={`p-[30px] ${isSelected === option1 ? 'bg-[blue]' : 'bg-[yellow]'}`}
                    onClick={() => handleOptionClick(option1)}
                >
                    <img src="../ice_americano.jpeg" className="w-[200px] h-[300px] mb-[20px]" alt="option1" />
                    {option1}
                </div>
                <div
                    className={`p-[30px] ${isSelected === option2 ? 'bg-[blue]' : 'bg-[yellow]'}`}
                    onClick={() => handleOptionClick(option2)}
                >
                    <img src="../ice_americano.jpeg" className="w-[200px] h-[300px] mb-[20px]" alt="option2" />
                    {option2}
                </div>
                <div
                    className={`p-[30px] ${isSelected === option3 ? 'bg-[blue]' : 'bg-[yellow]'}`}
                    onClick={() => handleOptionClick(option3)}
                >
                    <img src="../ice_americano.jpeg" className="w-[200px] h-[300px] mb-[20px]" alt="option3" />
                    {option3}
                </div>
            </div>
        </div>
    );
};
