'use client';

import { stats } from '@/data/empresa';

export default function StatsGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg p-6 text-center border"
            style={{
              background: `linear-gradient(135deg, ${stat.bgGradient}, transparent)`,
              borderColor: stat.color + '20',
            }}
          >
            <div className="text-4xl font-bold mb-2" style={{ color: stat.color }}>
              {stat.value}
            </div>
            <div className="text-sm font-medium text-gray-700">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
