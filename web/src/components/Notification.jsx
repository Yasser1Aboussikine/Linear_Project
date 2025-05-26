import React, { useEffect } from "react";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaInfoCircle,
  FaTimes,
} from "react-icons/fa";

const Notification = ({ message, type = "info", duration = 5000, onClose }) => {
  useEffect(() => {
    if (duration && onClose) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const typeStyles = {
    success: {
      bg: "bg-green-100",
      text: "text-green-800",
      border: "border-green-400",
      icon: <FaCheckCircle className="text-green-500" />,
    },
    error: {
      bg: "bg-red-100",
      text: "text-red-800",
      border: "border-red-400",
      icon: <FaExclamationCircle className="text-red-500" />,
    },
    info: {
      bg: "bg-blue-100",
      text: "text-blue-800",
      border: "border-blue-400",
      icon: <FaInfoCircle className="text-blue-500" />,
    },
  };

  const style = typeStyles[type];

  return (
    <div className={`fixed top-4 right-4 z-50 max-w-md w-full`}>
      <div
        className={`${style.bg} ${style.text} border ${style.border} rounded-lg shadow-lg p-4 flex items-start`}
      >
        <div className="flex-shrink-0 mr-3">{style.icon}</div>
        <div className="flex-1">
          <p className="text-sm font-medium">{message}</p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-4 flex-shrink-0 text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <FaTimes />
          </button>
        )}
      </div>
    </div>
  );
};

export default Notification;
