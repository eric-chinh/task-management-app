import { Menu } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Menu
      mode="inline"
      selectedKeys={[location.pathname]}
      style={{ width: 220, height: '100%', borderRight: '1px solid #f0f0f0' }}
      items={[
        {
          key: '/dashboard',
          icon: <AppstoreOutlined />,
          label: 'Kanban Board',
          onClick: () => navigate('/dashboard'),
        },
      ]}
    />
  );
}
