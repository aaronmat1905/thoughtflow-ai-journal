import React from "react"; 
import ReactDOM from "react-dom"; 
import {ProfileCard} from "../Components/profilecard";
import "../app.css";

const HomePage = ()=>{
    return (
        <div>
            {/* <header class="bg-purple-600 p-4 flex justify-between items-center">
                <div class="flex items-center">
                    <img src="https://placehold.co/40x40" alt="Logo" class="h-10 w-10 mr-2"/>
                    <h1 class="text-2xl font-bold">Thoughtflow</h1>
                </div>
                <nav class="space-x-4">
                    <a href="#" class="text-white">Write</a>
                    <a href="#" class="text-white">View Profile</a>
                    <a href="#" class="text-white">About</a>
                </nav>
            </header> */}
                    <main className="p-4 flex space-x-4">
            <section className="bg-gray-800 p-4 rounded-lg w-1/3">
                <ProfileCard username="aaronmat1905" source="https://avatars.githubusercontent.com/u/159543174?v=4"/>
                <p className="text-center">WHAT'S ON YOUR MIND?</p>
                <input type="text" className="w-full p-2 mt-2 bg-gray-700 rounded" placeholder="Text box"/>
                <button className="w-full bg-purple-600 p-2 mt-2 rounded">Chat with AI now</button>
            </section>
            <section className="bg-gray-800 p-4 rounded-lg w-2/3">
                <h2 className="text-xl font-bold">Mood Dashboard</h2>
                <ul className="mt-2">
                    <li>Mood Entry 1</li>
                    <li>Mood Entry 2</li>
                    <li>Mood Entry 3</li>
                </ul>
                <div className="mt-4">
                    <h3 className="bg-purple-600 p-2 rounded-t-lg">Your posts</h3>
                    <ul className="bg-gray-700 p-2 rounded-b-lg space-y-2">
                        <li className="bg-gray-600 p-2 rounded">Post1</li>
                        <li className="bg-gray-600 p-2 rounded">Post2</li>
                        <li className="bg-gray-600 p-2 rounded">Post3</li>
                    </ul>
                    <button className="w-full bg-gray-600 p-2 mt-2 rounded">Add New Post</button>
                </div>
            </section>
        </main>
        <footer className="bg-purple-600 p-4 flex justify-around">
            <a href="#" className="text-white">View Profile</a>
            <a href="#" className="text-white">Add New Post</a>
            <a href="#" className="text-white">Mood Dashboard</a>
        </footer>
        </div>
    );
}

export default HomePage; 