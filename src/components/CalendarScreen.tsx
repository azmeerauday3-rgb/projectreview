import React from 'react';
import { motion } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle,
  Clock,
  Bolt
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Task } from '../types';

export function CalendarScreen({ tasks }: { tasks: Task[] }) {
  const days = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="pt-24 pb-32 px-6 md:px-12 max-w-4xl mx-auto">
      <div className="flex items-end justify-between mb-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-headline font-extrabold tracking-tight text-on-background mb-2">Workspace</h1>
          <p className="text-on-surface-variant font-medium">October 2024</p>
        </motion.div>
        <div className="flex gap-2">
          <button className="p-3 bg-surface-container-high rounded-xl hover:bg-surface-container-highest transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="p-3 bg-surface-container-high rounded-xl hover:bg-surface-container-highest transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-surface-container-low rounded-[2rem] p-4 mb-8 shadow-sm"
      >
        <div className="grid grid-cols-7 gap-1 text-center mb-4">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
            <div key={day} className="text-[10px] font-bold text-outline uppercase tracking-widest py-2">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          <div className="aspect-square flex flex-col items-center justify-center text-outline opacity-30 text-sm">30</div>
          {days.map(day => (
            <div 
              key={day} 
              className={cn(
                "aspect-square flex flex-col items-center justify-center rounded-2xl relative transition-all active:scale-95 group cursor-pointer shadow-sm",
                day === 10 ? "bg-primary ring-4 ring-primary-container/20" : "bg-surface-container-lowest"
              )}
            >
              <span className={cn("text-sm font-semibold", day === 10 ? "text-on-primary" : "text-on-surface")}>{day}</span>
              <div className="flex gap-0.5 mt-1">
                {day === 1 && <><div className="w-1 h-1 rounded-full bg-primary" /><div className="w-1 h-1 rounded-full bg-tertiary" /></>}
                {day === 2 && <div className="w-1 h-1 rounded-full bg-primary" />}
                {day === 4 && <div className="w-1 h-1 rounded-full bg-error" />}
                {day === 8 && <><div className="w-1 h-1 rounded-full bg-primary" /><div className="w-1 h-1 rounded-full bg-primary" /></>}
                {day === 10 && <><div className="w-1 h-1 rounded-full bg-on-primary" /><div className="w-1 h-1 rounded-full bg-on-primary" /><div className="w-1 h-1 rounded-full bg-on-primary" /></>}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-on-background">Agenda</h2>
          <span className="text-xs font-bold text-primary bg-primary-container/10 px-3 py-1 rounded-full">{tasks.length} {tasks.length === 1 ? 'TASK' : 'TASKS'}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tasks.map((task, i) => (
            <motion.div 
              key={task.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="bg-surface-container-lowest p-6 rounded-[1.5rem] shadow-sm flex items-start gap-4 hover:translate-y-[-4px] transition-transform duration-300"
            >
              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-surface-container-high")}>
                {task.status === 'completed' ? <CheckCircle className="w-6 h-6 text-on-surface-variant" /> : <Bolt className="w-6 h-6 text-primary" />}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className={cn("font-bold text-on-surface", task.status === 'completed' && "line-through opacity-50")}>{task.title}</h3>
                  <span className={cn("text-[10px] font-bold uppercase px-2 py-0.5 rounded", task.priorityColor)}>
                    {task.priority}
                  </span>
                </div>
                <p className="text-sm text-on-surface-variant mb-4 line-clamp-2">{task.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3 text-outline" />
                    <span className="text-xs text-outline font-medium">{task.time || task.due}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          {tasks.length === 0 && (
            <div className="col-span-full py-12 text-center text-on-surface-variant/60 font-medium">
              No tasks scheduled.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

