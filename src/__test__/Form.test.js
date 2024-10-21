import Form from "../components/Form";
import React from "react";
import {fireEvent, render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";


test("it should change form state from sign-in to sign-up",()=>{
    //1step: Render/load  component to JSDOM
    render(<Form/>)
    //2step:querying/assuming
    const state1 = screen.getByText("Sign up now.")
    //3step:FireEvent
    fireEvent.click(state1);
   //4step:querying/assuming
   const state2 = screen.getByText("Sign in now.")
   //5step:asserting
   expect(state2).toBeInTheDocument();

})