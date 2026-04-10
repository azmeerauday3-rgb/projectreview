import React from 'react';
import { motion } from 'motion/react';
import { 
  Bell, 
  ArrowRight, 
  AlarmClock as Alarm, 
  CheckCircle, 
  UserPlus,
  CalendarDays,
  Timer,
  Users,
  AlertTriangle
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function InboxScreen() {
  const notifications = [
    {
      id: 1,
      type: 'deadline',
      title: 'Upcoming deadline: Q3 Strategy Deck',
      desc: 'Final review of the quarterly growth strategy is due soon. Ensure all contributors have finalized their sections.',
      time: '2 hours left',
      meta: 'PROJECTS • STRATEGY',
      unread: true,
      icon: AlertTriangle,
      iconColor: 'text-error',
      bgColor: 'bg-error-container/20'
    },
    {
      id: 2,
      type: 'reminder',
      title: 'Daily Stand-up in 15 minutes',
      desc: "Preparation for morning sync. Don't forget to update your 'In Progress' tasks before joining the link.",
      time: '10:45 AM',
      unread: false,
      icon: Alarm,
      iconColor: 'text-secondary',
      bgColor: 'bg-secondary-container/30'
    },
    {
      id: 3,
      type: 'completed',
      title: 'Task Completed: Hero Section Design',
      desc: "Sarah Miller moved 'Hero Section' to the Archive. All feedback loops are closed.",
      time: 'Yesterday',
      unread: false,
      completed: true,
      icon: CheckCircle,
      iconColor: 'text-on-surface-variant',
      bgColor: 'bg-surface-container-highest'
    },
    {
      id: 4,
      type: 'assignment',
      title: 'Assigned to: Editorial Review',
      desc: 'You have been tagged as the primary reviewer for the "Winter Collection" editorial layout.',
      time: '3h ago',
      unread: true,
      icon: UserPlus,
      iconColor: 'text-tertiary',
      bgColor: 'bg-tertiary-container/30',
      avatars: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCj1qkUz_JX2nTGLJr2LqCjQi-KqxiNQwb4aLUC0NQ3rtoxlU5HFDX68hIxhJU2MMFek5EduoR54YASmTWYGMp20cGa3t_enb61-Y2XrcdW7HWNanrA8qaJcmiVfeiBPuoIJL8OQVO_f5Uqbyi6l0mKGqsbmKthSPAfDxYH2iLLaYu3-WCu-aDEzd-l5IGMBRjRhSug1Ny9rCBzEc7RHeG75hn9AbpUPC0TUDjkxVpaejss31eSwUqj2Hztm5WXIuFrlbIuIwrY6xc",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBmDBh7l_74IRile3auyEVDH5p5g3jRkE-RNpZAUfIAURMYzRkrlgyItEJ22T1iqXjEkFzUwAd64cKJiQCp83RVlp_xAlzqCL-9LyrGO71s-jDmgK64j3oG89F0S1IaPU82n8Kt5VBn7JYJDrZdxt2BvwlQg3a29Wt2HphFJPQw12fYieAUh9KmbLds0IZwmbWqICpmyKJaX-JP3tRIMv-zj8kTWHiQRFzZ1qpJqsviPuU2-XbpNqsVM50OTdeQUJMwsHC9ZoZfw5k"
      ]
    }
  ];

  return (
    <div className="pt-28 pb-12 px-8 min-h-screen max-w-5xl mx-auto">
      <header className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-headline font-extrabold tracking-tighter text-on-background mb-2">Inbox</h1>
            <p className="text-on-surface-variant font-medium">Stay updated with your fluid workflow and creative deadlines.</p>
          </motion.div>
          <div className="flex gap-3">
            <button className="px-5 py-2.5 rounded-lg bg-surface-container-high text-primary font-semibold text-sm hover:bg-surface-container-highest transition-colors">
              Mark all read
            </button>
            <button className="px-5 py-2.5 rounded-lg editorial-gradient text-on-primary font-semibold text-sm shadow-md active:scale-95 transition-all">
              Filter
            </button>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant/60 px-2">Recent Activities</h2>
          {notifications.map((notif, i) => (
            <motion.div 
              key={notif.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "group relative bg-surface-container-lowest p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex gap-5",
                notif.completed && "opacity-70 grayscale-[0.5]"
              )}
            >
              <div className={cn("flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center", notif.bgColor)}>
                <notif.icon className={cn("w-6 h-6", notif.iconColor)} />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-lg text-on-background">{notif.title}</h3>
                  <span className="text-xs font-semibold text-on-surface-variant bg-surface-container px-2 py-1 rounded">{notif.time}</span>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-4">{notif.desc}</p>
                {notif.meta && (
                  <div className="flex items-center gap-4">
                    <button className="text-primary text-xs font-bold flex items-center gap-1">
                      OPEN PROJECT <ArrowRight className="w-4 h-4" />
                    </button>
                    <span className="text-[10px] text-outline uppercase font-bold tracking-tighter">{notif.meta}</span>
                  </div>
                )}
                {notif.avatars && (
                  <div className="flex -space-x-2">
                    {notif.avatars.map((url, idx) => (
                      <img key={idx} src={url} alt="Team" className="w-8 h-8 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
                    ))}
                    <div className="w-8 h-8 rounded-full bg-surface-container-highest border-2 border-white flex items-center justify-center text-[10px] font-bold text-on-surface-variant">+2</div>
                  </div>
                )}
              </div>
              {notif.unread && <div className="absolute top-6 right-6 w-2 h-2 bg-primary rounded-full"></div>}
            </motion.div>
          ))}
        </div>

        <div className="md:col-span-4 space-y-6">
          <div className="bg-surface-container-low p-6 rounded-xl">
            <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 mb-4">Categories</h3>
            <div className="space-y-3">
              {[
                { label: 'Reminders', icon: AlertTriangle, count: 12, active: true },
                { label: 'Deadlines', icon: Timer, count: 4 },
                { label: 'Completed', icon: CheckCircle },
                { label: 'Mentions', icon: Users, count: 8 },
              ].map((cat, i) => (
                <div 
                  key={i}
                  className={cn(
                    "flex items-center justify-between p-3 rounded-lg transition-colors cursor-pointer",
                    cat.active ? "bg-white shadow-sm" : "hover:bg-white/40"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <cat.icon className={cn("w-5 h-5", cat.active ? "text-primary" : "text-on-surface-variant")} />
                    <span className={cn("text-sm", cat.active ? "font-semibold" : "font-medium")}>{cat.label}</span>
                  </div>
                  {cat.count && (
                    <span className={cn("text-[10px] px-2 py-0.5 rounded font-bold", cat.active ? "bg-primary/10 text-primary" : "text-on-surface-variant")}>
                      {cat.count}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden bg-primary p-6 rounded-xl text-on-primary">
            <div className="relative z-10">
              <h3 className="font-bold text-lg mb-2">Deep Focus Mode</h3>
              <p className="text-sm opacity-80 mb-4">Mute all notifications for the next 2 hours to achieve deep work.</p>
              <button className="w-full py-2.5 bg-white text-primary rounded-lg font-bold text-sm shadow-lg active:scale-95 transition-all">
                Activate Now
              </button>
            </div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -left-5 -top-5 w-20 h-20 bg-primary-container rounded-full blur-2xl"></div>
          </div>

          <div className="aspect-square rounded-xl overflow-hidden bg-surface-container-highest">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVhV4qu5kFONrifPmLYBG1aWrNYm_UHFbfOfHfpfoCj8E5g4eRoHaGqMzjTZrAhfMCKj2tlBaMDbZMgvnwYQijWmYMekIBib4Cf_tlUt8EBU712pJCNGB5tK-c6MrkSGtJJvZ25RHAkaWJ5UnKvHNHkziZgJaypXjO-Lg5AxB0tkiZ52CrWWg8waX0Be81v9Il_KPNlFH4LcIuhDLBX2VwUGvKY-ymTBWllCsvOnGNKSYhnfR6QW8e-4IUkn7kVLFhwxS4SZ4ke9M" 
              alt="Clean Workspace" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
