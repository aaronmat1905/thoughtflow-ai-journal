import React from "react"; 
import ReactDOM from "react-dom"; 
import {ProfileCard} from "../Components/profilecard"; 

const img = "https://avatars.githubusercontent.com/u/159543174?v=4"

const ProfilePage = ()=>{
    return(
        <div>
            <p>Your Profile!</p>
            <ProfileCard username = "aaronmat1905" source = {img}/>
        </div>
    )
}

export default ProfilePage; 