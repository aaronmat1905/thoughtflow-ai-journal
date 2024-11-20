import React from "react";
import { ProfileCard } from "../Components/profilecard";
import ContentCard from "../Components/ContentCard";

const HomePage = () => {
    return (
        <div className="container">
            <main className="flex-container">
                <section className="left-section">
                    <ProfileCard 
                        username="aaronmat1905" 
                        source="https://avatars.githubusercontent.com/u/159543174?v=4"
                    />
                    <ContentCard
                        title="Thought Prompt"
                        content={
                            <div>
                                <p>WHAT'S ON YOUR MIND?</p>
                                <input 
                                    type="text" 
                                    className="input-field" 
                                    placeholder="Text box"
                                />
                                <button className="button">Chat with AI now</button>
                            </div>
                        }
                    />
                </section>
                
                <section className="right-section">
                    <ContentCard
                        title="Mood Dashboard"
                        content={
                            <ul>
                                <li>Mood Entry 1</li>
                                <li>Mood Entry 2</li>
                                <li>Mood Entry 3</li>
                            </ul>
                        }
                    />
                    
                    <ContentCard
                        title="Your Posts"
                        content={
                            <div>
                                <ul className="posts-list">
                                    <li>Post1</li>
                                    <li>Post2</li>
                                    <li>Post3</li>
                                </ul>
                                <button className="button">Add New Post</button>
                            </div>
                        }
                    />
                </section>
            </main>
        </div>
    );
}

export default HomePage;