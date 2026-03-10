import dbConnect from '@/lib/db'; 
import Leaderdashboard from '@/components/Encrypt';

export default async function LeadDashboardPage() {
  await dbConnect();
  return (
    <main>
      <Leaderdashboard/>
    </main>
  );
}