import { useState } from 'react';
import { FaTrophy, FaCalendarAlt, FaUsers, FaUserCircle, FaBars, FaClipboardList } from 'react-icons/fa';
import { motion } from "framer-motion";
import Button from '../../components/common/Buttons/ButtonComponent';
import AdminSidebar from './AdminSidebar';

const stats = [
    { icon: <FaUsers />, label: "Total Users", value: 182 },
    { icon: <FaTrophy />, label: "Tournaments", value: 24 },
    { icon: <FaCalendarAlt />, label: "Scheduled Matches", value: 56 },
    { icon: <FaClipboardList />, label: "Reports", value: "View All" },
]

const AdminDashboard = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className='flex flex-col md:flex-row h-screen bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90% p-4 font-sans'>

            <div className="md:hidden flex justify-between items-center mb-4 px-2">
                <button onClick={() => setIsMobileMenuOpen(prev => !prev)} className="text-white text-2xl">
                    <FaBars />
                </button>
                <h1 className="text-xl text-white font-semibold">Dashboard</h1>
            </div>



            <AdminSidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />

            <main className="flex-1 p-4 md:p-6 bg-white/20 backdrop-blur-xl rounded-2xl shadow-lg overflow-y-auto scrollbar-thin scrollbar-thumb-[#e0531f] scrollbar-track-[#f4f4f4]">
                <motion.div
                    className="flex justify-between items-center mb-6 px-2 md:px-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                            Welcome, Admin
                        </h1>
                        <p className="text-sm text-white/70 mt-1"><b>Manage Tournaments and registrations</b></p>
                    </div>

                    <div className="flex items-center gap-3 text-white">
                        <FaUserCircle className="text-4xl" />
                        <div className="text-right">
                            <p className="text-base font-semibold">Admin</p>

                        </div>
                    </div>
                </motion.div>



                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map(({ icon, label, value }, index) => (
                        <div
                            key={index}
                            className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-md p-4 flex items-center gap-4 hover:shadow-lg transition-all"
                        >
                            <div className="text-2xl text-orange-600">{icon}</div>
                            <div>
                                <div className="text-sm text-gray-600">{label}</div>
                                <div className="text-xl font-bold text-gray-800">{value}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 p-2">
                    {[
                        { title: "Total Tournaments", value: 8 },
                        { title: "Ongoing Matches", value: 4 },
                        { title: "Pending Registrations", value: 15 },
                        { title: "Active Registrations", value: 5 },
                        { title: "Completed Tournaments", value: 3 },
                    ].map((card, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-lg text-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                            <p className="text-3xl font-bold">{card.value}</p>
                        </motion.div>
                    ))}
                </section>

                <div className="mt-10">
                    <h2 className="text-xl font-semibold mb-4 text-white"><b>Recent Activities</b></h2>
                    <div className="bg-white/20 p-4 rounded-2xl shadow-md text-gray-700">
                        <p>• User Saurabh created a new tournament</p>
                        <p>• 2 matches were updated by Organizer</p>
                        <p>• System report generated: July Week 4</p>
                    </div>
                </div>
                <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-2">

                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-md border border-orange-400/20">
                        <h3 className="text-lg font-semibold text-white mb-4">Manage Tournaments</h3>
                        <p className="text-gray-900 mb-4">Create, edit, or remove tournaments.</p>
                        <Button variant="primary" className="w-full">Go to Tournaments</Button>
                    </div>


                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-md border border-orange-400/20">
                        <h3 className="text-lg font-semibold text-white mb-4">Manage Matches</h3>
                        <p className="text-gray-900 mb-4">Schedule or update upcoming matches.</p>
                        <Button variant="primary" className="w-full">Go to Matches</Button>
                    </div>


                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-md border border-orange-400/20">
                        <h3 className="text-lg font-semibold text-white mb-4">Manage Teams</h3>
                        <p className="text-gray-900 mb-4">View and manage registered teams.</p>
                        <Button variant="primary" className="w-full">Go to Teams</Button>
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
                <section className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg text-white">
                    <h2 className="text-xl font-semibold mb-4"><b>Registration Overview</b></h2>

                    <div className="overflow-x-auto rounded-lg">
                        <table className="min-w-full text-left">
                            <thead>
                                <tr className="bg-white/10 text-white/80 text-sm uppercase tracking-wider">
                                    <th className="py-3 px-4">Player</th>
                                    <th className="py-3 px-4">Tournament</th>
                                    <th className="py-3 px-4">Status</th>
                                    <th className="py-3 px-4">Date</th>
                                </tr>
                            </thead>
                            <tbody className="text-white text-sm">
                                {[
                                    { player: "Rohit Sharma", tournament: "Knockout Premier", status: "Pending", date: "2025-07-24" },
                                    { player: "Priya Patel", tournament: "Zone Masters", status: "Approved", date: "2025-07-22" },
                                    { player: "Aditya Singh", tournament: "Elite Battle", status: "Rejected", date: "2025-07-20" },
                                ].map((item, index) => (
                                    <tr key={index} className="hover:bg-white/5 transition-all">
                                        <td className="py-3 px-4">{item.player}</td>
                                        <td className="py-3 px-4">{item.tournament}</td>
                                        <td className="py-3 px-4">
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs font-semibold 
                                ${item.status === "Approved"
                                                        ? "bg-green-600/70"
                                                        : item.status === "Rejected"
                                                            ? "bg-red-600/70"
                                                            : "bg-yellow-500/70"
                                                    }`}
                                            >
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4">{item.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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

export default AdminDashboard;
