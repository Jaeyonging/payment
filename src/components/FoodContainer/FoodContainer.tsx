import React from 'react'
import { FoodCard } from './FoodCard';

interface Props {
    title: string;
}

export const FoodContainer = ({ title }: Props) => {
    return (
        <div className='flex flex-col p-[30px] pt-0 mt-[50px] bg-[white] sm:mt-[20px]'>
            <div className='text-[gray] title sm:text-[20px]'>
                {title}
            </div>
            <div className='flex flex-row flex-wrap justify-around mt-[20px]'>
                <FoodCard imageurl='../ice_americano.jpeg' foodName='아이스 아메리카노' foodPrice={3000} />
                <FoodCard imageurl='../ice-vanilla.jpeg' foodName='아이스 바닐라' foodPrice={5000} />
                <FoodCard imageurl='../icelatte.jpeg' foodName='아이스 라데' foodPrice={4500} />
                <FoodCard imageurl='../ice_americano.jpeg' foodName='아이스 아메리카노' foodPrice={3000} />
                <FoodCard imageurl='../ice_americano.jpeg' foodName='아이스 아메리카노' foodPrice={3000} />

            </div>
        </div>
    )
}
