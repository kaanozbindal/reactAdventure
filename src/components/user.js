import React, { Component } from 'react';

class User extends Component {
  render(){

   let people = [
       "kaan ozbindal",
       "furkan evirgen",
       "linus torvalds",
       "atakan",
       "obama"
     ]
     function random(){
       let index = Math.floor(Math.random()* people.length)
       return index
     }
     function getInfo(){
       let killerID = random()
          return (people[killerID])
       //return people[killerID]
     }


     //let buton = <div></div>
    return <div>
      <div>
 <button onClick={function bastir(){document.getElementById("murder-header").innerHTML = getInfo()}}> Who is your killer</button>  
        <h1 id='murder-header'> WHO IS YOUR KILLERt</h1>

      </div>
     
        

           
        
    </div>;
  }
}
export default User;