interface HeaderProps {
  userName: string;
  onLogout: () => void;
}

export function Header({ userName, onLogout }: HeaderProps) {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '0 24px', height: 56, alignItems: 'center', borderBottom: '1px solid #e2e8f0', background: '#fff' }}>
      <h1 style={{ fontSize: 18, fontWeight: 700, color: '#1e293b' }}>TaskBoard</h1>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <span style={{ fontSize: 14, color: '#64748b' }}>{userName}</span>
        <button onClick={onLogout} style={{ fontSize: 13, color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer' }}>
          Đăng xuất
        </button>
      </div>
    </header>
  );
}
