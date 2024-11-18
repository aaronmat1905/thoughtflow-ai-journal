import React from "react"; 
import ReactDOM from "react-dom"; 
import {ProfileCard} from "../Components/profilecard"; 

export const ProfilePage = ()=>{
    return(
        <div>
            <p>Your Profile!</p>
            <ProfileCard username = "aaronmat1905" source = "C:\Users\Aaron\Downloads\WhatsApp_Image_2024-10-24_at_1.57.20_AM-removebg-preview.png"/>
        </div>
    )
}