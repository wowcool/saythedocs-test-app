import React from 'react';

interface NavLink {
  id: string;
  label: string;
  path: string;
  icon: string;
}

interface SidebarProps {
  links: NavLink[];
  currentPath: string;
  onNavigate: (path: string) => void;
}

export function Sidebar({ links, currentPath, onNavigate }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Navigation</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.path}
                className={currentPath === link.path ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(link.path);
                }}
              >
                <span className="nav-icon">{link.icon}</span>
                <span className="nav-label">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
