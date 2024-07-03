import React, { useRef, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Tooltip, Legend, Bar } from 'recharts';
import { SideMenu } from '../../components/Admin/SideMenu';
import { DragBarChart } from '../../components/Admin/DragBarChart';

export const AdminHome = () => {
    const dropAreaRef = useRef(null)
    const [isSideMenuOpen, setSideMenuOpen] = useState(false);

    const menuOnclicked = () => {
        setSideMenuOpen(true);
    };


    return (
        <>
            <div className='text-[30px] absolute'>
                <GiHamburgerMenu onClick={menuOnclicked} className='cursor-pointer'></GiHamburgerMenu>
                <SideMenu isOpen={isSideMenuOpen} setOpen={setSideMenuOpen}></SideMenu>
            </div>

            <div className='flex w-[100vw] text-[red] h-[100vh] justify-center items-center'>
                <div className='w-[50vw] h-[50vh]'>
                    <DragBarChart />
                </div>
            </div>
        </>
    );
};
