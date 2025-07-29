import React from 'react';
import {render,screen} from '@testing-library/react';  //screen ke liye
import '@testing-library/jest-dom';   //data fetch ke liye late hua delay hua toh ruk ke process karega

import Hero from '../home/Hero.js';
describe('Hero Component',()=>{
    test("Renders hero img",()=>{
   render(<Hero></Hero>)
 const heroImage = screen.getByAltText("Hero-image"); //wo doc ka alt text me hero-img hona chahiye
 expect(heroImage).toBeInTheDocument(); //woh screen me available hona chahiye document me hona chahiye
 expect(heroImage).toHaveAttribute("src","Media/homeHero.png") //uske attribute me yeh same src hona chahiye
    });
    test("Renders signup butt",()=>{
        render(<Hero></Hero>)
        const signupButton = screen.getByRole("button",{name: /sign up for free/i}); 
        expect(signupButton).toBeInTheDocument(); //woh screen me available hona chahiye document me hona chahiye
        expect(signupButton).toHaveClass("btn-primary") 
    });
})

