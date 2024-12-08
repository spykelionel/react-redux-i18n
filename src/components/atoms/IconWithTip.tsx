import React from "react";

const IconWithTip = ({ icon, content }: { icon?: any; content: string }) => {
  return (
    <div className="relative flex flex-col items-center group">
      {icon}

      {/* Tooltip */}
      <div className="absolute bottom-8 hidden group-hover:block bg-black text-white text-xs rounded-lg py-2 px-4 z-50 w-max">
        {content}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-3 h-3 bg-black rotate-45"></div>
      </div>
    </div>
  );
};

export default IconWithTip;
