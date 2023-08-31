import Image from 'next/image';
import React from 'react';

function Avatar({ src, alt = "User Avatar", size = "small", username ,width, height}) {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-16 h-16',
    large: 'w-24 h-24'
  };

  return (
    <div className="flex items-center space-x-4">
      <Image
        src={src}
        alt={alt}
        className={`rounded-full border-2 border-gray-300 object-cover`}
        width={50}
        height={50}
      />
      {username && <span className="font-semibold text-gray-700">{username}</span>}
    </div>
  );
}

export default Avatar;
