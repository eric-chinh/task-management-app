import { Form, Input, Button, Alert, Typography } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface RegisterFields {
  name: string;
  email: string;
  password: string;
  confirm: string;
}

export function RegisterForm() {
  const { register, loading, error } = useAuth();

  const onFinish = ({ name, email, password }: RegisterFields) => {
    register(name, email, password);
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
        name="name"
        label="Họ tên"
        rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Nguyễn Văn A" />
      </Form.Item>

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
        hasFeedback
      >
        <Input.Password prefix={<LockOutlined />} placeholder="••••••" />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Xác nhận mật khẩu"
        dependencies={['password']}
        hasFeedback
        rules={[
          { required: true, message: 'Vui lòng xác nhận mật khẩu' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Mật khẩu không khớp'));
            },
          }),
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
          Đăng ký
        </Button>
      </Form.Item>

      <Typography.Text type="secondary" style={{ display: 'block', textAlign: 'center', fontSize: 13 }}>
        Đã có tài khoản?{' '}
        <Link to="/login">Đăng nhập</Link>
      </Typography.Text>
    </Form>
  );
}
