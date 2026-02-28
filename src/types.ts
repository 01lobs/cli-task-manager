export type Taskstatus = 'Pending' | 'In-Progress' | 'Finished';
export interface Task {//why interface not type?
  id: string;
  Status: Taskstatus;
  taskTitle: string;
  createdAt: string;
  completedAt?: string;
};

