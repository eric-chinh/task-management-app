import { Layout as AntLayout } from 'antd';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

const { Content } = AntLayout;

export function Layout() {
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    window.location.href = '/login';
  };

  const userName = localStorage.getItem('userName') ?? 'User';

  return (
    <AntLayout style={{ height: '100vh' }}>
      <Header userName={userName} onLogout={handleLogout} />
      <AntLayout>
        <Sidebar />
        <Content style={{ padding: 24, background: '#f5f5f5', overflow: 'auto' }}>
          <Outlet />
        </Content>
      </AntLayout>
    </AntLayout>
  );
}
