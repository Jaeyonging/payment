import React, { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/configureStore';
import { IconBar } from '../components/IconBar';
import { FoodContainer } from '../components/FoodContainer/FoodContainer';

interface SectionRefs {
    [key: string]: HTMLDivElement | null;
}

export const Menu = () => {
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

    const [activeSection, setActiveSection] = useState<keyof SectionRefs | null>(null);

    const scrollToSection = (section: keyof SectionRefs) => {
        const sectionElement = sectionsRef.current[section];
        if (sectionElement) {
            const headerOffset = 200;
            const elementPosition = sectionElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
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
                    <IconBar />
                </div>
                <div className='flex flex-row overflow-x-auto no-scrollbar border-b-2 border-gray-400'>
                    {Object.keys(sectionsRef.current).map((key) => (
                        <div
                            key={key}
                            className={`text-gray-500 title flex-shrink-0 min-w-[250px] text-center p-[20px] cursor-pointer ${activeSection === key ? 'border-b-2 border-black' : ''}`}
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
                        <div className='fixed bottom-0 w-full teduri p-[20px] bg-[white]'>
                            <div className='bg-[white] max-h-[200px] overflow-y-auto teduri rounded-[20px] p-[20px]'>
                                {itemState.foods.map((food: any, index: number) => (
                                    <div key={index} className='p-2 border-b border-gray-300'>
                                        <div className='flex flex-row justify-between'>
                                            <div>
                                                {food.name}
                                            </div>
                                            <div>
                                                {food.count}
                                            </div>
                                            {food.options.map((option: any, index: number) => (
                                                <div key={index} className='flex flex-row'>
                                                    <div>
                                                        {option.optitle}
                                                    </div>
                                                    <div>
                                                        {option.opdesc}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='flex justify-around w-[90vw] ml-[5vw] mt-[20px]'>
                                <button className='w-[200px] border-2 border-[black] p-[20px] rounded-[20px]'>취소하기</button>
                                <button className='w-[200px] border-2 border-[black] p-[20px] rounded-[20px]'>결제하기</button>
                            </div>
                        </div>
                    </>


                )}
            </div>
        </div>
    );
};
