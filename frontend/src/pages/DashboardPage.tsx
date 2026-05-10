import { Typography, Button, Flex } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { TaskList } from '../features/tasks/components/TaskList';

export function DashboardPage() {
  return (
    <div>
      <Flex justify="space-between" align="center" style={{ marginBottom: 24 }}>
        <Typography.Title level={4} style={{ margin: 0 }}>
          Dashboard
        </Typography.Title>
        <Button type="primary" icon={<PlusOutlined />} disabled>
          Tạo task
        </Button>
      </Flex>
      <TaskList />
    </div>
  );
}
