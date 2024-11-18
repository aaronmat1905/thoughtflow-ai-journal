import React from "react"; 

export function journalEntry(deets){
    return(
        <div>
            <h1 class = "PostHeading">{deets.title}</h1>
            <h2>{deets.date}</h2>
            <p>{deets.text}</p>
        </div>
    ); 
}