import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  X, 
  AlertCircle, 
  Calendar as CalendarIcon, 
  Bell, 
  Mail,
  TrendingUp
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Task } from '../types';

export function CreateTaskScreen({ onCancel, onSave }: { onCancel: () => void, onSave: (task: Partial<Task>) => void }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<'Low Priority' | 'Medium Priority' | 'High Priority'>('Medium Priority');
  const [dueDate, setDueDate] = useState('');

  const handleSave = () => {
    if (!title.trim()) return;

    const newTask: Partial<Task> = {
      title,
      description,
      priority,
      due: dueDate || 'Today',
      status: 'pending',
      priorityColor: priority === 'High Priority' 
        ? 'bg-error-container/10 text-error' 
        : priority === 'Medium Priority' 
          ? 'bg-secondary-container text-on-secondary-container' 
          : 'bg-surface-container-high text-on-surface-variant'
    };

    onSave(newTask);
  };

  return (
    <div className="pt-24 pb-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Contextual Header */}
        <div className="flex items-center justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl font-headline font-extrabold tracking-tighter text-on-background mb-2">Create New Task</h1>
            <p className="text-on-surface-variant font-medium">Define your next milestone in the workspace.</p>
          </motion.div>
          <button 
            onClick={onCancel}
            className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors active:scale-95"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Bento Layout Form Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Task Details */}
          <div className="lg:col-span-2 space-y-8">
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-surface-container-lowest p-8 rounded-xl shadow-sm space-y-6"
            >
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Task title</label>
                <input 
                  className="w-full text-2xl font-semibold bg-transparent border-none focus:ring-0 placeholder:text-surface-dim p-0" 
                  placeholder="What needs to be done?" 
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <div className="h-0.5 w-full bg-surface-container-low relative">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: title ? '100%' : '25%' }}
                    className="absolute left-0 top-0 h-full bg-primary rounded-full transition-all duration-300" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Description</label>
                <textarea 
                  className="w-full bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary/20 p-4 text-on-surface placeholder:text-outline/50 resize-none" 
                  placeholder="Add context, links, or sub-tasks..." 
                  rows={6}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </motion.section>

            {/* Auxiliary Attributes */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="bg-surface-container-low p-6 rounded-lg space-y-4">
                <div className="flex items-center gap-2 text-primary">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">Priority level</span>
                </div>
                <select 
                  className="w-full bg-surface-container-lowest border-none rounded-md py-3 px-4 text-on-surface font-medium focus:ring-2 focus:ring-primary/20 appearance-none"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value as any)}
                >
                  <option value="Low Priority">Low Priority</option>
                  <option value="Medium Priority">Medium Priority</option>
                  <option value="High Priority">High Priority</option>
                </select>
              </div>
              <div className="bg-surface-container-low p-6 rounded-lg space-y-4">
                <div className="flex items-center gap-2 text-primary">
                  <CalendarIcon className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">Due date</span>
                </div>
                <input 
                  className="w-full bg-surface-container-lowest border-none rounded-md py-3 px-4 text-on-surface font-medium focus:ring-2 focus:ring-primary/20" 
                  type="date" 
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
              </div>
            </motion.div>
          </div>

          {/* Sidebar Controls */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-surface-container-lowest p-6 rounded-xl shadow-sm space-y-6"
            >
              <h3 className="font-headline font-bold text-on-background">Notification Settings</h3>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-on-background">Reminder</span>
                  <span className="text-xs text-on-surface-variant">Notify me before due</span>
                </div>
                <button className="w-12 h-6 bg-primary rounded-full relative transition-colors">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                </button>
              </div>
              <div className="pt-4 space-y-4">
                <div className="flex items-center gap-3 p-3 bg-surface-container-low rounded-lg">
                  <Bell className="w-4 h-4 text-on-surface-variant" />
                  <span className="text-xs font-medium text-on-surface-variant">15 mins before</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-surface-container-low rounded-lg opacity-50">
                  <Mail className="w-4 h-4 text-on-surface-variant" />
                  <span className="text-xs font-medium text-on-surface-variant">Email digest</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative rounded-xl overflow-hidden h-48 group shadow-sm"
            >
              <img 
                className="absolute inset-0 w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe2efb38iVwSr7i6iDfXlSTN5QUHRubHsAdtD5v4YjTJFqE2x_AnE3UEc3vT4jyCJ_LeplA-SWCYgevJ_YJf8s5qRjdA1oPmq_8M0W2nYa0nfKe6808VJ6Tn6XzzgkVGCV5uSmLA_XEmkUWjT5jvdf957VgrVVhj6vsrdmhKiElJCKSivW3JQXkgc0D0F0IunuVaH_b6_xAhHRhp8x0eaEquthrzAwemL-oEVthXitiEKMdW-lw0Mso92wHWExG3MQHmcmwfUgd-k" 
                alt="Focus"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-xs font-medium leading-relaxed italic">"Focus is the art of saying no to a thousand things."</p>
              </div>
            </motion.div>

            {/* Action Block */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-3"
            >
              <button 
                onClick={handleSave}
                className="w-full py-4 editorial-gradient text-white rounded-lg font-bold tracking-tight shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all duration-200"
              >
                Save Task
              </button>
              <button 
                onClick={onCancel}
                className="w-full py-4 bg-surface-container-high text-primary rounded-lg font-bold tracking-tight hover:bg-surface-container-highest transition-colors"
              >
                Save as Draft
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

