import React, { useEffect } from "react";
import { useDiary } from "../diary";
import ContentCard from "../Components/ContentCard";
import { PostCard } from "../Components/postcard";

export function SearchPosts() {
    const { uposts, fetchPosts } = useDiary();

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className="container">
            <ContentCard
                title="Your Journal Entries"
                content={
                    uposts.length === 0 ? (
                        <p>No journal entries yet. Start writing!</p>
                    ) : (
                        <div className="posts-grid">
                            {uposts.map((post) => (
                                <PostCard key={post._id} post={post} />
                            ))}
                        </div>
                    )
                }
            />
        </div>
    );
}

export default SearchPosts;