import React, { useState } from 'react';

export function WritePost(){
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        content: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Post Submitted:', formData);
        setFormData({ title: '', date: '', content: '' });
    };

    return (
        <div>
            <h1>Write a Post</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
                <br /><br />
                <label htmlFor="date">Date:</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />
                <br /><br />
                <label htmlFor="content">Content:</label>
                <textarea
                    id="content"
                    name="content"
                    rows="4"
                    cols="50"
                    value={formData.content}
                    onChange={handleChange}
                    required
                ></textarea>
                <br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default WritePost;
