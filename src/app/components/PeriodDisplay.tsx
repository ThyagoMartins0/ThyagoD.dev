'use client';

import { useEffect, useState } from 'react';
import { calculateTimeElapsed } from '../utils/dateUtils';

interface PeriodDisplayProps {
  startDate: string;
}

export default function PeriodDisplay({ startDate }: PeriodDisplayProps) {
  const [timeElapsed, setTimeElapsed] = useState('');

  useEffect(() => {
    const updateTimeElapsed = () => {
      const start = new Date(startDate);
      const elapsed = calculateTimeElapsed(start);
      setTimeElapsed(elapsed);
    };

    // Atualiza imediatamente
    updateTimeElapsed();

    // Atualiza a cada minuto
    const interval = setInterval(updateTimeElapsed, 60000);

    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <p>
      {startDate.split('-')[0]} - Atual - {timeElapsed}
    </p>
  );
} 