import { useState, useEffect } from 'react';
import { Row, Col, Select, Spin, Empty, Typography, Alert } from 'antd';
import type { Task, TaskStatus } from '../../../types';
import { TaskCard } from './TaskCard';

const STATUS_OPTIONS = [
  { value: 'ALL',         label: 'Tất cả' },
  { value: 'BACKLOG',     label: 'Backlog' },
  { value: 'TODO',        label: 'Todo' },
  { value: 'IN_PROGRESS', label: 'In Progress' },
  { value: 'DONE',        label: 'Done' },
];

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<TaskStatus | 'ALL'>('ALL');

  useEffect(() => {
    const controller = new AbortController();

    fetch('/mock-tasks.json', { signal: controller.signal })
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data: Task[]) => {
        setTasks(data);
        setLoading(false);
      })
      .catch(err => {
        if (err.name !== 'AbortError') {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => controller.abort(); // cleanup tránh double-call trong Strict Mode
  }, []);

  const filtered = activeFilter === 'ALL'
    ? tasks
    : tasks.filter(t => t.status === activeFilter);

  if (loading) {
    return (
      <Spin tip="Đang tải tasks..." style={{ display: 'block', marginTop: 80 }} />
    );
  }

  if (error) {
    return <Alert type="error" message={`Lỗi: ${error}`} showIcon />;
  }

  return (
    <div>
      <Row justify="space-between" align="middle" style={{ marginBottom: 16 }}>
        <Col>
          <Typography.Title level={4} style={{ margin: 0 }}>
            Tasks ({filtered.length})
          </Typography.Title>
        </Col>
        <Col>
          <Select
            value={activeFilter}
            onChange={setActiveFilter}
            options={STATUS_OPTIONS}
            style={{ width: 150 }}
          />
        </Col>
      </Row>

      {filtered.length === 0 ? (
        <Empty description="Không có task nào" />
      ) : (
        <Row gutter={[16, 16]}>
          {filtered.map(task => (
            <Col key={task.id} xs={24} sm={12} lg={8} xl={6}>
              <TaskCard task={task} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}
