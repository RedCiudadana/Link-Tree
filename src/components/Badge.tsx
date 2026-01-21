import React from 'react';
import { Sparkles } from 'lucide-react';

type BadgeProps = {
  children: React.ReactNode;
  variant?: 'new' | 'updated' | 'recommended';
};

const Badge: React.FC<BadgeProps> = ({ children, variant = 'new' }) => {
  const variants = {
    new: 'bg-green-100 text-green-800',
    updated: 'bg-blue-100 text-blue-800',
    recommended: 'bg-purple-100 text-purple-800'
  };

  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${variants[variant]}`}>
      <Sparkles className="w-3 h-3" />
      {children}
    </span>
  );
};

export default Badge;
