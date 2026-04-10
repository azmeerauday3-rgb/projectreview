import React from 'react';
import { 
  LayoutGrid, 
  Calendar, 
  Folder, 
  Archive, 
  Settings, 
  Bell, 
  Search, 
  Plus,
  LogOut
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';

interface SidebarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export function Sidebar({ currentPath, onNavigate }: SidebarProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid },
    { id: 'daily-plan', label: 'Daily Plan', icon: Calendar },
    { id: 'projects', label: 'Projects', icon: Folder },
    { id: 'archive', label: 'Archive', icon: Archive },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen flex flex-col p-6 bg-surface-container-low w-72 rounded-r-2xl z-50 hidden lg:flex">
      <div className="flex items-center gap-3 mb-12 px-2">
        <div className="w-10 h-10 rounded-xl editorial-gradient flex items-center justify-center text-on-primary shadow-lg shadow-primary/20">
          <motion.div
            animate={{ rotate: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <LayoutGrid className="w-6 h-6" />
          </motion.div>
        </div>
        <span className="font-headline font-extrabold text-xl text-on-background tracking-tighter">Fluid Workspace</span>
      </div>

      <nav className="flex flex-col gap-1 flex-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 font-medium text-sm",
              currentPath === item.id 
                ? "bg-surface-container-lowest text-primary shadow-sm" 
                : "text-on-background hover:bg-surface-container-lowest/50"
            )}
          >
            <item.icon className={cn("w-5 h-5", currentPath === item.id ? "text-primary" : "text-outline")} />
            <span>{item.label}</span>
          </button>
        ))}

        <div className="mt-auto">
          <button
            onClick={() => onNavigate('settings')}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 font-medium text-sm w-full text-left",
              currentPath === 'settings' 
                ? "bg-surface-container-lowest text-primary shadow-sm" 
                : "text-on-background hover:bg-surface-container-lowest/50"
            )}
          >
            <Settings className={cn("w-5 h-5", currentPath === 'settings' ? "text-primary" : "text-outline")} />
            <span>Settings</span>
          </button>
        </div>
      </nav>

      <div className="mt-8 pt-6 border-t border-outline-variant/10 flex items-center gap-3">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC46bt0iQjTSfnmgu457xoHCdHE5XBShKIOHraPvFuZL7Ss6CwzvcjkxQSLMRHhiPnqY3x-qS7rgJ6XWeBI8Swh0bgXsukv06Sc0Dd95fpVbxwmfMKu0MTBXkK7KVn6L9OjLwdxW9ngrRiCl-3heBeH6HbAAvdf-nmaQgnJ4b6Wg_6sY-tO_kmQD7pjt1mcOTEf6VjiLOLYING3VilCr70rmaAM_98MgUCZq8yfDrId2bF9auVPi4Q9BS9xeQpFz9uAnPV_zo1PTnI" 
          alt="Julian Reed" 
          className="w-10 h-10 rounded-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-on-background">Julian Reed</span>
          <span className="text-xs text-on-surface-variant">Editorial Lead</span>
        </div>
        <div className="ml-auto px-2 py-0.5 bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded uppercase tracking-wider">Pro</div>
      </div>
    </aside>
  );
}

export function TopBar({ onNavigate, onSearch, onNotify }: { onNavigate: (p: string) => void, onSearch?: () => void, onNotify?: () => void }) {
  return (
    <header className="fixed top-0 right-0 left-0 lg:left-72 z-40 glass-panel px-8 py-4 flex justify-between items-center">
      <div className="flex flex-col">
        <h1 className="text-2xl font-headline font-bold tracking-tighter text-on-background">Dashboard</h1>
      </div>
      <div className="flex items-center gap-4">
        <button 
          onClick={onSearch}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors active:scale-95"
        >
          <Search className="w-5 h-5 text-on-surface-variant" />
        </button>
        <button 
          onClick={() => onNavigate('inbox')}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors active:scale-95 relative"
        >
          <Bell className="w-5 h-5 text-on-surface-variant" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-error rounded-full border-2 border-surface"></span>
        </button>
        <button 
          onClick={() => onNavigate('create-task')}
          className="flex items-center gap-2 pl-2 pr-4 py-2 editorial-gradient text-on-primary rounded-xl font-semibold text-sm active:scale-95 transition-all shadow-lg shadow-primary/20"
        >
          <Plus className="w-5 h-5" />
          Quick Add
        </button>
      </div>
    </header>
  );
}
