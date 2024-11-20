import React from "react";
import ContentCard from "../Components/ContentCard";

export default function AboutPage() {
    return (
        <div className="container">
            <ContentCard 
                title="About Thoughtflow AI"
                content={
                    <div>
                        <p>Your personalized AI-journal and coach</p>
                        <div className="team-members">
                            <h4>Our Team:</h4>
                            <ul>
                                <li>Aman - Lead Developer</li>
                                <li>Aaron - AI Specialist</li>
                                <li>Pranav - UX Designer</li>
                            </ul>
                        </div>
                    </div>
                }
            />
        </div>
    );
}