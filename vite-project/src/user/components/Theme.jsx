import React, { useState,useEffect } from 'react'

const Theme = () => {
    const [theme,setTheme]= useState(localStorage.getItem('theme'))
   useEffect(() =>{
    if(theme==='dark') {
        document.documentElemnent.classList.add('dark');
    }else{
        document.documentElemnent.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
   },[theme]);

   const toggleTheme = () => {
    
   }
}