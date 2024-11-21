import React from "react";
import ContentCard from "../Components/ContentCard";

export default function AboutPage() {
    return (
        <div className="container">
            <ContentCard 
                title="About Thoughtflow AI"
                content={(
                    <div>
                        <p>
                            Thoughtflow AI is your personalized AI-powered journal and life coach, designed to help you reflect, track your emotions, and unlock your potential. With sentiment analysis and deep insights, Thoughtflow guides you through your daily thoughts and experiences, helping you grow and improve every day.
                        </p>
                        <p>
                            Whether you're journaling for self-improvement, emotional well-being, or simply capturing your thoughts, Thoughtflow adapts to your needs. The platform uses advanced AI to analyze your entries, offering feedback, personalized suggestions, and prompts to inspire reflection.
                        </p>
                        <div className="team-members">
                            <h4>Our Team:</h4>
                            <ul>
                                <li><strong>Aman</strong> - PES1UG12AM040</li>
                                <li><strong>Aaron</strong> - PES1UG23AM005</li>
                                <li><strong>Pranav</strong> - PES1UG24AM804</li>
                            </ul>
                        </div>
                    </div>
                )}
            />
        </div>
    );
}
