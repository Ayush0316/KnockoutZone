import React from "react"
import { FaHome, FaPlusCircle, FaCalendarAlt, FaUsers, FaSignOutAlt, FaClipboardList ,FaClipboardCheck,FaListAlt} from "react-icons/fa"
import Button from "../../components/common/Buttons/ButtonComponent"

const AdminSidebar = ({ isMobileMenuOpen }) => {
    return (
        <aside
            className={`w-full md:w-[250px] max-h-screen overflow-y-auto bg-gradient-to-b from-black/60 to-gray-900/80 backdrop-blur-xl rounded-2xl text-white shadow-lg transition-all duration-500 
    ${isMobileMenuOpen ? 'flex' : 'hidden md:flex'} flex-col justify-between mb-4 md:mb-0 md:mr-6 p-4 md:p-6 text-white shadow-lg`}
        >

            {/* Top Section */}
            <div>
                <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>

                <ul className="space-y-4 text-base md:text-lg">
                    {[
                        { icon: <FaHome />, label: "Home" },
                        { icon: <FaPlusCircle />, label: "Create Tournament" },
                        { icon: <FaCalendarAlt />, label: "Matches" },
                        { icon: <FaUsers />, label: "Manage Users" },
                        { icon: <FaListAlt />, label: "My Tournaments" },
                        { icon: <FaClipboardCheck />, label: "Manage Registrations" },
                        { icon: <FaCalendarAlt />, label: "Schedule Matches" },
                        { icon: <FaClipboardList />, label: "Reports" },

                    ].map(({ icon, label }, idx) => (
                        <li
                            key={idx}
                            className="relative group cursor-pointer transition-transform duration-300 hover:scale-105"
                        >
                            <div className="absolute inset-0 rounded-md bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-0 shadow-md group-hover:shadow-blue-500/20"></div>
                            <div className="flex items-center gap-3 relative z-10 px-3 py-2  group-hover:text-blue-400 group-hover:drop-shadow-md">
                                {icon} {label}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Bottom Logout Button */}
            <div className="mt-6 md:mt-10">
                <Button
                    variant="danger"
                    size="default"
                    className="w-full flex items-center gap-2 justify-center"
                >
                    <FaSignOutAlt /> Logout
                </Button>
            </div>
        </aside>

    )
}

export default AdminSidebar;