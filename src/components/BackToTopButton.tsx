import React from 'react';
import { ChevronUp } from 'lucide-react';

type BackToTopButtonProps = {
  show: boolean;
  onClick: () => void;
};

const BackToTopButton: React.FC<BackToTopButtonProps> = ({ show, onClick }) => {
  if (!show) return null;

  return (
    <button
      onClick={onClick}
      className="fixed bottom-24 md:bottom-8 right-4 md:right-8 w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-700 transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center"
      aria-label="Volver arriba"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
};

export default BackToTopButton;
