import React from 'react';

const EmojiToggle = ({ enabled, setEnabled }) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={enabled}                 
        onChange={() => setEnabled(!enabled)}
        className="sr-only peer"
      />

      {/* Track */}
      <div className="w-14 h-7 bg-gray-300 dark:bg-gray-700 rounded-full transition-all duration-300 peer-checked:bg-white-500"></div>

      {/* Knob with emoji */}
      <div className="
        absolute top-1 left-1 w-5 h-5 flex items-center justify-center rounded-full
        bg-white dark:bg-gray-200 text-lg
        transition-all duration-300
        peer-checked:translate-x-7  text-gray-500
      ">
        {enabled ? "🌙" : "🌞"}
      </div>
    </label>
  );
};

export default EmojiToggle;
