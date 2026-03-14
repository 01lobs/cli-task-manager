export type TaskStatus = 'pending' | 'in-progress' | 'done';
export interface Task {//why interface not type?
  id: string;
  status: TaskStatus;
  title: string;
  createdAt: string;
  completedAt?: string;
};

