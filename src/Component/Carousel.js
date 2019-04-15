import './Carousel.css';
import React,{Component} from 'react';
import Card from '../Container/card';
import math from 'mathjs';
class Carousel extends Component {
  state=
  {
  cards : [{
      number: 20,
      title: "OCEAN",
      details: 'Water',
      display:true,
      price:'$100'
    },
    {
      number: 30,
      title: "HILLS",
      details: 'Land',
      display:true,
      price:'$150'
    },
    {
      number: 40,
      title: "NIGHT",
      details: 'Time',
      display:true,
      price:'$80'
    }
    ,
    {
      number: 50,
      title: "DAY",
      details: 'Time',
      display:true,
      price:'$80'
    }
    ,
    {
      number: 60,
      title: "SUMMER",
      details: 'Season',
      display:true,
      price:'$80'
    }
    ,
    {
      number: 70,
      title: "MOUNTAIN",
      details: 'Land',
      display:true,
      price:'$80'
    }
    
   

  ]
}
componentDidMount()
{
  this.number ={};
  this.number['OCEAN']=this.state.cards[0].number;
  this.number['HILLS']=this.state.cards[1].number;
  this.number['NIGHT']=this.state.cards[2].number;
  this.number['DAY']=this.state.cards[3].number;
  this.number['SUMMER']=this.state.cards[4].number;
  this.number['MOUNTAIN']=this.state.cards[5].number;
}
previous = ()=>
{
  console.log("clicked previous");
  const persons = [...this.state.cards];
  persons.map(person=>{
    return(person.number-=1)
  });
console.log(persons);
  
  this.setState( { cards: persons } );
  console.log(this.state.cards);
}
next= ()=>
{
  console.log("clicked previous");
  const persons = [...this.state.cards];
  persons.map(person=>{
    person.number+=1;
    return(0);
  });
  this.setState( { cards: persons } );
}
clickhandler=(index,title)=>
{

  const persons = [...this.state.cards];
  persons.map(person=>{
    
    if (person.title===title){
      person.number=this.number[title]+index;

    return (1)}
    else {return (0);}
  });
  this.setState( { cards: persons } );

}
clickHandler_price=(title)=>
{
  const persons = [...this.state.cards];
  console.log("pressed card")
  persons.map(person=>{
    console.log(title);
    if(person.display && person.title===title)
    {
    person.display=false;
    }
    else 
    {
      person.display=true;
    }
return (0); 
  });
  this.setState({cards:persons})
}

render(){
  let f=<div><a className="left_pos" onClick={this.previous}>&#10094;</a><a className="next" onClick={this.next}>&#10095;</a></div>;
  return (
    
<div >

      <div className="show" > 

      {
        this.state.cards.map((ard,index)=> {
          return <Card key ={ard.title}
                       number = {ard.number} 
                       title = {ard.title}
                       details = {ard.details} 
                       hello={this.clickhandler}
                       click={this.clickHandler_price}
                       display={ard.display}
                       price={ard.price}
                       />
                       
         })
      } 
      </div> 
      </div>
  );}

}


export default Carousel;