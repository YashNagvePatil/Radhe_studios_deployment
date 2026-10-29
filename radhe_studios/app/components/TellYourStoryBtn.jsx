   'use client'
import React from 'react'
import { ArrowRight} from 'lucide-react'
import { useRouter } from 'next/navigation';

const TellYourStoryBtn = () => {
  const router = useRouter();

       const handleNavigate = () => {
         router.push("/contact");
      };

  return (
            <button onClick={handleNavigate} className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-medium text-xs uppercase tracking-[0.2em] hover:brightness-110 transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 group cursor-pointer">
              <span>Tell Your Story</span>
              <ArrowRight className="w-4 h-4 stroke-[1.5] group-hover:translate-x-1 transition-transform" />
            </button>
  )
}

export default TellYourStoryBtn