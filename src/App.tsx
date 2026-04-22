/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sidebar, TopBar } from './components/Navigation';
import { LoginScreen } from './components/auth/LoginScreen';
import { SignupScreen } from './components/auth/SignupScreen';
import { DashboardScreen } from './components/DashboardScreen';
import { DailyPlanScreen } from './components/DailyPlanScreen';
import { CalendarScreen } from './components/CalendarScreen';
import { InboxScreen } from './components/InboxScreen';
import { SettingsScreen } from './components/SettingsScreen';
import { CreateTaskScreen } from './components/CreateTaskScreen';
import { motion, AnimatePresence } from 'motion/react';
import { Task } from './types';

type Screen = 'login' | 'signup' | 'dashboard' | 'daily-plan' | 'calendar' | 'inbox' | 'settings' | 'create-task' | 'projects' | 'archive';

const DEFAULT_TASKS: Task[] = [
  {
    id: '1',
    priority: 'High Priority',
    priorityColor: 'bg-error-container/10 text-error',
    title: 'Q4 Editorial Strategy Review',
    description: 'Review the final drafts for the December issue and align with the design team on visuals.',
    due: '4:00 PM',
    status: 'pending',
    time: '09:00 AM',
    tag: 'Strategy',
    color: 'bg-secondary-container/50',
    tagColor: 'text-on-secondary-container'
  },
  {
    id: '2',
    priority: 'Medium Priority',
    priorityColor: 'bg-secondary-container text-on-secondary-container',
    title: 'Weekly Sync with Content Creators',
    description: 'Discussing the upcoming "Minimalist Living" series and assigning photographers.',
    due: 'Today',
    status: 'pending',
    time: '11:30 AM',
    tag: 'Design',
    color: 'bg-tertiary-container/50',
    tagColor: 'text-on-tertiary-container'
  },
  {
    id: '3',
    priority: 'Completed',
    priorityColor: 'bg-surface-container-highest text-on-surface-variant',
    title: 'Morning Newsletter Draft',
    description: "Finalize the welcome copy for the new subscribers of 'The Fluid Workspace'.",
    due: 'Done at 9:15 AM',
    status: 'completed',
    time: '08:00 AM',
    tag: 'Admin',
    color: 'bg-surface-container-highest',
    tagColor: 'text-on-surface-variant/60'
  },
  {
    id: '4',
    priority: 'Medium Priority',
    priorityColor: 'bg-secondary-container text-on-secondary-container',
    title: 'Interview: Senior UX Writer Candidate',
    description: 'Meeting with the potential new hire for the creative team.',
    due: '02:00 PM',
    status: 'pending',
    time: '02:00 PM',
    tag: 'HR',
    color: 'bg-secondary-container/50',
    tagColor: 'text-on-secondary-container'
  }
];

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [tasks, setTasks] = useState<Task[]>(DEFAULT_TASKS);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentScreen('dashboard');
  };

  const handleSignup = () => {
    setIsAuthenticated(true);
    setCurrentScreen('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentScreen('login');
  };

  const handleAddTask = (taskData: Partial<Task>) => {
    const newTask: Task = {
      id: Math.random().toString(36).substr(2, 9),
      title: taskData.title || 'Untitled Task',
      description: taskData.description || '',
      priority: taskData.priority || 'Medium Priority',
      priorityColor: taskData.priorityColor || 'bg-secondary-container text-on-secondary-container',
      due: taskData.due || 'Today',
      status: taskData.status || 'pending',
      time: 'TBD',
      tag: 'General',
      color: 'bg-surface-container-high',
      tagColor: 'text-on-surface-variant'
    };
    setTasks([newTask, ...tasks]);
    setCurrentScreen('daily-plan');
  };

  const toggleTaskStatus = (taskId: string) => {
    setTasks(tasks.map(t => t.id === taskId ? { 
      ...t, 
      status: t.status === 'completed' ? 'pending' : 'completed',
      priority: t.status === 'completed' ? (t.priority === 'Completed' ? 'Medium Priority' : t.priority) : 'Completed'
    } : t));
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <LoginScreen onLogin={handleLogin} onSignup={() => setCurrentScreen('signup')} />;
      case 'signup':
        return <SignupScreen onSignup={handleSignup} onLogin={() => setCurrentScreen('login')} />;
      case 'dashboard':
        return <DashboardScreen tasks={tasks} toggleTaskStatus={toggleTaskStatus} />;
      case 'daily-plan':
        return <DailyPlanScreen onNavigate={setCurrentScreen} tasks={tasks} toggleTaskStatus={toggleTaskStatus} />;
      case 'calendar':
        return <CalendarScreen tasks={tasks} />;
      case 'inbox':
        return <InboxScreen />;
      case 'settings':
        return <SettingsScreen />;
      case 'create-task':
        return <CreateTaskScreen onCancel={() => setCurrentScreen('daily-plan')} onSave={handleAddTask} />;
      default:
        return <DashboardScreen tasks={tasks} toggleTaskStatus={toggleTaskStatus} />;
    }
  };

  if (!isAuthenticated) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <div className="flex min-h-screen bg-surface">
      <Sidebar currentPath={currentScreen} onNavigate={setCurrentScreen} />
      
      <div className="flex-1 lg:ml-72 relative">
        {currentScreen !== 'create-task' && (
          <TopBar onNavigate={setCurrentScreen} />
        )}
        
        <main className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScreen}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {renderScreen()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

