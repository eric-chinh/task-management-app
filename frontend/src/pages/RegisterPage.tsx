import { Card, Typography, Flex } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import { RegisterForm } from '../features/auth/components/RegisterForm';

export function RegisterPage() {
  return (
    <Flex
      justify="center"
      align="center"
      style={{ minHeight: '100vh', background: '#f5f5f5' }}
    >
      <Card style={{ width: 420, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
        <Flex vertical align="center" gap={8} style={{ marginBottom: 24 }}>
          <UserAddOutlined style={{ fontSize: 32, color: '#1677ff' }} />
          <Typography.Title level={3} style={{ margin: 0 }}>
            Đăng ký
          </Typography.Title>
          <Typography.Text type="secondary">Tạo tài khoản TaskBoard</Typography.Text>
        </Flex>
        <RegisterForm />
      </Card>
    </Flex>
  );
}
