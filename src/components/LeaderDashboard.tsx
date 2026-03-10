'use client'
import { useRouter } from 'next/navigation'
import React, { useContext, useMemo, useState } from 'react'
import { userData } from '@/context/UserContext'
import { motion } from 'framer-motion'
import FlipLink from './FlipLink'
import TransitionLink from './TransitionLink'
import { IoArrowBack } from 'react-icons/io5'

interface User {
  _id: string;
  name: string;
  email: string;
  institution: string;
  dept: string;
  year: string;
  phone: string;
  eventsRegistered: string[]; 
}

interface TeamMember {
  status: string;
  user: User | null;
}

interface Team {
  _id: string;
  teamName: string;
  eventName: string;
  status: string;
  leader: User | null;
  members: TeamMember[];
}

interface DashboardProps {
  users: User[]; 
  teams: Team[]; 
}

export default function LeaderDashboard({ users, teams }: DashboardProps) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const data = useContext(userData)

  const [activeTab, setActiveTab] = useState("All Participants");
  
  const navItems = ["All Participants", "algomaniac", "aboltabol", "decisia", "inquizzitive", "sparkhack", "jutalks", "eureka", "circuistics", "frames"];
  const soloEvents = ["algomaniac", "jutalks", "frames"];
  const teamEvents = ["aboltabol", "decisia", "inquizzitive", "sparkhack", "eureka", "circuistics"];
  
  const displayNames: { [key: string]: string } = {
    "algomaniac": "Algomaniac",
    "aboltabol": "Abol Tabol",
    "decisia": "Decisia",
    "inquizzitive": "Inquizzitive",
    "sparkhack": "SparkHack",
    "jutalks": "JuTalks",
    "eureka": "Eureka",
    "circuistics": "Circuistics",
    "frames": "24 Frames"
  };

  const filteredUsers = useMemo(() => {
    if (activeTab === "All Participants") return users;
    return users.filter(user => user.eventsRegistered.includes(activeTab));
  }, [activeTab, users]);

  const filteredTeams = useMemo(() => {
    return teams.filter(team => team.eventName === activeTab);
  }, [activeTab, teams]);

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col items-center px-6 md:px-10 pt-10 pb-10 font-rajdhani text-gray-900'>
      
      <div className="w-full max-w-7xl mx-auto space-y-10">
        
        <TransitionLink
        href="/lead-dashboard"
        className="flex absolute top-6 left-6 z-50 items-center gap-2 px-4 py-2 sm:py-2.5 bg-white border border-gray-200 hover:border-[#1BA0E8] hover:shadow-md rounded-full transition-all duration-300 shadow-sm group cursor-pointer overflow-hidden"
      >
        <IoArrowBack className="text-gray-500 group-hover:text-[#1BA0E8] text-lg group-hover:-translate-x-1 transition-all duration-300" />
        <span className="font-orbitron text-xs font-bold tracking-[0.1em] text-gray-700 group-hover:text-[#1BA0E8] uppercase transition-colors"><FlipLink>Back</FlipLink></span>
      </TransitionLink>
        

        {/* Header */}
        <div className="flex flex-col gap-2 text-center mt-10 sm:mt-0">
          <h1 className='sm:text-3xl text-2xl font-orbitron font-bold text-gray-900'>Preview Dashboard</h1>
          <p className="text-gray-500 font-medium">Detailed preview of all participant and team registrations</p>
        </div>

        {/* Navbar*/}
        <div className="p-1.5 bg-white shadow-sm border border-gray-200 rounded-xl w-full overflow-x-auto no-scrollbar">
          <ul className='flex justify-between w-full'>
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => setActiveTab(item)}
                className="relative px-4 py-2 rounded-lg cursor-pointer text-sm font-bold transition-colors duration-200 whitespace-nowrap"
              >
                {activeTab === item && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 bg-[#1BA0E8] rounded-lg shadow-sm"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 ${activeTab === item ? "text-white" : "text-gray-500 hover:text-gray-900"}`}>
                  {item === "All Participants" ? item : displayNames[item] || item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Data table container */}
        <div className="bg-white border border-gray-100 shadow-sm rounded-xl overflow-hidden w-full border-t-4 border-t-[#1BA0E8]">
          <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-white">
            <h2 className="text-xl font-orbitron font-bold text-gray-800">
              {activeTab === "All Participants" ? activeTab : displayNames[activeTab] || activeTab}
            </h2>
            <span className="text-xs bg-[#1BA0E8]/10 text-[#1BA0E8] font-bold px-3 py-1.5 rounded-md">
              Total {teamEvents.includes(activeTab) ? "Teams" : "Users"}: {teamEvents.includes(activeTab) ? filteredTeams.length : filteredUsers.length}
            </span>
          </div>

          <div className="overflow-x-auto max-h-[70vh] no-scrollbar">
            <table className="w-full text-left text-sm text-gray-600">
              <thead className="bg-gray-50 text-gray-800 uppercase font-bold text-sm tracking-wider sticky top-0 z-20 shadow-sm">
                <tr>
                  {teamEvents.includes(activeTab) && <th className="px-6 py-4 whitespace-nowrap">Team Name</th>}
                  {teamEvents.includes(activeTab) && <th className="px-6 py-4 whitespace-nowrap">Role</th>}
                  <th className="px-6 py-4 whitespace-nowrap">Name</th>
                  <th className="px-6 py-4 whitespace-nowrap">Email</th>
                  <th className="px-6 py-4 whitespace-nowrap">Contact No.</th>
                  <th className="px-6 py-4 whitespace-nowrap">Institution</th>
                  <th className="px-6 py-4 whitespace-nowrap">Department</th>
                  {activeTab === "All Participants" && <th className="px-6 py-4 whitespace-nowrap">Events</th>}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">

                {/*Team events*/}
                {teamEvents.includes(activeTab) ? (
                  filteredTeams.length > 0 ? (
                    filteredTeams.map((team, index) => (
                      <React.Fragment key={team._id}>
                        {/* Leader Row */}
                        {team.leader && (
                          <tr className={`transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'} hover:bg-gray-50`}>
                            <td className="px-2 py-4 font-orbitron font-bold text-gray-900 whitespace-nowrap">{team.teamName}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="bg-blue-50 text-blue-600 font-bold px-2.5 py-1 rounded text-[11px] uppercase tracking-wide border border-blue-100">Leader</span>
                            </td>
                            <td className="px-2 py-4 font-bold text-gray-950 whitespace-nowrap">{team.leader.name}</td>
                            <td className="px-2 py-4 whitespace-nowrap font-semibold">{team.leader.email}</td>
                            <td className="px-2 py-4 whitespace-nowrap font-semibold">{team.leader.phone}</td>
                            <td className="px-2 py-4 max-w-[200px] truncate font-semibold">{team.leader.institution}</td>
                            <td className="px-2 py-4 whitespace-nowrap font-semibold">{team.leader.dept} - {team.leader.year}</td>
                          </tr>
                        )}
                        {/* Member Rows */}
                        {team.members.map((member, idx) => (
                          member.user && (
                            <tr key={`${team._id}-member-${idx}`} className={`transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'} hover:bg-gray-50`}>
                              <td className="px-6 py-4 whitespace-nowrap text-gray-600 font-medium text-right pr-10">↳</td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="bg-gray-100 text-gray-500 font-bold px-2.5 py-1 rounded text-[11px] uppercase tracking-wide border border-gray-200">
                                  Member
                                </span>
                              </td>
                              <td className="px-2 py-4 font-bold text-gray-950 whitespace-nowrap">{member.user.name}</td>
                              <td className="px-2 py-4 whitespace-nowrap font-semibold">{member.user.email}</td>
                              <td className="px-2 py-4 whitespace-nowrap font-semibold">{member.user.phone}</td>
                              <td className="px-2 py-4 max-w-[200px] truncate font-semibold">{member.user.institution}</td>
                              <td className="px-2 py-4 whitespace-nowrap font-semibold">{member.user.dept} - {member.user.year}</td>
                            </tr>
                          )
                        ))}
                      </React.Fragment>
                    ))
                  ) : (
                    <tr><td colSpan={7} className="px-6 py-12 text-center text-gray-400 font-bold text-lg">No teams found for {displayNames[activeTab]}.</td></tr>
                  )
                  // solo
                ) : (
                  filteredUsers.length > 0 ? (
                    filteredUsers.map((user, index) => (
                      <tr key={user._id} className={`transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'} hover:bg-gray-50`}>
                        <td className="px-4 py-4 font-bold text-gray-950 whitespace-nowrap">{user.name}</td>
                        <td className="px-4 py-4 whitespace-nowrap font-semibold">{user.email}</td>
                        <td className="px-4 py-4 whitespace-nowrap font-semibold">{user.phone}</td>
                        <td className="px-4 py-4 max-w-[200px] truncate font-semibold">{user.institution}</td>
                        <td className="px-4 py-4 whitespace-nowrap font-semibold">{user.dept} - {user.year}</td>
                        
                        {activeTab === "All Participants" && (
                          <td className="px-6 py-4">
                            <div className="flex gap-1.5 flex-wrap min-w-[120px]">
                              {user.eventsRegistered.map((e) => (
                                e === '--' ? (
                                  <span key={e} className="text-[12px] bg-red-50 text-red-500 px-2 py-1 rounded font-bold whitespace-nowrap border border-red-100">
                                    Not Participated
                                  </span>
                                ) : (
                                  <span key={e} className="text-[12px] bg-[#1BA0E8]/10 text-[#1BA0E8] px-2 py-1 rounded font-bold whitespace-nowrap border border-[#1BA0E8]/20">
                                    {e}
                                  </span>
                                )
                              ))}
                            </div>
                          </td>
                        )}
                      </tr>
                    ))
                  ) : (
                    <tr><td colSpan={6} className="px-6 py-12 text-center text-gray-400 font-bold text-lg">No participants found.</td></tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}