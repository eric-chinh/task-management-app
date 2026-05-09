import { NavLink } from 'react-router-dom';

export function Sidebar() {
  const linkStyle = { display: 'block', padding: '10px 16px', color: '#64748b', textDecoration: 'none', borderRadius: 6, fontSize: 14 };
  const activeStyle = { ...linkStyle, background: '#eff6ff', color: '#2563eb', fontWeight: 600 };

  return (
    <aside style={{ width: 220, background: '#f8fafc', borderRight: '1px solid #e2e8f0', padding: '16px 8px' }}>
      <NavLink to="/dashboard" style={({ isActive }) => isActive ? activeStyle : linkStyle}>
        📋 Kanban Board
      </NavLink>
    </aside>
  );
}
