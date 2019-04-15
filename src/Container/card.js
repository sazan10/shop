import React from 'react';
import './card.css';
const card =(props)=>
{  let url='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20('+props.number+').jpg';
let digits = props.number.toString().split('');
let realDigits = digits.map(Number);
let value = realDigits[1];
let class1="dot1";
let class2="dot2";
let class3="dot3";
switch (value){
  case 9:
  class1="dot1 active";
  break;
  case 0:
  class2="dot2 active";
  break;
  case 1:
  class3="dot3 active";
  break;
  default:
}
let button=null;
if(props.display)
{
  button =<p>{props.price}</p>;
}
else 
{

// button = <a className="btn btn-primary" onClick={()=>props.click(props.title)}>Buy</a>
button = <a className="btn btn-primary" >Buy</a>

}
  
    return (
   <div className="cardA">
          <img className="card-img-top" src={url}
            alt="Card image cap" onClick={()=>props.click(props.title)}/>
          <div className="card-body">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text">{props.details}</p>

<div>
  <span className={class1} onClick={()=>props.hello(-1,props.title)}></span> 
  <span className={class2} onClick={()=>props.hello(0,props.title)} ></span> 
  <span className={class3} onClick={()=>props.hello(1,props.title)}></span> 
</div>
       {button}
          </div>
        </div>
    
    );

    function hello()
    {
      console.log("clicked");
    }
}
export default card;