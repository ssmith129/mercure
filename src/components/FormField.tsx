import React from 'react';
import { Check, AlertCircle, Eye, EyeOff } from 'lucide-react';

interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'password';
  value: string;
  error?: string;
  touched?: boolean;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  showPasswordToggle?: boolean;
  showPassword?: boolean;
  onPasswordToggle?: () => void;
  onChange: (name: string, value: string) => void;
  onBlur: (name: string) => void;
  onFocus: (name: string) => void;
  helpText?: string;
  maxLength?: number;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  value,
  error,
  touched,
  placeholder,
  required,
  rows = 4,
  showPasswordToggle,
  showPassword,
  onPasswordToggle,
  onChange,
  onBlur,
  onFocus,
  helpText,
  maxLength
}) => {
  const hasError = touched && error;
  const isValid = touched && !error && value.length > 0;
  const showCharCount = maxLength && (value.length > maxLength * 0.8 || hasError);

  const inputClasses = `
    w-full px-4 py-3 border-2 rounded-lg font-open-sans transition-all duration-200
    focus:outline-none focus:ring-0
    ${hasError 
      ? 'border-red-300 bg-red-50 focus:border-red-500 text-red-900' 
      : isValid 
        ? 'border-green-300 bg-green-50 focus:border-green-500 text-green-900'
        : 'border-gray-300 bg-white focus:border-jade-green hover:border-gray-400'
    }
    ${type === 'password' && showPasswordToggle ? 'pr-12' : ''}
  `;

  const renderInput = () => {
    if (type === 'textarea') {
      return (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          onBlur={() => onBlur(name)}
          onFocus={() => onFocus(name)}
          placeholder={placeholder}
          rows={rows}
          maxLength={maxLength}
          className={`${inputClasses} resize-none`}
        />
      );
    }

    return (
      <div className="relative">
        <input
          id={name}
          name={name}
          type={showPasswordToggle ? (showPassword ? 'text' : 'password') : type}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          onBlur={() => onBlur(name)}
          onFocus={() => onFocus(name)}
          placeholder={placeholder}
          maxLength={maxLength}
          className={inputClasses}
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={onPasswordToggle}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-semibold text-jet-black font-inter">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      {renderInput()}
      
      <div className="flex items-center justify-between min-h-[20px]">
        <div className="flex items-center space-x-2">
          {hasError && (
            <div className="flex items-center space-x-1 text-red-600">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              <span className="text-sm font-open-sans">{error}</span>
            </div>
          )}
          
          {isValid && (
            <div className="flex items-center space-x-1 text-green-600">
              <Check className="h-4 w-4 flex-shrink-0" />
              <span className="text-sm font-open-sans">Looks good!</span>
            </div>
          )}
          
          {!hasError && !isValid && helpText && (
            <span className="text-sm text-gray-500 font-open-sans">{helpText}</span>
          )}
        </div>
        
        {showCharCount && (
          <span className={`text-xs font-open-sans ${
            value.length > maxLength! ? 'text-red-500' : 'text-gray-400'
          }`}>
            {value.length}/{maxLength}
          </span>
        )}
      </div>
    </div>
  );
};

export default FormField;