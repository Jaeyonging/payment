import React from 'react'

interface Props {
    imageurl: string,
    foodName: string,
    foodPrice: number,
}
export const FoodCard = ({ imageurl, foodName, foodPrice }: Props) => {
    return (
        <div className='flex flex-col text-center bg-[yellow] justify-between p-[5px]'>
            <div>
                <img src={imageurl} className='w-[30vw] h-[30vw] rounded-[50px]'></img>
            </div>
            <div className='text-[black] font-bold text-[20px] mt-[20px]'>
                {foodName}
            </div>
            <div className='text-[gray]'>
                {foodPrice}원
            </div>
        </div>
    )
}
