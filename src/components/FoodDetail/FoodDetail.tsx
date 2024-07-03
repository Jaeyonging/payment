import React, { useEffect, useState } from 'react';
import { FoodIntro } from './FoodIntro';
import { OptionView } from './OptionView';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/configureStore';
import { addCart } from '../../store/itemSlice';
import { CustomButton } from '../Button/CustomButton';
import { CountButton } from '../Button/CountButton';

interface FoodDetailProps {
    closeDetail: () => void;
    imageurl: string;
    foodName: string;
    price: number;
}

export const FoodDetail = ({ closeDetail, imageurl, foodName, price }: FoodDetailProps) => {
    const [count, setCount] = useState(0);
    const [options, setOptions] = useState<{ optitle: string; opdesc: string }[]>([
        { optitle: "얼음양", opdesc: "적당히" },
        { optitle: "물량", opdesc: "적당히" },
        { optitle: "샷 추가", opdesc: "2샷" }
    ]);

    const dispatch = useDispatch<AppDispatch>();

    const countbuttonClicked = (num: number) => {
        setCount(num + count);
    };

    const handleOptionChange = (optitle: string, opdesc: string) => {
        setOptions(prevOptions => {
            const existingOption = prevOptions.find(option => option.optitle === optitle);
            if (existingOption) {
                return prevOptions.map(option =>
                    option.optitle === optitle ? { optitle, opdesc } : option
                );
            } else {
                return [...prevOptions, { optitle, opdesc }];
            }
        });
    };

    const addCartClicked = () => {
        dispatch(addCart({ name: foodName, count, price, options }));
        closeDetail();
    };

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className='fixed inset-0 flex items-center justify-center w-[100vw] h-[100vh] bg-transparent z-50 '>
            <div className='flex flex-col items-center w-[95vw] h-[95vh] bg-[white] teduri rounded-[50px] overflow-y-auto no-scrollbar'>
                <button onClick={closeDetail} className='absolute top-[-30px] right-5 text-black text-[100px] sm:text-[40px] sm:top-0'>
                    X
                </button>
                <div className='flex justify-around items-center w-full p-[50px] sm:flex-col'>
                    <FoodIntro title={foodName} price={price} imageurl={imageurl}></FoodIntro>
                </div>
                <div className='flex flex-col title teduri w-[90vw] rounded-[50px] p-[20px] text-center'>
                    <div className='border-b-2 border-[black] sm:text-[20px]'>옵션</div>
                    <OptionView
                        title="얼음양"
                        option1="얼음 많이"
                        option2="적당히"
                        option3="얼음 적게"
                        onOptionChange={handleOptionChange}
                        defaultOption="적당히"
                    />
                    <OptionView
                        title="물량"
                        option1="물 많이"
                        option2="적당히"
                        option3="물 적게"
                        onOptionChange={handleOptionChange}
                        defaultOption="적당히"
                    />
                    <OptionView
                        title="샷 추가"
                        option1="1샷"
                        option2="2샷"
                        option3="3샷"
                        onOptionChange={handleOptionChange}
                        defaultOption="2샷"
                    />
                </div>
                <div className='bg-[white] w-[90vw] rounded-[50px] text-center title p-[20px] mt-[20px] sm:text-[20px]'>
                    <div className='border-b-2 border-[black]'>갯수</div>
                    <div className='flex flex-row justify-center semi-font mt-[20px]'>
                        <CountButton onClick={() => countbuttonClicked(-1)} title='-'></CountButton>
                        <div className='border-2 border-[black] w-[100px] ml-[20px] mr-[20px]'>
                            {count}
                        </div>
                        <CountButton onClick={() => countbuttonClicked(+1)} title='+'></CountButton>
                    </div>
                </div>
                <div className='flex w-full flex-row justify-around mt-[20px] mb-[20px] text-[30px]'>
                    <CustomButton title='취소' onClick={closeDetail}></CustomButton>
                    <CustomButton title='담기' onClick={addCartClicked}></CustomButton>
                </div>
            </div>
        </div>
    );
};
