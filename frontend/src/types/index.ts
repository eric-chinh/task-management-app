export type TaskStatus = 'BACKLOG' | 'TODO' | 'IN_PROGRESS' | 'DONE';
export type Priority = 'LOW' | 'MEDIUM' | 'HIGH';

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: Priority;
  order: number;
  dueDate?: string;
  createdAt: string;
  updatedAt: string;
  ownerId: string;
  owner: User;
  assigneeId?: string;
  assignee?: User;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}
