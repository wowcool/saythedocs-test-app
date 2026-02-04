import React, { useState } from 'react';
import { LoginForm } from './components/LoginForm';
import { Dashboard } from './components/Dashboard';
import { Sidebar } from './components/Sidebar';
import { UserProfile } from './components/UserProfile';
import './App.css';

type Page = 'login' | 'dashboard' | 'profile';

const navLinks = [
  { id: 'dashboard', label: 'Dashboard', path: '/dashboard', icon: 'home' },
  { id: 'profile', label: 'Profile', path: '/profile', icon: 'user' },
];

const sampleActivity = [
  { id: 1, user: 'John Doe', action: 'Logged in', time: '2 min ago' },
  { id: 2, user: 'Jane Smith', action: 'Updated profile', time: '5 min ago' },
  { id: 3, user: 'Bob Wilson', action: 'Created report', time: '10 min ago' },
];

const currentUser = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  avatarUrl: 'https://via.placeholder.com/150',
  bio: 'Software developer passionate about building great products.',
};

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (email: string, password: string) => {
    console.log('Login attempt:', email);
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleNavigate = (path: string) => {
    if (path === '/dashboard') setCurrentPage('dashboard');
    if (path === '/profile') setCurrentPage('profile');
  };

  if (!isLoggedIn) {
    return <LoginForm onSubmit={handleLogin} />;
  }

  return (
    <div className="app-layout">
      <Sidebar 
        links={navLinks} 
        currentPath={`/${currentPage}`} 
        onNavigate={handleNavigate}
      />
      <main className="main-content">
        {currentPage === 'dashboard' && (
          <Dashboard
            totalUsers={1234}
            activeSessions={56}
            revenue="$12,345"
            recentActivity={sampleActivity}
          />
        )}
        {currentPage === 'profile' && (
          <UserProfile
            user={currentUser}
            onEditProfile={() => console.log('Edit profile clicked')}
          />
        )}
      </main>
    </div>
  );
}

export default App;
