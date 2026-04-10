import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export function SignupScreen({ onSignup, onLogin }: { onSignup: () => void, onLogin: () => void }) {
  return (
    <main className="bg-background font-sans text-on-background min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-[1200px] grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Branding & Narrative */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex flex-col space-y-8 pr-12"
        >
          <div>
            <h1 className="font-headline text-5xl font-extrabold tracking-tighter text-on-background mb-4">
              The Fluid Workspace
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
              Designed for mental clarity. A premium editorial environment for your daily planning and deep work.
            </p>
          </div>

          {/* Bento-style decorative highlights */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-container-low p-6 rounded-xl space-y-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">auto_awesome</span>
              </div>
              <h3 className="font-headline font-semibold text-on-background">Smart Logic</h3>
              <p className="text-sm text-on-surface-variant">Autonomous prioritization of your most critical tasks.</p>
            </div>
            <div className="bg-primary-container/10 p-6 rounded-xl space-y-3 mt-8">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">visibility_lock</span>
              </div>
              <h3 className="font-headline font-semibold text-on-background">Focus Mode</h3>
              <p className="text-sm text-on-surface-variant">Minimize noise with high-fidelity visual isolation.</p>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden aspect-video shadow-sm">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt5FAS1SXALWkywEbWfHmFf10a7YLC302txwVLNoq4UAI78RiHsTL1Jue1uc4jANzbOsIOuIIW6GeaeIEx5FB8TS4bjI7NjLVIkl3kw8oC0kZGvrGclb6EJoTYb0BffUTmtu5GbFWwlYYBYU7jK3DuyDYaVt27fqUs2-Sr7XYH--SJCqtouFaouEZG3W1etiUkQPghLhVsYkei9P-69Z59xRGgyvGZAqwTONATXXcIiwxMaSFgc0QICqmIXVLwWOY7M9y2b3AUWus" 
              alt="Minimalist workspace"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
          </div>
        </motion.div>

        {/* Right Column: Signup Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center items-center md:items-start"
        >
          <div className="w-full max-w-md bg-surface-container-lowest rounded-xl p-8 md:p-12 shadow-sm">
            <header className="mb-10">
              <h2 className="font-headline text-3xl font-bold tracking-tight text-on-background">Create account</h2>
              <p className="text-on-surface-variant mt-2">Start your journey into deep productivity.</p>
            </header>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onSignup(); }}>
              {/* Name Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-on-surface-variant px-1" htmlFor="name">Name</label>
                <input 
                  className="w-full px-4 py-3.5 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all duration-300 placeholder:text-outline-variant" 
                  id="name" 
                  name="name" 
                  placeholder="Julian Reed" 
                  type="text"
                  required
                />
              </div>
              {/* Email Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-on-surface-variant px-1" htmlFor="email">Email address</label>
                <input 
                  className="w-full px-4 py-3.5 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all duration-300 placeholder:text-outline-variant" 
                  id="email" 
                  name="email" 
                  placeholder="name@workspace.com" 
                  type="email"
                  required
                />
              </div>
              {/* Password Fields */}
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-on-surface-variant px-1" htmlFor="password">Password</label>
                  <input 
                    className="w-full px-4 py-3.5 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all duration-300 placeholder:text-outline-variant" 
                    id="password" 
                    name="password" 
                    placeholder="••••••••" 
                    type="password"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-on-surface-variant px-1" htmlFor="confirm-password">Confirm password</label>
                  <input 
                    className="w-full px-4 py-3.5 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-highest transition-all duration-300 placeholder:text-outline-variant" 
                    id="confirm-password" 
                    name="confirm-password" 
                    placeholder="••••••••" 
                    type="password"
                    required
                  />
                </div>
              </div>
              {/* Terms checkbox */}
              <div className="flex items-start space-x-3 pt-2">
                <div className="flex items-center h-5">
                  <input 
                    className="h-4 w-4 rounded border-outline-variant text-primary focus:ring-primary/20 bg-surface-container-low" 
                    id="terms" 
                    name="terms" 
                    type="checkbox"
                    required
                  />
                </div>
                <div className="text-xs text-on-surface-variant leading-relaxed">
                  By creating an account, I agree to the <a className="text-primary hover:underline" href="#">Terms of Service</a> and <a className="text-primary hover:underline" href="#">Privacy Policy</a>.
                </div>
              </div>
              {/* Submit Button */}
              <button 
                className="w-full editorial-gradient text-on-primary font-semibold py-4 rounded-lg shadow-lg active:scale-95 transition-all duration-200" 
                type="submit"
              >
                Create account
              </button>
            </form>
            <footer className="mt-8 pt-8 border-t border-surface-container text-center">
              <p className="text-sm text-on-surface-variant">
                Already have an account? 
                <button 
                  onClick={onLogin}
                  className="text-primary font-semibold hover:underline ml-1"
                >
                  Log in
                </button>
              </p>
            </footer>
          </div>
        </motion.div>
      </div>
      {/* Footer Meta */}
      <div className="fixed bottom-8 left-0 right-0 text-center pointer-events-none">
        <span className="text-[10px] uppercase tracking-widest text-outline-variant opacity-50">© 2024 Editorial Systems Inc.</span>
      </div>
    </main>
  );
}
