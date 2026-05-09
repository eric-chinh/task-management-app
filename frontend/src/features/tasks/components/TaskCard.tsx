import { Card, Flex, Typography, Avatar, Tooltip } from 'antd';
import { UserOutlined, CalendarOutlined } from '@ant-design/icons';
import type { Task } from '../../../types';
import { Badge } from '../../../components/Badge';

interface TaskCardProps {
  task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
  return (
    <Card
      size="small"
      style={{ marginBottom: 8, cursor: 'grab', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}
      styles={{ body: { padding: '10px 12px' } }}
    >
      <Typography.Text strong style={{ display: 'block', marginBottom: 6, fontSize: 13 }}>
        {task.title}
      </Typography.Text>

      {task.description && (
        <Typography.Text
          type="secondary"
          style={{ display: 'block', fontSize: 12, marginBottom: 8 }}
          ellipsis
        >
          {task.description}
        </Typography.Text>
      )}

      <Flex gap={4} wrap style={{ marginBottom: 6 }}>
        <Badge value={task.priority} />
      </Flex>

      <Flex justify="space-between" align="center" style={{ marginTop: 4 }}>
        <Tooltip title={`Owner: ${task.owner.name}`}>
          <Avatar size={20} icon={<UserOutlined />} style={{ background: '#1677ff', fontSize: 11 }}>
            {task.owner.name[0]}
          </Avatar>
        </Tooltip>

        {task.assignee && (
          <Tooltip title={`Assigned: ${task.assignee.name}`}>
            <Flex align="center" gap={4}>
              <UserOutlined style={{ fontSize: 11, color: '#8c8c8c' }} />
              <Typography.Text type="secondary" style={{ fontSize: 11 }}>
                {task.assignee.name}
              </Typography.Text>
            </Flex>
          </Tooltip>
        )}

        {task.dueDate && (
          <Flex align="center" gap={4}>
            <CalendarOutlined style={{ fontSize: 11, color: '#8c8c8c' }} />
            <Typography.Text type="secondary" style={{ fontSize: 11 }}>
              {new Date(task.dueDate).toLocaleDateString('vi-VN')}
            </Typography.Text>
          </Flex>
        )}
      </Flex>
    </Card>
  );
}
