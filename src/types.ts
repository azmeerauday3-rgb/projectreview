export interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'Low Priority' | 'Medium Priority' | 'High Priority' | 'Completed';
  priorityColor: string;
  due: string;
  status: 'pending' | 'completed';
  time?: string;
  tag?: string;
  color?: string;
  tagColor?: string;
  completedAt?: string;
  progress?: number;
}
