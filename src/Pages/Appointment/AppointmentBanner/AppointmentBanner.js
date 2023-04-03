import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';
import bannerBg from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <header
            style={{
                background: `url(${bannerBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
            className='my-16 py-10'>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className=" rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                    <div className='mr-6'>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                        <p>Available Services on {format(selectedDate, 'PP')}</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;