import React from "react";

function ModernGridPattern() {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      {/* Modern grid pattern */}
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
    </div>
  );
}

export default ModernGridPattern;
