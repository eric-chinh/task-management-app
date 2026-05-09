import { Layout as AntLayout, Menu, Flex, Typography, Avatar, Button } from 'antd';
import { AppstoreOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

const { Header, Sider, Content } = AntLayout;

export function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    window.location.href = '/login';
  };

  const userName = localStorage.getItem('userName') ?? 'User';

  return (
    <AntLayout style={{ height: '100vh' }}>
      <Header
        style={{
          padding: '0 24px',
          background: '#fff',
          borderBottom: '1px solid #f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          lineHeight: 'initial',
        }}
      >
        <Typography.Title level={4} style={{ margin: 0, color: '#1677ff' }}>
          TaskBoard
        </Typography.Title>

        <Flex align="center" gap={12}>
          <Avatar size="small" icon={<UserOutlined />} style={{ background: '#1677ff' }} />
          <Typography.Text style={{ fontSize: 14 }}>{userName}</Typography.Text>
          <Button
            type="text"
            danger
            icon={<LogoutOutlined />}
            onClick={handleLogout}
            size="small"
          >
            Đăng xuất
          </Button>
        </Flex>
      </Header>

      <AntLayout style={{ overflow: 'hidden' }}>
        <Sider width={220} style={{ background: '#fff', borderRight: '1px solid #f0f0f0' }}>
          <Menu
            mode="inline"
            selectedKeys={[location.pathname]}
            style={{ height: '100%', borderRight: 0 }}
            items={[
              {
                key: '/dashboard',
                icon: <AppstoreOutlined />,
                label: 'Kanban Board',
                onClick: () => navigate('/dashboard'),
              },
            ]}
          />
        </Sider>

        <Content style={{ padding: 24, background: '#f5f5f5', overflowY: 'auto' }}>
          <Outlet />
        </Content>
      </AntLayout>
    </AntLayout>
  );
}
