import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../components/PrimaryButton';

const ContactUs = () => {
    return (
        <div
            style={{
                background: `url(${appointment})`,
                backgroundSize: 'cover',


            }}

            className='flex justify-center p-8'>
            <div className="form-control">
                <div className='my-10'>
                    <h4 className='text-primary text-bold text-xl'>Contact Us</h4>
                    <h2 className='text-4xl text-white'>Stay connected with us</h2>
                </div>
                <label className="input-group ">
                    <input type="text" placeholder="info@site.com" className="input input-bordered w-full" />
                </label>
                <label className="input-group my-4">
                    <input type="text" placeholder="Subject" className="input input-bordered w-full" />
                </label>
                <label className="input-group">
                    <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                </label>
                <div className='flex justify-center mt-9'>
                    <PrimaryButton>Submit</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;