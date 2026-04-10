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

type Screen = 'login' | 'signup' | 'dashboard' | 'daily-plan' | 'calendar' | 'inbox' | 'settings' | 'create-task' | 'projects' | 'archive';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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

  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <LoginScreen onLogin={handleLogin} onSignup={() => setCurrentScreen('signup')} />;
      case 'signup':
        return <SignupScreen onSignup={handleSignup} onLogin={() => setCurrentScreen('login')} />;
      case 'dashboard':
        return <DashboardScreen />;
      case 'daily-plan':
        return <DailyPlanScreen onNavigate={setCurrentScreen} />;
      case 'calendar':
        return <CalendarScreen />;
      case 'inbox':
        return <InboxScreen />;
      case 'settings':
        return <SettingsScreen />;
      case 'create-task':
        return <CreateTaskScreen onCancel={() => setCurrentScreen('daily-plan')} onSave={() => setCurrentScreen('daily-plan')} />;
      default:
        return <DashboardScreen />;
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

