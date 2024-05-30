import React, { useState } from 'react';
import { FoodDetail } from '../components/FoodDetail';

interface Props {
    imageurl: string,
    foodName: string,
    foodPrice: number,
}

export const FoodCard = ({ imageurl, foodName, foodPrice }: Props) => {
    const [isVisible, setVisible] = useState(false);

    const imageClicked = () => {
        setVisible(true);
    };

    const closeDetail = () => {
        setVisible(false);
    };

    return (
        <>
            {isVisible && <FoodDetail closeDetail={closeDetail} />}
            <div className='flex flex-col text-center justify-between p-[5px] bg-[yellow]' onClick={imageClicked}>
                <div>
                    <img src={imageurl} className='w-[30vw] h-[30vw] rounded-[50px]' alt={foodName}></img>
                </div>
                <div className='text-[black] font-bold text-[20px] mt-[20px]'>
                    {foodName}
                </div>
                <div className='text-[gray]'>
                    {foodPrice}원
                </div>
            </div>
        </>
    );
};
