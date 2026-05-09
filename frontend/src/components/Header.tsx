import { Avatar, Button, Flex, Typography } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';

interface HeaderProps {
  userName: string;
  onLogout: () => void;
}

export function Header({ userName, onLogout }: HeaderProps) {
  return (
    <Flex
      align="center"
      justify="space-between"
      style={{
        height: 56,
        padding: '0 24px',
        background: '#fff',
        borderBottom: '1px solid #f0f0f0',
        position: 'sticky',
        top: 0,
        zIndex: 100,
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
          onClick={onLogout}
          size="small"
        >
          Đăng xuất
        </Button>
      </Flex>
    </Flex>
  );
}
