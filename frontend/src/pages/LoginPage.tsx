import { Card, Typography, Flex } from 'antd';
import { LockOutlined } from '@ant-design/icons';

export function LoginPage() {
  return (
    <Flex
      justify="center"
      align="center"
      style={{ minHeight: '100vh', background: '#f5f5f5' }}
    >
      <Card style={{ width: 400, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
        <Flex vertical align="center" gap={8} style={{ marginBottom: 24 }}>
          <LockOutlined style={{ fontSize: 32, color: '#1677ff' }} />
          <Typography.Title level={3} style={{ margin: 0 }}>
            Đăng nhập
          </Typography.Title>
          <Typography.Text type="secondary">TaskBoard</Typography.Text>
        </Flex>

        {/* LoginForm sẽ được thêm ở Task 5 */}
        <Typography.Text type="secondary" style={{ display: 'block', textAlign: 'center' }}>
          Form đăng nhập — Task 5
        </Typography.Text>
      </Card>
    </Flex>
  );
}
