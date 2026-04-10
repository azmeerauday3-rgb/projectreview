import React from 'react';
import { motion } from 'motion/react';
import { 
  Plus, 
  Calendar as CalendarIcon, 
  CheckCircle, 
  Edit2, 
  Trash2, 
  Clock,
  Filter
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function DailyPlanScreen({ onNavigate }: { onNavigate: (p: string) => void }) {
  const tasks = [
    {
      id: 1,
      priority: 'High Priority',
      priorityColor: 'bg-error-container/10 text-error',
      title: 'Q4 Editorial Strategy Review',
      description: 'Review the final drafts for the December issue and align with the design team on visuals.',
      due: '4:00 PM',
      status: 'pending'
    },
    {
      id: 2,
      priority: 'Medium Priority',
      priorityColor: 'bg-secondary-container text-on-secondary-container',
      title: 'Weekly Sync with Content Creators',
      description: 'Discussing the upcoming "Minimalist Living" series and assigning photographers.',
      due: 'Today',
      status: 'pending'
    },
    {
      id: 3,
      priority: 'Completed',
      priorityColor: 'bg-surface-container-highest text-on-surface-variant',
      title: 'Morning Newsletter Draft',
      description: "Finalize the welcome copy for the new subscribers of 'The Fluid Workspace'.",
      due: 'Done at 9:15 AM',
      status: 'completed'
    }
  ];

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
          <p className="text-on-surface-variant max-w-md">Today is Tuesday, Oct 24. You have 6 high-priority tasks remaining for the editorial sprint.</p>
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
                  {task.status === 'completed' ? task.due : `Due: ${task.due}`}
                </span>
              </div>
              
              {task.status !== 'completed' ? (
                <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-low text-primary rounded-lg text-xs font-bold transition-all hover:bg-primary hover:text-on-primary">
                  <CheckCircle className="w-4 h-4" />
                  Mark as Done
                </button>
              ) : (
                <span className="text-primary-fixed-dim">
                  <CheckCircle className="w-5 h-5 fill-current" />
                </span>
              )}
            </div>
          </motion.div>
        ))}

        {/* Featured Task Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="md:col-span-2 bg-surface-container-lowest p-8 rounded-xl group transition-all duration-300 hover:shadow-2xl hover:shadow-on-surface/5 flex flex-col md:flex-row gap-8 border border-transparent hover:border-outline-variant/10"
        >
          <div className="md:w-1/3 h-48 md:h-auto rounded-lg overflow-hidden shrink-0">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvWmg9VmVbVdkPlHSJX37s-uTESlsKvj8WvUO7GScSWV3EVbZ_aTxNRw2bTofZTUCEcTR0YoiWk6QPPcTa9Azu2q9xZuiFpMK0Vw31zFFLANzGASWPkXMk_ig7ZLPfHxBVlRTQG_o7GqHwT8AqcG5f_GJjpxHnqhX7sls91qUkJJzmHRypWgL6bGdo1-APySBOckS3C5nqIf_bH9g32LElIykCcYbX_Agz-SgJvLaLq_cwKxCQ19Jj5YR3UPN0gmu5ffkN1U4Ze1c" 
              alt="Modern office"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col flex-grow">
            <div className="flex justify-between items-start mb-4">
              <span className="px-3 py-1 bg-tertiary-container text-on-tertiary-container text-[10px] font-bold rounded-full uppercase tracking-tighter">Project: Brand Refresh</span>
              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1.5 hover:bg-surface-container text-on-surface-variant rounded-md transition-colors">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button className="p-1.5 hover:bg-error-container/20 text-error rounded-md transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-on-background mb-3">Review Brand Identity Guidelines</h3>
            <p className="text-on-surface-variant mb-8">Deep dive into the new typography and color tokens for the digital workspace. Ensure all components are updated to reflect the 'Editorial Minimalist' aesthetic across the suite.</p>
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <CalendarIcon className="w-4 h-4" />
                  <span className="text-xs font-medium">Deadline: Friday</span>
                </div>
                <div className="flex -space-x-2">
                  <img className="w-8 h-8 rounded-full border-2 border-surface-container-lowest object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoGCMYa4peG_MTFZb09PGe6HtxRbhTVHDPDV7-YYdY12N_Z0dOiz39M1IvNBxpCFA079RffTGMXXdfS3rHizV-6Y7VvTToEn6UuSBVQdeISJSuFV8Dspo0MuH2HPCanB-4k4op8OmBO0Jlb34jOf9QafXtThn6JVV2FSAxxTF1H5ro-LyzK0Heo7IifVWnqPZRPJ9hUl6_8-RKH9dUjnpiDzTgES2QYZtaE5QSPlDgObj9iUPcYRmAibwb3Phspd8TobtvG5QTVMQ" alt="Avatar" referrerPolicy="no-referrer" />
                  <img className="w-8 h-8 rounded-full border-2 border-surface-container-lowest object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcUaykiRn-CigzWePpIRCTj1m9SpjQu7fcD3PuWyQ5G8sGx-HszByQEzOzXaRjvS2sPwLRTtQAYG_bDM070Ylld3uW858kEd2o_-O0MStufBegecUADJiX0XbaF8sGJivYA6-JhFfkUT5_Czg8tX6ksJd-hEF58GEdrQwGZHCnZYanSMR2h8Zn4m8pNJ2s_GKKT1-6MVg3m6315pXWU6GsFbxm-4m7d377C2CRvo8nu-ENXl4lROT2HPhp5riJ8HHs2p-d9wU-y-c" alt="Avatar" referrerPolicy="no-referrer" />
                </div>
              </div>
              <button className="px-6 py-2 bg-primary text-on-primary rounded-lg text-sm font-bold shadow-md shadow-primary/10 transition-all hover:bg-primary-dim">
                Complete
              </button>
            </div>
          </div>
        </motion.div>

        {/* Low Priority Task */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-surface-container-lowest p-6 rounded-xl group transition-all duration-300 hover:shadow-2xl hover:shadow-on-surface/5 flex flex-col h-full border border-transparent hover:border-outline-variant/10"
        >
          <div className="flex justify-between items-start mb-6">
            <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant text-[10px] font-bold rounded-full uppercase tracking-tighter">Low Priority</span>
            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-1.5 hover:bg-surface-container text-on-surface-variant rounded-md transition-colors">
                <Edit2 className="w-4 h-4" />
              </button>
              <button className="p-1.5 hover:bg-error-container/20 text-error rounded-md transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
          <h3 className="text-xl font-bold text-on-background mb-2 leading-tight">Archive September Invoices</h3>
          <p className="text-sm text-on-surface-variant mb-6 flex-grow">Move all processed invoices to the permanent digital archive folder.</p>
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-2 text-on-surface-variant">
              <Clock className="w-4 h-4" />
              <span className="text-xs font-medium">Estimated: 15m</span>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-low text-primary rounded-lg text-xs font-bold transition-all hover:bg-primary hover:text-on-primary">
              <CheckCircle className="w-4 h-4" />
              Done
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
