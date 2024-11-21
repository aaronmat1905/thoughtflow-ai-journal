import React, { useEffect, useState } from "react";
import { ProfileCard } from "../Components/profilecard";
import ContentCard from "../Components/ContentCard";
import { useDiary } from "../diary"; 
import { useNavigate } from "react-router-dom"; 

const HomePage = () => {
    const { uposts, fetchPosts, createPosts } = useDiary();
    const [newPost, setNewPost] = useState({ title: "", date: "", text: "" });
    const navigate = useNavigate();

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPost((prev) => ({ ...prev, [name]: value }));
    };

    const handleCreatePost = async () => {
        const result = await createPosts(newPost);
        alert(result.message);
        if (result.success) {
            setNewPost({ title: "", date: "", text: "" }); // Clear the input fields
        }
    };

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
                                    name="text"
                                    value={newPost.text}
                                    onChange={handleInputChange}
                                    className="input-field" 
                                    placeholder="Text box"
                                />
                                <button className="button" onClick={() => navigate("/chat")}>Chat with AI now</button>
                            </div>
                        }
                    />
                </section>
                <section>
                    <ContentCard
                        title="Your Posts"
                        content={
                            <div>
                                <ul className="posts-list">
                                    {uposts.length > 0 ? (
                                        uposts.map((post) => (
                                            <li key={post._id}>{post.title}</li>
                                        ))
                                    ) : (
                                        <li>No posts available</li>
                                    )}
                                </ul>
                                <input 
                                    type="text" 
                                    name="title"
                                    value={newPost.title}
                                    onChange={handleInputChange}
                                    className="input-field" 
                                    placeholder="Post Title"
                                />
                                <input 
                                    type="date" 
                                    name="date"
                                    value={newPost.date}
                                    onChange={handleInputChange}
                                    className="input-field" 
                                />
                                <textarea 
                                    name="text"
                                    value={newPost.text}
                                    onChange={handleInputChange}
                                    className="input-field" 
                                    placeholder="Write your post..."
                                />
                                <button className="button" onClick={handleCreatePost}>Add New Post</button>
                                <button className="button" onClick={() => navigate("/write-post")}>Go to Write Post</button>
                            </div>
                        }
                    />
                </section>
                <section>
                    <ContentCard
                        title="Motivational Messages"
                        content={
                            <div>
                                <p>"Your mental health is a priority. Your happiness is essential. Your self-care is a necessity."</p>
                                <p>"It's okay to not be okay. Just remember that you are not alone."</p>
                                <p>"Believe you can and you're halfway there." - Theodore Roosevelt</p>
                            </div>
                        }
                    />
                </section>
            </main>
        </div>
    );
}

export default HomePage;