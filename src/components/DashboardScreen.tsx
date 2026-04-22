import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle, 
  ClipboardList, 
  Clock, 
  Bolt, 
  MoreVertical,
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Task } from '../types';

export function DashboardScreen({ tasks, toggleTaskStatus }: { tasks: Task[], toggleTaskStatus: (id: string) => void }) {
  const completedTasks = tasks.filter(t => t.status === 'completed');
  const pendingTasks = tasks.filter(t => t.status === 'pending');
  const completionRate = tasks.length > 0 ? Math.round((completedTasks.length / tasks.length) * 100) : 0;

  return (
    <div className="pt-24 pb-12 px-8 max-w-7xl mx-auto">
      {/* Welcome Section */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h2 className="text-4xl font-headline font-extrabold tracking-tight text-on-background mb-2">Good morning, Julian.</h2>
        <p className="text-on-surface-variant text-lg">You have {pendingTasks.length} tasks spanning 2 projects scheduled for today.</p>
      </motion.div>

      {/* Bento Grid: Stats & Productivity */}
      <div className="grid grid-cols-12 gap-6 mb-8">
        {/* Summary Card 1: Total */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="col-span-12 md:col-span-3 p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between min-h-[160px]"
        >
          <div className="flex justify-between items-start">
            <div className="p-2 bg-primary-container/10 rounded-lg text-primary-fixed">
              <ClipboardList className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest">Total</span>
          </div>
          <div>
            <div className="text-4xl font-bold text-on-background">{tasks.length}</div>
            <div className="text-sm text-on-surface-variant mt-1">Tasks managed this session</div>
          </div>
        </motion.div>

        {/* Summary Card 2: Completed */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="col-span-12 md:col-span-3 p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between min-h-[160px]"
        >
          <div className="flex justify-between items-start">
            <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
              <CheckCircle className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest">Completed</span>
          </div>
          <div>
            <div className="text-4xl font-bold text-on-background">{completedTasks.length}</div>
            <div className="text-sm text-on-surface-variant mt-1 flex items-center gap-1">
              <span className="text-emerald-600 font-bold">{completionRate}%</span> completion rate
            </div>
          </div>
        </motion.div>

        {/* Productivity Chart Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="col-span-12 md:col-span-6 row-span-2 p-8 rounded-xl bg-surface-container-low flex flex-col"
        >
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-on-background">Productivity Flow</h3>
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-primary"></span>
              <span className="w-3 h-3 rounded-full bg-primary-container/40"></span>
            </div>
          </div>
          <div className="flex-1 flex items-end justify-between gap-4 px-2">
            {[40, 60, 80, 50, 70, 90, 45].map((height, i) => (
              <div key={i} className="w-full bg-primary-container/10 rounded-t-lg relative group h-full">
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                  className="absolute bottom-0 left-0 w-full bg-primary rounded-t-lg group-hover:brightness-110 transition-all duration-500"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 px-1 text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </motion.div>

        {/* Summary Card 3: Pending */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="col-span-12 md:col-span-3 p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between min-h-[160px]"
        >
          <div className="flex justify-between items-start">
            <div className="p-2 bg-tertiary-container/20 rounded-lg text-tertiary">
              <Clock className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest">Pending</span>
          </div>
          <div>
            <div className="text-4xl font-bold text-on-background">{pendingTasks.length}</div>
            <div className="text-sm text-on-surface-variant mt-1">Requiring action</div>
          </div>
        </motion.div>

        {/* Summary Card 4: Focus Score */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="col-span-12 md:col-span-3 p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between min-h-[160px]"
        >
          <div className="flex justify-between items-start">
            <div className="p-2 bg-primary-container/10 rounded-lg text-primary">
              <Bolt className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest">Focus Score</span>
          </div>
          <div>
            <div className="text-4xl font-bold text-on-background">92<span className="text-lg font-medium opacity-40">/100</span></div>
            <div className="text-sm text-on-surface-variant mt-1">Peak performance</div>
          </div>
        </motion.div>
      </div>

      {/* Main Workspace: Today's Tasks & Projects */}
      <div className="grid grid-cols-12 gap-8">
        {/* Today's Tasks List */}
        <div className="col-span-12 lg:col-span-7">
          <div className="flex justify-between items-end mb-6">
            <h3 className="text-2xl font-bold text-on-background">Today's Focus</h3>
            <button className="text-primary text-sm font-semibold hover:underline">View Schedule</button>
          </div>
          <div className="space-y-3">
            {tasks.slice(0, 4).map((task, i) => (
              <motion.div 
                key={task.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="group bg-surface-container-lowest p-5 rounded-xl flex items-center gap-4 transition-all hover:translate-x-1 duration-300 shadow-sm"
              >
                <button 
                  onClick={() => toggleTaskStatus(task.id)}
                  className={cn(
                    "w-6 h-6 border-2 rounded-md flex items-center justify-center transition-colors cursor-pointer",
                    task.status === 'completed' ? "bg-primary/10 border-primary text-primary" : "border-outline-variant group-hover:border-primary"
                  )}
                >
                  {task.status === 'completed' && <CheckCircle className="w-4 h-4" />}
                </button>
                <div className="flex-1">
                  <h4 className={cn("font-semibold text-on-background", task.status === 'completed' && "text-on-surface-variant line-through")}>{task.title}</h4>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs text-on-surface-variant flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {task.time || task.due}
                    </span>
                    <span className={cn("px-2 py-0.5 text-[10px] font-bold rounded uppercase", task.color || 'bg-surface-container-high', task.tagColor || 'text-on-surface-variant')}>{task.tag || 'General'}</span>
                  </div>
                </div>
                <MoreVertical className="w-5 h-5 text-on-surface-variant/40" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Projects Side Card */}
        <div className="col-span-12 lg:col-span-5">
          <div className="bg-surface-container-high rounded-2xl p-8 h-full flex flex-col">
            <div className="flex justify-between items-start mb-8">
              <h3 className="text-2xl font-bold text-on-background leading-tight">Current<br/>Projects</h3>
              <button className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface hover:bg-surface transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-6 flex-1">
              {[
                { name: 'Brand Refresh 2024', progress: 72, next: 'Hero Section Guidelines' },
                { name: 'Internal Wiki Launch', progress: 24, next: 'Database migration scripts' },
                { name: 'Mobile App V2', progress: 48, next: 'User testing phase 1' },
              ].map((project, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-on-background">{project.name}</span>
                    <span className="text-sm font-semibold text-primary">{project.progress}%</span>
                  </div>
                  <div className="h-2 w-full bg-surface-container-lowest rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${project.progress}%` }}
                      transition={{ duration: 1, delay: 1 }}
                      className="h-full bg-primary rounded-full" 
                    />
                  </div>
                  <p className="text-xs text-on-surface-variant">Next: {project.next}</p>
                </div>
              ))}
            </div>
            {/* Upgrade/Promo Banner */}
            <div className="mt-12 p-6 rounded-xl bg-white/40 backdrop-blur-md border border-white/40 shadow-sm relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
              <h4 className="font-bold text-on-background relative z-10">Expand your capacity</h4>
              <p className="text-sm text-on-surface-variant mt-1 mb-4 relative z-10">Add up to 10 team members to your shared workspaces.</p>
              <button className="text-xs font-bold text-primary uppercase tracking-widest hover:gap-2 transition-all flex items-center gap-1">
                Upgrade Plan <TrendingUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
