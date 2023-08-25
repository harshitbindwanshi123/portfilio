import './projects.css'
import image from '../../images/image.jpg'
function Project(){

  return(
    <div>
<div className="card_main">

<div className="card">
<img className='food_image' src={image} alt="abcd"/>

<div className="details">
<div className="project_name">Project Name : Calculator</div>
<div className="project_detail">Project Detail : Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, molestias hic voluptas dolore aut voluptatem nihil ipsam nemo illum quas necessitatibus quae, architecto vel sint assumenda esse temporibus reiciendis aliquam.</div>
<div className="language_used">Language Used: html, css, React</div>
</div>


<div className="overlay"></div>

<div className="buttons">
<button className="view">View</button>
<button className="demo">Demo</button>
</div>



</div>




</div>

      
    </div>
  );
}

export default Project;