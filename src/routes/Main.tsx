import React, { useEffect, useState } from 'react'
import { CardView } from '../components/CardView'
import { LanguageButton } from '../components/Button/LanguageButton'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/configureStore';
import { resetState } from '../store/itemSlice';

export const Main = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [selectedLanguage, setSelectedLanguage] = useState('Korean')
    const handleLanguageClick = (language: string) => {
        setSelectedLanguage(language)
    }

    useEffect(() => {
        dispatch(resetState())
    }, [])

    return (
        <div className='flex w-[100vw] h-[100vh] flex-col justify-around  p-[20px]'>
            <div className='text-[40px] font-bold'>
                반가워요 <br /> 주문을 시작할게요
            </div>
            <div className='flex flex-row justify-around'>
                <CardView title='먹고가기' imageurl="../eat-here.png" ></CardView>
                <CardView title='포장하기' imageurl="../take-out.png" ></CardView>
            </div>
            <div className='flex flex-row justify-center'>
                <LanguageButton
                    imageurl='../korea.png'
                    isSelected={selectedLanguage === 'Korean'}
                    onClick={() => handleLanguageClick('Korean')}
                />
                <LanguageButton
                    imageurl='../us.webp'
                    isSelected={selectedLanguage === 'English'}
                    onClick={() => handleLanguageClick('English')}
                />
            </div>
        </div>
    )
}