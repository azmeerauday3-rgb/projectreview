import React from 'react';
import { motion } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  FileText, 
  Phone, 
  Bolt,
  Plus
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function CalendarScreen() {
  const days = Array.from({ length: 20 }, (_, i) => i + 1);
  const tasks = [
    { id: 1, title: 'Editorial Strategy Review', desc: 'Review Q4 content calendar with the design team.', time: '09:00 - 10:30 AM', priority: 'High', icon: FileText, color: 'text-primary', bgColor: 'bg-primary-container/10' },
    { id: 2, title: 'Client Feedback Call', desc: "Discussing the 'Fluid' design system revisions.", time: '02:00 - 02:45 PM', priority: 'Med', icon: Phone, color: 'text-tertiary', bgColor: 'bg-tertiary-container/10' },
    { id: 3, title: 'System Prototype Submission', desc: 'Final handoff of the workspace visual tokens and documentation.', time: 'By 06:00 PM', priority: 'Urgent', icon: Bolt, color: 'text-error', bgColor: 'bg-error-container/10', progress: 85 }
  ];

  return (
    <div className="pt-24 pb-32 px-6 md:px-12 max-w-4xl mx-auto">
      <div className="flex items-end justify-between mb-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-headline font-extrabold tracking-tight text-on-background mb-2">Daily Plan</h1>
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
          <h2 className="text-xl font-bold text-on-background">Tasks for Oct 10</h2>
          <span className="text-xs font-bold text-primary bg-primary-container/10 px-3 py-1 rounded-full">3 TASKS</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tasks.map((task, i) => (
            <motion.div 
              key={task.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className={cn(
                "bg-surface-container-lowest p-6 rounded-[1.5rem] shadow-sm flex items-start gap-4 hover:translate-y-[-4px] transition-transform duration-300",
                task.id === 3 && "md:col-span-2"
              )}
            >
              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shrink-0", task.bgColor)}>
                <task.icon className={cn("w-6 h-6", task.color)} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-on-surface">{task.title}</h3>
                  <span className={cn("text-[10px] font-bold uppercase px-2 py-0.5 rounded", task.id === 3 ? "text-error bg-error-container/10" : task.id === 1 ? "text-primary-fixed bg-primary-fixed/10" : "text-outline bg-surface-container-highest")}>
                    {task.priority}
                  </span>
                </div>
                <p className="text-sm text-on-surface-variant mb-4">{task.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-outline font-medium">{task.time}</span>
                  {task.id === 1 && (
                    <div className="flex -space-x-2">
                      <img className="w-6 h-6 rounded-full border-2 border-surface-container-lowest" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIBMIbYi2w-RElu7xAvEfd2ESE3XUP4K0xL9rFZnGK7M78aUTXhUpAQkwWmx8ZV_EJfNpeMaJhW-E6rdyNwvFS0zwJy7oBHKGVdx7Ol3nXbGZx4eUdmFlRDde5z9xkZzMOTz5xGZnvtW9W0_BcyUPzI4RdFXlgyy2Xn6TbYcMorqkAfoDUPCfTt0Ea1XrMEAo_iOzUva0-2peKRIOc0vzMl0OnKpdJ-Kps8soPcrmB_Rw9IVmcou3eF6g59sZBWmoYIz_Kbsto9SY" alt="Avatar" referrerPolicy="no-referrer" />
                      <img className="w-6 h-6 rounded-full border-2 border-surface-container-lowest" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7GWPqYPJc-PuIStS42VpP1_S9X43YTH8ohz9f58Ego46Pa43_mp56EDKIBzhK0VlMLURYE-ZwhxpQPJs7LZkwfKKChceULqM-jpb8jtKSX8Srd_bkpI2D1S0R5gSDGrDh3C6-NuuCV5_xJ5Q_I6Jmv2FQq7j7GU0vaTN8cPiNbsqL8nvMQ4rSIulYwLTS52GlfuLwxiaVXrwMsjHkf0PA0Aba8CYUAsFZ0Ho6nomlGwzMdLc4azTcykPSNDnqS9y8e6DVNTFoAEI" alt="Avatar" referrerPolicy="no-referrer" />
                    </div>
                  )}
                  {task.progress && (
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-on-surface-variant">{task.progress}% COMPLETE</span>
                      <div className="w-24 h-1 bg-surface-container-high rounded-full overflow-hidden">
                        <div className="w-[85%] h-full bg-primary"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
