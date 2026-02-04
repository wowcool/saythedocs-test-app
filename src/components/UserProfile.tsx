import React from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  bio?: string;
}

interface UserProfileProps {
  user: User;
  onEditProfile: () => void;
}

export function UserProfile({ user, onEditProfile }: UserProfileProps) {
  return (
    <div className="user-profile">
      <div className="profile-header">
        <img 
          src={user.avatarUrl} 
          alt={`${user.name}'s avatar`}
          className="avatar"
        />
        <div className="profile-info">
          <h1>{user.name}</h1>
          <p className="email">{user.email}</p>
          {user.bio && <p className="bio">{user.bio}</p>}
        </div>
      </div>
      
      <div className="profile-actions">
        <button 
          className="edit-button"
          onClick={onEditProfile}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
