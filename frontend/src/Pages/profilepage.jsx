import React from "react";
import { ProfileCard } from "../Components/profilecard";
import ContentCard from "../Components/ContentCard";

const ProfilePage = () => {
    return (
        <div className="container">
            <ContentCard
                title="Your Profile"
                content={
                    <ProfileCard 
                        username="aaronmat1905" 
                        source="https://avatars.githubusercontent.com/u/159543174?v=4"
                    />
                }
            />
        </div>
    );
}

export default ProfilePage;