'use client';

import { stats } from '@/data/empresa';
import { useState } from 'react';

export default function StatsGrid() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="relative z-20 py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group relative overflow-hidden rounded-xl px-4 md:px-6 py-6 md:py-8 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-default"
              style={{
                background: `linear-gradient(135deg, ${stat.bgGradient}, transparent), #ffffff`,
                boxShadow: hoveredIdx === idx
                  ? `0 20px 40px rgba(0, 0, 0, 0.12), 0 0 30px ${stat.color}40`
                  : '0 4px 12px rgba(0, 0, 0, 0.08)',
                borderColor: stat.color + '20',
                borderWidth: '1px',
              }}
            >
              {/* Ícono decorativo */}
              <div
                className="w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: stat.color + '15' }}
              >
                <svg
                  className="w-6 h-6 md:w-8 md:h-8"
                  fill="none"
                  stroke={stat.color}
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  {stat.iconName === 'departamentos' && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12h18M3 6h18M3 18h18M5 9v6M19 9v6"
                    />
                  )}
                  {stat.iconName === 'estacionamiento' && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7h8M8 12h8m-8 5h8M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
                    />
                  )}
                  {stat.iconName === 'bodegas' && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.5v2.25m3-6.75v6M12 21h9.375A2.625 2.625 0 0 0 21 18.375V3.375c0-.621-.504-1.125-1.125-1.125H2.625C2.004 2.25 1.5 2.754 1.5 3.375v15c0 .621.504 1.125 1.125 1.125H12"
                    />
                  )}
                </svg>
              </div>

              {/* Valor */}
              <div
                className="text-2xl md:text-3xl font-bold transition-colors duration-300"
                style={{ color: hoveredIdx === idx ? stat.color : '#1f2937' }}
              >
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-xs md:text-sm text-gray-600 font-medium text-center leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
