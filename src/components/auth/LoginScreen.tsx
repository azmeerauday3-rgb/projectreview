import React from 'react';
import { Mail, Lock, Eye, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function LoginScreen({ onLogin, onSignup }: { onLogin: () => void, onSignup: () => void }) {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-background">
      {/* Abstract Background Decorative Elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-secondary-container/30 blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-tertiary-container/20 blur-3xl"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md z-10"
      >
        {/* App Identity */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl editorial-gradient mb-6 shadow-xl shadow-primary/20">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Lock className="text-white w-8 h-8" />
            </motion.div>
          </div>
          <h1 className="font-headline font-extrabold text-3xl tracking-tighter text-on-background mb-2">Smart Daily Planner</h1>
          <p className="text-on-surface-variant font-medium tracking-tight">The Fluid Workspace for your daily focus.</p>
        </div>

        {/* Login Card */}
        <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm">
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-on-surface ml-1" htmlFor="email">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline">
                  <Mail className="w-5 h-5" />
                </div>
                <input 
                  className="block w-full pl-11 pr-4 py-3.5 bg-surface-container-low border-none rounded-lg focus:ring-0 focus:bg-surface-container-high transition-colors duration-200 text-on-surface placeholder:text-outline-variant" 
                  id="email" 
                  name="email" 
                  placeholder="name@work.com" 
                  type="email" 
                  required
                />
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-focus-within:w-full transition-all duration-300"></div>
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="block text-sm font-semibold text-on-surface" htmlFor="password">Password</label>
                <a className="text-xs font-semibold text-primary hover:text-primary-dim transition-colors" href="#">Forgot password?</a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline">
                  <Lock className="w-5 h-5" />
                </div>
                <input 
                  className="block w-full pl-11 pr-12 py-3.5 bg-surface-container-low border-none rounded-lg focus:ring-0 focus:bg-surface-container-high transition-colors duration-200 text-on-surface placeholder:text-outline-variant" 
                  id="password" 
                  name="password" 
                  placeholder="••••••••" 
                  type="password" 
                  required
                />
                <button className="absolute inset-y-0 right-0 pr-4 flex items-center text-outline hover:text-on-surface transition-colors" type="button">
                  <Eye className="w-5 h-5" />
                </button>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-focus-within:w-full transition-all duration-300"></div>
              </div>
            </div>

            {/* Login Button */}
            <button 
              className="w-full editorial-gradient py-4 rounded-lg text-on-primary font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] transition-all duration-200 flex items-center justify-center space-x-2" 
              type="submit"
            >
              <span>Login</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8 text-center">
            <div aria-hidden="true" className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-surface-container-high"></div>
            </div>
            <span className="relative px-4 bg-surface-container-lowest text-xs font-semibold text-outline-variant uppercase tracking-widest">or continue with</span>
          </div>

          {/* Social Options */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center space-x-3 py-3 bg-surface-container-low rounded-lg hover:bg-surface-container-high transition-colors active:scale-95 duration-200">
              <img 
                alt="Google" 
                className="w-5 h-5" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA424xZ58DrlbQDJ3J3LcB-gP5tUohyWt4Rg5ZT12X6K_HQm2bX7Q8JbEf0oyM8Y9sYL4ucpVwDoqK7ED8KbXMm8_J9w0PNyDMN-JBQcQc9FUw24wC9fFAVmrpd0bTEz-ydOuEwKTj_VnnVyDRer-S48a0auUlTd4hHG7PQgdWj7hHGGDpCnqn9Dv5SMdt4zFMESuOf5zjN7tHkfiBvvd08Fgx8rdeJdInN6UbgCPLbad6ZoDMe3Z7tkTj27vlGB6jNbvQyZt55-H0" 
                referrerPolicy="no-referrer"
              />
              <span className="text-sm font-semibold text-on-surface">Google</span>
            </button>
            <button className="flex items-center justify-center space-x-3 py-3 bg-surface-container-low rounded-lg hover:bg-surface-container-high transition-colors active:scale-95 duration-200">
              <span className="text-sm font-semibold text-on-surface">Apple</span>
            </button>
          </div>
        </div>

        {/* Sign Up Footer */}
        <p className="text-center mt-10 text-on-surface-variant font-medium">
          Don't have an account? 
          <button 
            onClick={onSignup}
            className="text-primary font-bold hover:underline underline-offset-4 decoration-2 transition-all ml-1"
          >
            Sign-up for free
          </button>
        </p>
      </motion.div>

      {/* Footer Meta */}
      <footer className="fixed bottom-0 w-full p-8 flex justify-between items-center pointer-events-none opacity-40 hidden md:flex">
        <div className="text-[10px] font-bold tracking-[0.2em] text-outline uppercase">© 2024 Fluid Workspace Inc.</div>
        <div className="flex space-x-6">
          <span className="text-[10px] font-bold tracking-[0.2em] text-outline uppercase">Terms</span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-outline uppercase">Privacy</span>
        </div>
      </footer>
    </main>
  );
}
