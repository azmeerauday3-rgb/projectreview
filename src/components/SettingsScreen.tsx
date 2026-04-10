import React from 'react';
import { motion } from 'motion/react';
import { 
  Camera, 
  Lock, 
  Shield, 
  Sun, 
  Moon, 
  Trash2
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function SettingsScreen() {
  return (
    <div className="pt-28 px-8 pb-12 min-h-screen max-w-4xl mx-auto">
      <header className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-headline font-extrabold tracking-tight text-on-background mb-2">Settings</h1>
          <p className="text-on-surface-variant font-medium">Manage your editorial preferences and account security.</p>
        </motion.div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <section className="md:col-span-8 bg-surface-container-lowest rounded-xl p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold font-headline">User Profile</h2>
            <button className="text-primary font-bold text-sm hover:underline">Edit Info</button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-10 items-start md:items-center mb-10">
            <div className="relative group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6wmjMz3kG3ngq0L0gV05CXK6O9sT-uFyHDVX43aZK5VZWh49IWZQA8g5wcjCR6Jx0eOsGsZeTFcp4CJercGbt7HwAMJZ79-tLmMJ-MbsmhgTFymh7hhGvYlSdnw7QYCBHAH_IVrMpjHrfyviSIMMdGh67hixXMgWvxKtORRb5n4Z5wgO2oOnaLYMNMiCNeoD6rWxXELBPLnyn6rXLOGV6q44QSebkJDM3c8XDHD4DDHXsupMvvyKHje8ENpuZ-j9ZzKtsMthx0EU" 
                alt="Avatar" 
                className="w-24 h-24 rounded-2xl object-cover ring-4 ring-surface-container-low"
                referrerPolicy="no-referrer"
              />
              <button className="absolute -bottom-2 -right-2 bg-primary text-on-primary p-2 rounded-lg shadow-lg active:scale-90 transition-transform">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 flex-grow">
              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Full Name</label>
                <p className="text-on-surface font-semibold text-lg">Julian Reed</p>
              </div>
              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Email Address</label>
                <p className="text-on-surface font-semibold text-lg">julian.reed@workspace.com</p>
              </div>
              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Timezone</label>
                <p className="text-on-surface font-semibold">UTC-5 (New York)</p>
              </div>
              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Role</label>
                <p className="text-on-surface font-semibold">Editorial Lead</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-outline-variant/15">
            <h3 className="text-lg font-bold font-headline mb-6">Security</h3>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center bg-surface p-4 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-secondary-container/30 text-secondary rounded-lg">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Change Password</p>
                    <p className="text-xs text-on-surface-variant">Last changed 3 months ago</p>
                  </div>
                </div>
                <button className="bg-surface-container-high text-primary px-4 py-2 rounded-lg text-sm font-bold active:scale-95 transition-all">Update</button>
              </div>
              <div className="flex justify-between items-center bg-surface p-4 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-secondary-container/30 text-secondary rounded-lg">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Two-Factor Authentication</p>
                    <p className="text-xs text-on-surface-variant">Protect your account with 2FA</p>
                  </div>
                </div>
                <button className="bg-surface-container-high text-primary px-4 py-2 rounded-lg text-sm font-bold active:scale-95 transition-all">Enable</button>
              </div>
            </div>
          </div>
        </section>

        <div className="md:col-span-4 flex flex-col gap-8">
          <section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
            <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-6">Interface Appearance</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex flex-col items-center gap-3 p-4 rounded-xl ring-2 ring-primary bg-primary/5 group transition-all">
                <div className="w-full aspect-video bg-white rounded-md shadow-inner relative overflow-hidden">
                  <div className="absolute top-2 left-2 w-8 h-1 bg-primary/20 rounded"></div>
                  <div className="absolute top-4 left-2 w-12 h-1 bg-primary/10 rounded"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 bg-primary rounded-full"></div>
                </div>
                <span className="text-xs font-bold text-primary">Light Mode</span>
              </button>
              <button className="flex flex-col items-center gap-3 p-4 rounded-xl ring-1 ring-outline-variant/30 hover:bg-surface-container-low transition-all">
                <div className="w-full aspect-video bg-slate-900 rounded-md shadow-inner relative overflow-hidden border border-slate-700">
                  <div className="absolute top-2 left-2 w-8 h-1 bg-slate-700 rounded"></div>
                  <div className="absolute top-4 left-2 w-12 h-1 bg-slate-800 rounded"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 bg-primary-fixed rounded-full"></div>
                </div>
                <span className="text-xs font-bold text-on-surface-variant">Dark Mode</span>
              </button>
            </div>
          </section>

          <section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm">
            <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-6">Notifications</h3>
            <div className="space-y-6">
              {[
                { label: 'Email Digest', desc: 'Daily summary of tasks', checked: true },
                { label: 'Desktop Alerts', desc: 'Real-time push notifications', checked: true },
                { label: 'Smart Reminders', desc: 'AI generated prompts', checked: false },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold">{item.label}</p>
                    <p className="text-[10px] text-on-surface-variant font-medium">{item.desc}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked={item.checked} />
                    <div className="w-11 h-6 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-error-container/5 rounded-xl p-6 border border-error-container/20">
            <h3 className="text-sm font-bold text-error uppercase tracking-widest mb-4">Account Storage</h3>
            <p className="text-xs text-on-surface-variant mb-4 font-medium leading-relaxed">Closing your account will permanently remove all editorial assets and project history.</p>
            <button className="w-full py-2.5 bg-error/10 text-error rounded-lg text-xs font-bold hover:bg-error hover:text-white transition-colors active:scale-[0.98]">Delete My Account</button>
          </section>
        </div>
      </div>
    </div>
  );
}
