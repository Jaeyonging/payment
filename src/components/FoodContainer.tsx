import React from 'react'
import { FoodCard } from './FoodCard';

interface Props {
    title: string;
}

export const FoodContainer = ({ title }: Props) => {
    return (
        <div className='flex flex-col p-[30px]'>
            <div className='text-[gray] text-[50px]'>
                {title}
            </div>
            <div className='flex flex-row flex-wrap justify-start mt-[20px]'>
                <FoodCard imageurl='../ice_americano.jpeg' foodName='아이스 아메리카노' foodPrice={3000} />
                <FoodCard imageurl='../ice_americano.jpeg' foodName='아이스 아메리카노' foodPrice={3000} />
                <FoodCard imageurl='../ice_americano.jpeg' foodName='아이스 아메리카노' foodPrice={3000} />
                <FoodCard imageurl='../ice_americano.jpeg' foodName='아이스 아메리카노' foodPrice={3000} />
            </div>
        </div>
    )
}
