import React from 'react';
import Payment from '../../../assets/payments/payments.png'

const Footer = () => {
  return (
    <div className='row  mt-5 p-5 bg-info'>
      <div className='col '>
        <h3>Service</h3>
        <div className='row'>
          <span>Branding</span>
          <span>Design</span>
          <span>Marketing</span>
          <span>Advertisement</span>
        </div>
      </div>

      <div className='col '>
        <h3>Company</h3>
        <div className='row'>
          <span>About Us</span>
          <span>Contact</span>
          <span>Jobs</span>
          <span>Press kit</span>
        </div>
      </div>

      <div className='col '>
        <h3>Legal</h3>
        <div className='row'>
          <span>Terms of use</span>
          <span>Privacy policy</span>
          <span>Cookie policy</span>
          <span>Business policy</span>
        </div>
      </div>

      <div className='col '>
        <h3>Payments</h3>
        <div className='row'>
          <img src={Payment} alt="payments" />
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
