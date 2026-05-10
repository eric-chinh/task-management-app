import { Form, Input, Button, Alert, Typography } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface LoginFields {
  email: string;
  password: string;
}

export function LoginForm() {
  const { login, loading, error } = useAuth();

  const onFinish = ({ email, password }: LoginFields) => {
    login(email, password);
  };

  return (
    <Form layout="vertical" onFinish={onFinish} autoComplete="off" size="large">
      {error && (
        <Alert
          type="error"
          message={error}
          showIcon
          style={{ marginBottom: 16 }}
          closable
        />
      )}

      <Form.Item
        name="email"
        label="Email"
        rules={[
          { required: true, message: 'Vui lòng nhập email' },
          { type: 'email', message: 'Email không đúng định dạng' },
        ]}
      >
        <Input prefix={<MailOutlined />} placeholder="email@example.com" />
      </Form.Item>

      <Form.Item
        name="password"
        label="Mật khẩu"
        rules={[
          { required: true, message: 'Vui lòng nhập mật khẩu' },
          { min: 6, message: 'Mật khẩu ít nhất 6 ký tự' },
        ]}
      >
        <Input.Password prefix={<LockOutlined />} placeholder="••••••" />
      </Form.Item>

      <Form.Item style={{ marginBottom: 12 }}>
        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          block
        >
          Đăng nhập
        </Button>
      </Form.Item>

      <Typography.Text type="secondary" style={{ display: 'block', textAlign: 'center', fontSize: 13 }}>
        Chưa có tài khoản?{' '}
        <Link to="/register">Đăng ký ngay</Link>
      </Typography.Text>
    </Form>
  );
}
