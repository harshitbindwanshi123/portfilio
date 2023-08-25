import React from 'react'
import './home.css'
import harshit from '../../images/harshit.jpeg'
const MyDive = () => {
  return (
    
 <div className='main'>




<div className='home'> 

<div className='left'>
<div className='hithere'><span className='hi'>Hi</span> There,<br></br>I'm Harshit <span>Bindwanshi</span></div>
<div className='Typewiter'>I'm,a <span className='text'>Web Developer</span></div>
{/* <script>
  const text =document.queryselector('.sec-text');
  const textload = () = {
setTimeout(() => {
  textFieldClasses.textcontent='freelancer';

},0)
  }
  textload();
</script> */}
<div className='button1'>
 <button type='button'> About Me</button><i class="fa-solid fa-circle-chevron-right"></i> 
  <button type='button'>Lern More</button><i class="fa-solid fa-circle-chevron-right"></i>
  </div>

<div className='icon'>
  <i style={{color:"blue"}} class="fa-brands fa-facebook fa-2x"></i>
  <i style={{color:"red"}} class="fa-brands fa-instagram fa-2x"></i>
  <i style={{color:"green"}} class="fa-brands fa-whatsapp fa-2x"></i>
  <i style={{color:"red"}} class="fa-brands fa-youtube fa-2x"></i>
  <i style={{color:"blue",opacity:"0.7"}} class="fa-brands fa-twitter fa-2x"></i>

  </div>

</div>

<div className='right center'>

<div className='pic_container'>
<img className='picture' src={harshit} alt='jj' height="500px"></img>
</div>


</div>
</div>





    </div>
  
  )
  }
export default MyDive