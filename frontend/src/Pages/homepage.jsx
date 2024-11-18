import React from "react"; 
import ReactDOM from "react-dom"; 
import {ProfileCard} from "../Components/profilecard";

export const HomePage = ()=>{
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
            <main class="p-4 flex space-x-4">
                <section class="bg-gray-800 p-4 rounded-lg w-1/3">
                    <ProfileCard username = "aaronmat1905" source = "https://avatars.githubusercontent.com/u/159543174?v=4"/>
                    <p class="text-center">WHAT'S ON YOUR MIND?</p>
                    <input type="text" class="w-full p-2 mt-2 bg-gray-700 rounded" placeholder="Text box"/>
                    <button class="w-full bg-purple-600 p-2 mt-2 rounded">Chat with AI now</button>
                </section>
                <section class="bg-gray-800 p-4 rounded-lg w-2/3">
                    <h2 class="text-xl font-bold">Mood Dashboard</h2>
                    <ul class="mt-2">
                        <li>Mood Entry 1</li>
                        <li>Mood Entry 2</li>
                        <li>Mood Entry 3</li>
                    </ul>
                    <div class="mt-4">
                        <h3 class="bg-purple-600 p-2 rounded-t-lg">Your posts</h3>
                        <ul class="bg-gray-700 p-2 rounded-b-lg space-y-2">
                            <li class="bg-gray-600 p-2 rounded">Team Handbook</li>
                            <li class="bg-gray-600 p-2 rounded">Annual Report</li>
                            <li class="bg-gray-600 p-2 rounded">Project Reports</li>
                        </ul>
                        <button class="w-full bg-gray-600 p-2 mt-2 rounded">Add New Post</button>
                    </div>
                </section>
            </main>
            <footer class="bg-purple-600 p-4 flex justify-around">
                <a href="#" class="text-white">View Profile</a>
                <a href="#" class="text-white">Add New Post</a>
                <a href="#" class="text-white">Mood Dashboard</a>
            </footer>
        </div>
    );
}


    
