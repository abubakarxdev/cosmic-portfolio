import React from 'react';

const NebulaBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      {/* Purple Nebula */}
      <div 
        className="nebula-blob absolute top-1/4 left-1/4 w-96 h-96 bg-nebula-purple opacity-20"
        style={{ animationDelay: '0s' }}
      />
      
      {/* Pink Nebula */}
      <div 
        className="nebula-blob absolute top-2/3 right-1/4 w-80 h-80 bg-nebula-pink opacity-20"
        style={{ animationDelay: '5s' }}
      />
      
      {/* Blue Nebula */}
      <div 
        className="nebula-blob absolute bottom-1/4 left-1/3 w-72 h-72 bg-nebula-blue opacity-20"
        style={{ animationDelay: '10s' }}
      />
      
      {/* Cyan Nebula */}
      <div 
        className="nebula-blob absolute top-1/2 right-1/3 w-64 h-64 bg-nebula-cyan opacity-15"
        style={{ animationDelay: '15s' }}
      />
    </div>
  );
};

export default NebulaBackground;
