
import React, { useState } from 'react';
import {  FaBars,FaUserCircle } from 'react-icons/fa';

import PlayerSidebar from './PlayerSidebar';
import { motion } from "framer-motion";

const PlayerDashboard = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className='flex flex-col md:flex-row h-screen bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90% p-4 font-sans'>

            
            <div className="md:hidden flex justify-between items-center mb-4 px-2">
                <button onClick={() => setIsMobileMenuOpen(prev => !prev)} className="text-white text-2xl">
                    <FaBars />
                </button>
                <h1 className="text-xl text-white font-semibold">Dashboard</h1>
            </div>


            
            <PlayerSidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />

            <main className="flex-1 p-4 md:p-6 bg-white/20 backdrop-blur-xl rounded-2xl shadow-lg overflow-y-auto scrollbar-thin scrollbar-thumb-[#e0531f] scrollbar-track-[#f4f4f4]">
                <motion.div
                    className="flex justify-between items-center mb-6 px-2 md:px-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                            Welcome, Player👋
                        </h1>
                        <p className="text-sm text-white/70 mt-1"><b>Here’s your match dashboard</b></p>
                    </div>

                    <div className="flex items-center gap-3 text-white">
                        <FaUserCircle className="text-4xl" />
                        <div className="text-right">
                            <p className="text-base font-semibold">Player</p>

                        </div>
                    </div>
                </motion.div>

              
                <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    
                    <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-lg text-white">
                        <h3 className="text-lg font-semibold mb-2">Total Tournaments</h3>
                        <p className="text-3xl font-bold">12</p>
                    </div>

                    
                    <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-lg text-white">
                        <h3 className="text-lg font-semibold mb-2">Active Registrations</h3>
                        <p className="text-3xl font-bold">5</p>
                    </div>
                </section>



                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-white mb-4"><b>Upcoming Matches</b></h2>
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                teams: "Team Alpha vs Team Beta",
                                date: "July 28, 2025",
                                time: "4:00 PM",
                                status: "Scheduled",
                            },
                            {
                                teams: "Team Omega vs Team Sigma",
                                date: "July 30, 2025",
                                time: "2:30 PM",
                                status: "Scheduled",
                            },
                            {
                                teams: "Team Delta vs Team Theta",
                                date: "August 1, 2025",
                                time: "6:00 PM",
                                status: "Scheduled",
                            },
                        ].map((match, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-white shadow-md hover:shadow-lg transition-all"
                            >
                                <h3 className="text-lg font-semibold mb-2">{match.teams}</h3>
                                <p className="text-sm mb-1">{match.date}</p>
                                <p className="text-sm mb-1">{match.time}</p>
                                <span className="inline-block mt-2 text-sm px-2 py-1 bg-blue-600/80 rounded-full">
                                    {match.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
              
                <section className="mb-6">
                    <h2 className="text-xl font-semibold text-white mb-4"><b>Active Registrations</b></h2>
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                tournament: "Valorant Championship",
                                date: "July 20, 2025",
                                status: "Confirmed",
                            },
                            {
                                tournament: "Rocket League Showdown",
                                date: "July 22, 2025",
                                status: "Pending",
                            },
                            {
                                tournament: "Chess Blitz Cup",
                                date: "July 18, 2025",
                                status: "Rejected",
                            },
                        ].map((registration, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-white shadow-md hover:shadow-lg transition-all"
                            >
                                <h3 className="text-lg font-semibold mb-2">{registration.tournament}</h3>
                                <p className="text-sm mb-1">Registered on: {registration.date}</p>
                                <span
                                    className={`inline-block mt-2 text-sm px-3 py-1 rounded-full
            ${registration.status === "Confirmed" ? "bg-green-500/80" : ""}
            ${registration.status === "Pending" ? "bg-yellow-500/80" : ""}
            ${registration.status === "Rejected" ? "bg-red-500/80" : ""}
          `}
                                >
                                    {registration.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

               
                <section>
                    <h2 className="text-xl font-semibold text-white mb-4"><b>Recent Results</b></h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            {
                                id: 1,
                                tournament: "Valorant Championship",
                                match: "Team Phoenix vs Team Viper",
                                winner: "Team Phoenix",
                                date: "July 19, 2025",
                            },
                            {
                                id: 2,
                                tournament: "Chess Blitz Cup",
                                match: "Alice vs Bob",
                                winner: "Alice",
                                date: "July 18, 2025",
                            },
                            {
                                id: 3,
                                tournament: "Rocket League Showdown",
                                match: "Boost Kings vs Nitro Warriors",
                                winner: "Nitro Warriors",
                                date: "July 17, 2025",
                            },
                        ].map((result) => (
                            <div
                                key={result.id}
                                className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-white shadow-md hover:shadow-lg transition-all"
                            >
                                <h3 className="text-lg font-bold mb-1 ">{result.tournament}</h3>
                                <p className="text-sm text-gray-700 ">{result.match}</p>
                                <p className="text-sm text-green-600 mt-1">Winner: {result.winner}</p>
                                <p className="text-xs text-gray-900 mt-2">Played on {result.date}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </main>
        </div>
    );
};

export default PlayerDashboard;
