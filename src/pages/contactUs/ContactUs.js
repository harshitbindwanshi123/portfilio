import React from 'react'
import './contactus.css'
const ContactUs = () => {
  return (
 <div clsaaName='main_contact'>
      <div className='up_contact'>
        <div className='contact_with_us_text'>Contact With us</div>
        <p>We would love to respond to your queries and help you succeed.feel 
          free to get in touch with us.</p>
      </div>
      <div className='home_contact'>
        
        <div className='left_contact'>
           <h3>Send your requst</h3>
           <form>
            <div className='input_row'>
              <div className='input_group'>
                <label>Name</label>
                <input type='text'placeholder='Enter your name.'></input>
              </div>
              <div className='input_group'>
                <label>Phone</label>
                <input type='text'placeholder='Enter your number.'></input>
              </div>

            </div>
            <div className='input_row'>
              <div className='input_group'>
                <label>Email</label>
                <input type='email'placeholder='Enter your email.'></input>
              </div>
              <div className='input_group'>
                <label>Subject</label>
                <input type='text'placeholder='Product Demo'></input>
              </div>
            </div>
            <label>Massage</label>
            <textarea rows='5' placeholder='Your Massage'></textarea>
            < div className='button_contact'>SEND</div>
           </form>
          
        </div>
        <div className='right_contact'>
          <h3>Reach Us</h3>
          <table>
            <tr>
              <td>Email</td>
              <td>harshitbindwanshi@gmail.com</td>
              </tr>
              <tr>
              <td>Phone</td>
              <td>8521228811</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>Sahibganj,bind toli ,po-champanagar ps-nathnagar,Bhagalpur Bihar 812004</td>
            </tr>
          </table>
        </div>
      </div>
    </div>


  )
}

export default ContactUs