import React from 'react';
import { motion } from 'motion/react';
import { 
  Plus, 
  Calendar as CalendarIcon, 
  CheckCircle, 
  Edit2, 
  Trash2, 
  Clock,
  Filter,
  ClipboardList
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Task } from '../types';

export function DailyPlanScreen({ onNavigate, tasks, toggleTaskStatus }: { onNavigate: (p: any) => void, tasks: Task[], toggleTaskStatus: (id: string) => void }) {
  const pendingTasksCount = tasks.filter(t => t.status === 'pending').length;

  return (
    <div className="pt-28 px-6 pb-12 max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">Focus Mode</span>
          <h1 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter text-on-background mb-4">Daily Plan</h1>
          <p className="text-on-surface-variant max-w-md">Today is Tuesday, Oct 24. You have {pendingTasksCount} tasks remaining for the editorial sprint.</p>
        </motion.div>
        
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-surface-container-high text-primary rounded-xl font-semibold transition-all hover:bg-surface-container-highest active:scale-95">
            Filter
          </button>
          <button 
            onClick={() => onNavigate('create-task')}
            className="px-6 py-3 editorial-gradient text-on-primary rounded-xl font-semibold shadow-lg shadow-primary/20 transition-all hover:opacity-90 active:scale-95 flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            New Task
          </button>
        </div>
      </div>

      {/* Bento Grid Tasks */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task, i) => (
          <motion.div 
            key={task.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={cn(
              "p-6 rounded-xl group transition-all duration-300 flex flex-col h-full border border-transparent",
              task.status === 'completed' 
                ? "bg-surface-container-low/50" 
                : "bg-surface-container-lowest hover:shadow-2xl hover:shadow-on-surface/5 hover:border-outline-variant/10"
            )}
          >
            <div className="flex justify-between items-start mb-6">
              <span className={cn("px-3 py-1 text-[10px] font-bold rounded-full uppercase tracking-tighter", task.priorityColor)}>
                {task.priority}
              </span>
              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1.5 hover:bg-surface-container text-on-surface-variant rounded-md transition-colors">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button className="p-1.5 hover:bg-error-container/20 text-error rounded-md transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <h3 className={cn(
              "text-xl font-bold text-on-background mb-2 leading-tight",
              task.status === 'completed' && "text-on-surface-variant/60 line-through"
            )}>
              {task.title}
            </h3>
            <p className={cn(
              "text-sm text-on-surface-variant mb-6 flex-grow",
              task.status === 'completed' && "text-on-surface-variant/50"
            )}>
              {task.description}
            </p>

            <div className="flex items-center justify-between mt-auto">
              <div className={cn(
                "flex items-center gap-2 text-on-surface-variant",
                task.status === 'completed' && "text-on-surface-variant/50"
              )}>
                {task.status === 'completed' ? <CheckCircle className="w-4 h-4" /> : <CalendarIcon className="w-4 h-4" />}
                <span className={cn("text-xs font-medium", task.status === 'completed' && "italic")}>
                  {task.status === 'completed' ? `Done: ${task.due}` : `Due: ${task.due}`}
                </span>
              </div>
              
              <button 
                onClick={() => toggleTaskStatus(task.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all",
                  task.status === 'completed'
                    ? "bg-primary/10 text-primary"
                    : "bg-surface-container-low text-primary hover:bg-primary hover:text-on-primary"
                )}
              >
                <CheckCircle className="w-4 h-4" />
                {task.status === 'completed' ? 'Undo' : 'Mark Done'}
              </button>
            </div>
          </motion.div>
        ))}

        {tasks.length === 0 && (
          <div className="col-span-full py-20 bg-surface-container-low rounded-xl border-2 border-dashed border-outline-variant/30 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-surface-container-highest rounded-full flex items-center justify-center mb-4">
              <ClipboardList className="w-8 h-8 text-on-surface-variant/40" />
            </div>
            <h3 className="text-xl font-bold text-on-background">No tasks for today</h3>
            <p className="text-on-surface-variant mt-2 max-w-xs">Everything is caught up. Take a moment to breathe or plan ahead.</p>
            <button 
              onClick={() => onNavigate('create-task')}
              className="mt-6 px-6 py-2 editorial-gradient text-on-primary rounded-lg font-bold text-sm"
            >
              Add first task
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

