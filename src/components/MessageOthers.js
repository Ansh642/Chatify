// MessageOther.js
import React from 'react';

const MessageOther = ({ message }) => {
  return (
    <div className="flex justify-start mb-2">
      <div className="bg-richblack-700 text-white px-4 py-2 rounded-lg">
        <p className="text-sm">{message.text}</p>
      </div>
    </div>
  );
};

export default MessageOther;
