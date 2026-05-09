import { Tag } from 'antd';

const STATUS_CONFIG: Record<string, { color: string; label: string }> = {
  BACKLOG:     { color: 'default',   label: 'Backlog' },
  TODO:        { color: 'blue',      label: 'Todo' },
  IN_PROGRESS: { color: 'orange',    label: 'In Progress' },
  DONE:        { color: 'green',     label: 'Done' },
  LOW:         { color: 'default',   label: 'Low' },
  MEDIUM:      { color: 'gold',      label: 'Medium' },
  HIGH:        { color: 'red',       label: 'High' },
};

export function Badge({ value }: { value: string }) {
  const cfg = STATUS_CONFIG[value] ?? { color: 'default', label: value };
  return <Tag color={cfg.color}>{cfg.label}</Tag>;
}
