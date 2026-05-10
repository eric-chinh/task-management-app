import { useState, useEffect } from 'react';
import { Row, Col, Spin, Empty, Alert, Segmented, Badge } from 'antd';
import type { Task, TaskStatus } from '../../../types';
import { TaskCard } from './TaskCard';

const ALL = 'ALL' as const;
type Filter = TaskStatus | typeof ALL;

const SEGMENTS = [
  { label: 'Tất cả', value: ALL },
  { label: 'Backlog',     value: 'BACKLOG'     as TaskStatus },
  { label: 'Todo',        value: 'TODO'        as TaskStatus },
  { label: 'In Progress', value: 'IN_PROGRESS' as TaskStatus },
  { label: 'Done',        value: 'DONE'        as TaskStatus },
];

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<Filter>(ALL);

  useEffect(() => {
    const controller = new AbortController();

    fetch('/mock-tasks.json', { signal: controller.signal })
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data: Task[]) => { setTasks(data); setLoading(false); })
      .catch(err => {
        if (err.name !== 'AbortError') { setError(err.message); setLoading(false); }
      });

    return () => controller.abort();
  }, []);

  const filtered = filter === ALL ? tasks : tasks.filter(t => t.status === filter);

  const countOf = (s: TaskStatus) => tasks.filter(t => t.status === s).length;

  if (loading) return <Spin tip="Đang tải tasks..." style={{ display: 'block', marginTop: 60 }} />;
  if (error)   return <Alert type="error" message={`Lỗi: ${error}`} showIcon />;

  // Segmented options với badge count
  const segmentOptions = SEGMENTS.map(seg => ({
    label: seg.value === ALL
      ? <span>Tất cả <Badge count={tasks.length} color="blue" /></span>
      : <span>{seg.label} <Badge count={countOf(seg.value as TaskStatus)} color="default" /></span>,
    value: seg.value,
  }));

  return (
    <div>
      <Segmented
        options={segmentOptions}
        value={filter}
        onChange={val => setFilter(val as Filter)}
        style={{ marginBottom: 20 }}
      />

      {filtered.length === 0 ? (
        <Empty description="Không có task nào" style={{ marginTop: 40 }} />
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
