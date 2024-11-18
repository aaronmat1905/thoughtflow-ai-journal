import React from "react"; 

export function ProfileCard(deets){
    return(
        <div className = "profile-card">
            <img src = {deets.source}/>
            <h3>Welcome, @{deets.username}!</h3>
            <h3>What's on your mind!</h3>
            {/* <Button>Chat with AI now</Button> */}
        </div>
    ); 
}