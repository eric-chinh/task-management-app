import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    // Mock auth — Tuần 3 sẽ thay bằng real API call
    await new Promise(r => setTimeout(r, 600));
    if (!email.includes('@')) {
      setError('Email không hợp lệ');
      setLoading(false);
      return;
    }
    if (password.length < 6) {
      setError('Mật khẩu ít nhất 6 ký tự');
      setLoading(false);
      return;
    }
    localStorage.setItem('accessToken', 'mock-access-token');
    localStorage.setItem('refreshToken', 'mock-refresh-token');
    localStorage.setItem('userName', email.split('@')[0]);
    navigate('/dashboard');
    setLoading(false);
  };

  const register = async (name: string, email: string, password: string) => {
    setLoading(true);
    setError(null);
    await new Promise(r => setTimeout(r, 600));
    if (!name.trim()) {
      setError('Vui lòng nhập họ tên');
      setLoading(false);
      return;
    }
    if (!email.includes('@')) {
      setError('Email không hợp lệ');
      setLoading(false);
      return;
    }
    if (password.length < 6) {
      setError('Mật khẩu ít nhất 6 ký tự');
      setLoading(false);
      return;
    }
    localStorage.setItem('accessToken', 'mock-access-token');
    localStorage.setItem('refreshToken', 'mock-refresh-token');
    localStorage.setItem('userName', name.trim());
    navigate('/dashboard');
    setLoading(false);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userName');
    navigate('/login');
  };

  return { login, register, logout, loading, error };
}
