import React from 'react';

const PlanetOrbit = ({ size = 'md', color = 'cosmic', className = '' }) => {
  const sizes = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64',
    xl: 'w-96 h-96',
  };

  const colors = {
    cosmic: 'border-cosmic-500',
    nebula: 'border-nebula-purple',
    pink: 'border-nebula-pink',
    blue: 'border-nebula-blue',
  };

  return (
    <div className={`relative ${sizes[size]} ${className}`}>
      {/* Outer orbit ring */}
      <div className={`absolute inset-0 rounded-full border ${colors[color]} opacity-30 animate-spin-slow`} />
      
      {/* Middle orbit ring */}
      <div 
        className={`absolute inset-4 rounded-full border ${colors[color]} opacity-20`}
        style={{ animation: 'spin 15s linear infinite reverse' }}
      />
      
      {/* Inner orbit ring */}
      <div 
        className={`absolute inset-8 rounded-full border ${colors[color]} opacity-10 animate-spin-slow`}
      />
      
      {/* Orbiting planet/dot */}
      <div className="absolute inset-0 animate-orbit">
        <div className={`w-3 h-3 rounded-full bg-${color}-500 glow-cosmic`} />
      </div>
    </div>
  );
};

export default PlanetOrbit;
