import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/configureStore'
import { IconBar } from '../components/IconBar'
import { FoodCard } from '../components/FoodCard'
import { FoodContainer } from '../components/FoodContainer'

interface SectionRefs {
    [key: string]: HTMLDivElement | null;
}

export const Menu = () => {
    const itemState = useSelector((state: RootState) => state.item)
    const sectionsRef = useRef<SectionRefs>({
        추천메뉴: null,
        커피: null,
        요거트: null,
        과일주스: null,
        티: null,
    });

    const scrollToSection = (section: keyof SectionRefs) => {
        const sectionElement = sectionsRef.current[section];
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <div className="flex flex-col p-[10px 0] sticky top-0 z-50 bg-[white] text-[]">
                <div>
                    <IconBar />
                </div>
                <div className='flex flex-row justify-around '>
                    {Object.keys(sectionsRef.current).map((key) => (
                        <div
                            key={key}
                            className="text-[gray] text-[5vw] "
                            onClick={() => scrollToSection(key as keyof SectionRefs)}
                        >
                            {key}
                        </div>
                    ))}
                </div>
            </div>
            <div className="menu-container">
                <div ref={(el) => (sectionsRef.current.추천메뉴 = el)} className="section">
                    <FoodContainer title='추천메뉴'></FoodContainer>
                </div>
                <div ref={(el) => (sectionsRef.current.커피 = el)} className="section">
                    <FoodContainer title='커피'></FoodContainer>

                </div>
                <div ref={(el) => (sectionsRef.current.요거트 = el)} className="section">
                    <FoodContainer title='요거트'></FoodContainer>

                </div>
                <div ref={(el) => (sectionsRef.current.과일주스 = el)} className="section">
                    <FoodContainer title='과일주스'></FoodContainer>

                </div>
                <div ref={(el) => (sectionsRef.current.티 = el)} className="section">
                    <FoodContainer title='티'></FoodContainer>

                </div>
            </div>
        </div>
    );
}
