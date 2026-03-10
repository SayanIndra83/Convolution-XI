import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import dbConnect from '@/lib/db'; 
import User from '@/models/user.model';
import Team from '@/models/team.model';
import LeaderDashboard from '@/components/LeaderDashboard'; 

export const dynamic = 'force-dynamic';

export default async function PreviewDashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session || session.user?.role !== 'LEAD') {
    redirect('/lead-access'); 
  }

  await dbConnect();

  const users = await User.find({ isVerified: true })
    .select('name email institution department year phone eventsRegistered createdAt')
    .sort({ createdAt: -1 })
    .lean();

  const serializedUsers = users.map((user: any) => ({
    _id: user._id.toString(),
    name: user.name || "Unknown",
    email: user.email || "No Email",
    institution: user.institution || "N/A",
    dept: user.department || "N/A",
    year: user.year || "N/A",
    phone: user.phone || "N/A",
    eventsRegistered: (user.eventsRegistered && user.eventsRegistered.length > 0) ? user.eventsRegistered : ['--'],
  }));


  const teams = await Team.find({})
    .sort({ createdAt: -1 })
    .populate('leader', 'name email phone institution department year _id')
    .populate('members.user', 'name email phone institution department year _id')
    .lean();

  const serializedTeams = teams.map((t: any) => ({
    _id: t._id.toString(),
    teamName: t.teamName,
    eventName: t.eventName?.toLowerCase() || "",
    status: t.status,
    leader: t.leader ? {
      _id: t.leader._id?.toString() || "",
      name: t.leader.name || "Unknown",
      email: t.leader.email || "No Email",
      institution: t.leader.institution || "N/A",
      dept: t.leader.department || "N/A",
      year: t.leader.year || "N/A",
      phone: t.leader.phone || "N/A",
      eventsRegistered: [],
    } : null,
    members: t.members?.map((m: any) => ({
      status: m.status,
      user: m.user ? {
        _id: m.user._id?.toString() || "",
        name: m.user.name || "Unknown",
        email: m.user.email || "No Email",
        institution: m.user.institution || "N/A",
        dept: m.user.department || "N/A",
        year: m.user.year || "N/A",
        phone: m.user.phone || "N/A",
        eventsRegistered: [], 
      } : null
    })) || []
  }));

  return (
    <main>
      <LeaderDashboard users={serializedUsers} teams={serializedTeams} />
    </main>
  );
}