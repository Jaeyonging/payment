import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/configureStore';
import { IconBar } from '../components/IconBar';
import { FoodContainer } from '../components/FoodContainer/FoodContainer';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../components/Button/CustomButton';
import { resetState, removeCart, addCart, selectTotalPrice } from '../store/itemSlice';
import { CountButton } from '../components/Button/CountButton';
import { Options } from '../types/type';

interface SectionRefs {
    [key: string]: HTMLDivElement | null;
}

export const Menu = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const totalPrice = useSelector(selectTotalPrice);
    const itemState = useSelector((state: RootState) => state.item);
    const sectionsRef = useRef<SectionRefs>({
        추천메뉴: null,
        커피: null,
        요거트: null,
        과일주스: null,
        티: null,
        디저트: null,
        케이크: null,
    });

    const cancelClicked = () => {
        dispatch(resetState());
    };

    const deleteItemClicked = (name: string, options: Options[]) => {
        dispatch(removeCart({ name, options }));
    };

    const countItemClicked = (name: string, options: Options[], num: number) => {
        const item = itemState.foods.find(item =>
            item.name === name &&
            JSON.stringify(item.options) === JSON.stringify(options)
        );
        if (item) {
            dispatch(addCart({ name, count: num, price: item.price, options }));
        }
    };

    const payClicked = () => {
        navigate("/payment");
    };

    const [activeSection, setActiveSection] = useState<keyof SectionRefs | null>(null);

    const scrollToSection = (section: keyof SectionRefs) => {
        const sectionElement = sectionsRef.current[section];
        if (sectionElement) {
            const headerOffset = getHeaderOffset();
            const elementPosition = sectionElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const getHeaderOffset = () => {
        if (window.matchMedia('(max-width: 640px)').matches) {
            console.log("mobile")
            return 120;
        }
        return 200;
    };

    useEffect(() => {
        const handleScroll = () => {
            const headerOffset = 200;
            const scrollPosition = window.pageYOffset + headerOffset;
            const windowBottomPosition = window.innerHeight + window.pageYOffset;

            let currentSection: keyof SectionRefs | null = null;
            const sectionKeys = Object.keys(sectionsRef.current) as (keyof SectionRefs)[];
            sectionKeys.forEach((key) => {
                const section = sectionsRef.current[key];
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        currentSection = key;
                    }

                    if (windowBottomPosition >= document.documentElement.scrollHeight) {
                        currentSection = sectionKeys[sectionKeys.length - 1];
                    }
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className="flex flex-col p-[10px 0] sticky top-0 z-50 bg-white">
                <div>
                    <IconBar url='/main' />
                </div>
                <div className='flex flex-row overflow-x-auto no-scrollbar border-b-2 border-gray-400'>
                    {Object.keys(sectionsRef.current).map((key) => (
                        <div
                            key={key}
                            className={`text-gray-500 title flex-shrink-0 min-w-[250px] text-center p-[20px] sm:text-[20px] sm:min-w-[100px] cursor-pointer ${activeSection === key ? 'border-b-2 border-black' : ''}`}
                            onClick={() => scrollToSection(key as keyof SectionRefs)}
                        >
                            {key}
                        </div>
                    ))}
                </div>
            </div>
            <div className="menu-container bg-gray-200">
                <div ref={(el) => (sectionsRef.current.추천메뉴 = el)} data-section="추천메뉴">
                    <FoodContainer title='추천메뉴'></FoodContainer>
                </div>
                <div ref={(el) => (sectionsRef.current.커피 = el)} data-section="커피">
                    <FoodContainer title='커피'></FoodContainer>
                </div>
                <div ref={(el) => (sectionsRef.current.요거트 = el)} data-section="요거트">
                    <FoodContainer title='요거트'></FoodContainer>
                </div>
                <div ref={(el) => (sectionsRef.current.과일주스 = el)} data-section="과일주스">
                    <FoodContainer title='과일주스'></FoodContainer>
                </div>
                <div ref={(el) => (sectionsRef.current.티 = el)} data-section="티">
                    <FoodContainer title='티'></FoodContainer>
                </div>
                <div ref={(el) => (sectionsRef.current.디저트 = el)} data-section="디저트">
                    <FoodContainer title='디저트'></FoodContainer>
                </div>
                <div ref={(el) => (sectionsRef.current.케이크 = el)} data-section="케이크">
                    <FoodContainer title='케이크'></FoodContainer>
                </div>
                {itemState.foods.length > 0 && (
                    <>
                        <div className='fixed bottom-0 w-full teduri p-[20px] bg-[white] sm:p-[5px]'>
                            <div className='bg-[white] max-h-[200px] overflow-y-auto teduri rounded-[20px] sm:max-h-[170px] p-[20px] sm:p-0 no-scrollbar'>
                                {itemState.foods.map((food: any, index: number) => (
                                    <div key={index} className='p-2 border-b border-gray-300 text-center'>
                                        <div className='flex flex-row justify-around text-[20px]'>
                                            <CountButton title='X' onClick={() => deleteItemClicked(food.name, food.options)} className='sm:text-[15px]' />
                                            <div className='w-[20vw] break-keep sm:text-[10px]'>
                                                {food.name}
                                            </div>
                                            <div className='flex flex-row justify-around w-[15vw] break-keep sm:text-[10px] items-center'>
                                                <CountButton title='-' onClick={() => countItemClicked(food.name, food.options, -1)} className='sm:mr-[5px]' />
                                                {food.count}
                                                <CountButton title='+' onClick={() => countItemClicked(food.name, food.options, 1)} className='sm:ml-[5px]' />
                                            </div>
                                            {food.options.map((option: any, index: number) => (
                                                <div key={index} className='flex flex-row'>
                                                    <div className='w-[15vw] break-keep sm:text-[10px]'>
                                                        {option.optitle}: {option.opdesc}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='flex justify-around w-[90vw] ml-[5vw] mt-[20px] sm:m-auto sm:mt-[20px]'>
                                <CustomButton title='취소' onClick={cancelClicked}></CustomButton>
                                <div className='flex flex-col border-2 border-[black] w-[100px] text-center justify-center text-[30px] sm:text-[20px]'>
                                    가격
                                    <div className='text-[20px] sm:text-[15px]'>
                                        {totalPrice}원
                                    </div>
                                </div>
                                <CustomButton title='결제' onClick={payClicked}></CustomButton>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
