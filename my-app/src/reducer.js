import { createSlice } from '@reduxjs/toolkit'
 const count=25;


 export default function reducer(state=count,action){
    const{type}=action;
     switch(type){
       case "INCREMENT":
          return count+1     
             break ;

       case "DECREMENT":
             return count-1
       break;
          
         default :   
                return count  
    }
      
    
 }

