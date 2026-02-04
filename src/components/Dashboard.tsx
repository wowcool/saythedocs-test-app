import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: string;
}

function StatCard({ title, value, icon }: StatCardProps) {
  return (
    <div className="stat-card">
      <span className="stat-icon">{icon}</span>
      <div className="stat-content">
        <h3>{title}</h3>
        <p className="stat-value">{value}</p>
      </div>
    </div>
  );
}

interface ActivityItem {
  id: number;
  user: string;
  action: string;
  time: string;
}

interface DashboardProps {
  totalUsers: number;
  activeSessions: number;
  revenue: string;
  recentActivity: ActivityItem[];
}

export function Dashboard({ 
  totalUsers, 
  activeSessions, 
  revenue, 
  recentActivity 
}: DashboardProps) {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      
      <div className="stats-grid">
        <StatCard title="Total Users" value={totalUsers} icon="users" />
        <StatCard title="Active Sessions" value={activeSessions} icon="activity" />
        <StatCard title="Revenue" value={revenue} icon="dollar" />
      </div>
      
      <div className="activity-section">
        <h2>Recent Activity</h2>
        <table className="activity-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Action</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {recentActivity.map((item) => (
              <tr key={item.id}>
                <td>{item.user}</td>
                <td>{item.action}</td>
                <td>{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
