import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({ selectedDate }) => {
    return (
        <section className='mt-16'>
            <p className='text-xl text-secondary text-center font-bold'>Available Services on {format(selectedDate, 'PP')}</p>
        </section>
    );
};

export default AvailableAppointments;