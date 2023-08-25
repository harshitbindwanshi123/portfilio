import React from 'react'
import './skill.css'
import { colors } from '@mui/material'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

const Skill = () => {
  return (
  <div className='main_skill'>
    <div className='home_skill'>
    <div className='up_skill'>
      <div className='my_skill'><span>My skills</span></div>
      <div className='i_like'><span>I Like To Craft Beautiful And Scalable Web Products</span></div>
    </div>
    <div className='home2_skill'>
      <div className='left_skill'>

        
        {/* <div className='design'></div>
        <div className='clean'></div>
        <div className='technology'>Technology</div>
        <div className='combined'>Combined all the latest technology to a pprogressive website.</div>
        <div className='always'>Always Responsive</div>
        <div className='responsive'>A responsive design makes your website accessible to all users,regardless of their device.</div> */}
              </div>

      <div className='right_skill'>
      <div className='html1'>
          <div className='html2'>
            <div className='html3'>HTMLS</div>
            
          </div>
        </div>
        <div className='css1'>

          <div className='css2'>
            <div className='css3'>CSS3</div>
            

          </div>
        </div>
        <div className='jquery1'>
          <div className='jquery2'>
            <div className='jquery3'>JQUERY</div>
          </div>
        </div>
        <div className='php1'>
          <div className='php2'>
            <div className='php3'>PHP</div>
          </div>
        </div>
        
        <div className='wordpress1'>
          <div className='wordpress2'>
            <div className='wordpress3'>Wordpress</div>
        </div>
        </div>
        <div className='seo1'>
          <div className='seo2'>
            <div className='seo3'>SEO</div>
          </div>
        </div>
        <div className='photoshop1'>
          <div className='photoshop2'>
            <div className='photoshop3'>Photoshop</div>
          </div>
        </div>

      </div>
    </div>
    </div>



  </div>

  )
}

export default Skill