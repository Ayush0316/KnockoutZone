// FormComponents.jsx
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Calendar, Upload, X, Check, Search, Eye, EyeOff, Loader2 } from 'lucide-react';
import { cva } from "class-variance-authority";
import { cn } from "../../../utils/utils";


const inputBaseStyles =
  "light-glass-input w-full rounded-lg text-slate-800 " +
  "placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300";

const labelBaseStyles = "block text-sm font-semibold text-slate-800 mb-2 text-left";

const requiredIndicatorStyles = "text-orange-600 ml-1";
const errorTextStyles = "text-red-600 text-xs mt-1 text-left font-semibold";

const inputVariants = cva(inputBaseStyles, {
  variants: {
    variant: {
      default: "",
      error: "border-red-500/80 text-red-900 focus:ring-red-500",
    },
    size: {
      default: "h-11 px-4 text-sm",
      sm: "h-9 px-3 text-xs",
      lg: "h-14 px-5 text-base",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});


const Input = React.forwardRef(
  ({ label, id, name, type = 'text', value, onChange, error, required, size, placeholder, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputType = type === 'password' && showPassword ? 'text' : type;

    return (
      <div className=" mb-4 w-full">
        {label && (
          <label htmlFor={id} className={labelBaseStyles}>
            {label} {required && <span className={requiredIndicatorStyles}>*</span>}
          </label>
        )}
        <div className="light-glass-pane relative">
          <input
            type={inputType}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            className={cn(inputVariants({ variant: error ? "error" : "default", size }))}
            ref={ref}
            placeholder={placeholder}
            {...props}
          />
          {type === 'password' && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-600 hover:text-slate-900 focus:outline-none focus:ring-1 focus:ring-orange-500 rounded-full"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          )}
        </div>
        {error && <p className={errorTextStyles}>{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";


const SingleSelectDropdown = React.forwardRef(
  ({ label, id, name, value, onChange, options, error, required, size, placeholder = "Select an option" }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);
    
    const selectedOption = options.find(opt => opt.value === value);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [wrapperRef]);
    
    const handleSelectOption = (optionValue) => {
        onChange({ target: { name, value: optionValue } });
        setIsOpen(false);
    };

    return (
      <div className=" w-full mb-4" ref={wrapperRef}>
        {label && <label htmlFor={id} className={labelBaseStyles}>{label}{required && <span className={requiredIndicatorStyles}>*</span>}</label>}
        <div className="relative">
          {/* This button looks like an input and triggers the dropdown */}
          <button
            type="button"
            id={id}
            ref={ref}
            onClick={() => setIsOpen(!isOpen)}
            className={cn(inputVariants({ variant: error ? "error" : "default", size }), "flex items-center justify-between text-left")}
          >
            <span className={cn(!selectedOption && "text-muted-foreground")}>
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            <ChevronDown className={cn("w-5 h-5 transition-transform duration-200 text-muted-foreground", isOpen && "rotate-180")} />
          </button>

          {isOpen && (
            <div className="light-glass-pane absolute z-10 w-full mt-2 p-1 rounded-radius">
              <ul className="max-h-60 overflow-y-auto">
                {options.map(option => (
                  <li
                    key={option.value}
                    onClick={() => handleSelectOption(option.value)}
                    className={cn("flex items-center justify-between p-2 text-sm rounded-md cursor-pointer hover:bg-muted", option.value === value && "font-semibold")}
                  >
                    {option.label}
                    {option.value === value && <Check className="w-4 h-4 text-primary" />}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {error && <p className={errorTextStyles}>{error}</p>}
      </div>
    );
  }
);
SingleSelectDropdown.displayName = "SingleSelectDropdown";


const MultiSelectDropdown = React.forwardRef(
  ({ label, id, name, selectedValues = [], onChange, options, error, required, placeholder = "Select options...", ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
      function handleClickOutside(event) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [wrapperRef]);
    
    const handleSelectOption = (value) => {
      const newSelectedValues = selectedValues.includes(value)
        ? selectedValues.filter((v) => v !== value)
        : [...selectedValues, value];
      onChange({ target: { name, value: newSelectedValues } });
    };

    const handleRemoveTag = (valueToRemove, e) => {
      e.stopPropagation();
      const newSelectedValues = selectedValues.filter((v) => v !== valueToRemove);
      onChange({ target: { name, value: newSelectedValues } });
    };
    
    const selectedOptionsMap = options.reduce((acc, opt) => {
      if (selectedValues.includes(opt.value)) {
        acc[opt.value] = opt.label;
      }
      return acc;
    }, {});

    return (
      <div className="mb-4 w-full" ref={wrapperRef}>
        {label && (
          <label htmlFor={id} className={labelBaseStyles}>
            {label} {required && <span className={requiredIndicatorStyles}>*</span>}
          </label>
        )}
        <div className="relative">
          <div
            className={cn(inputVariants({ variant: error ? "error" : "default" }), "h-auto min-h-[44px] flex items-center flex-wrap gap-1.5 p-2 cursor-text")}
            onClick={() => setIsOpen(true)}
          >
            {selectedValues.map(value => (
              <span key={value} className="flex items-center bg-white/50 text-slate-700 text-xs px-2 py-1 rounded-md border border-white/70">
                {selectedOptionsMap[value]}
                <button type="button" className="ml-1.5 text-slate-600 hover:text-slate-900 focus:outline-none" onClick={(e) => handleRemoveTag(value, e)}>
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
            <input type="text" id={id} placeholder={selectedValues.length === 0 ? placeholder : ""} className="flex-grow bg-transparent outline-none text-slate-800 text-sm h-full" {...props}/>
          </div>
          {isOpen && (
            <div className="light-glass-pane absolute z-10 w-full mt-2 rounded-lg animate-in fade-in-0 zoom-in-95 p-1">
              <ul className="max-h-60 overflow-y-auto">
                {options.map(option => (
                  <li key={option.value} className="flex items-center p-2 rounded-md hover:bg-white/30 cursor-pointer" onClick={() => handleSelectOption(option.value)}>
                    <div className={cn("h-4 w-4 shrink-0 rounded border border-slate-500 flex items-center justify-center", { "bg-orange-500 border-orange-500 text-white": selectedValues.includes(option.value) })}>
                      {selectedValues.includes(option.value) && <Check className="h-3 w-3" />}
                    </div>
                    <span className={cn("ml-2 text-sm", selectedValues.includes(option.value) ? "text-slate-900 font-semibold" : "text-slate-700")}>{option.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {error && <p className={errorTextStyles}>{error}</p>}
      </div>
    );
  }
);
MultiSelectDropdown.displayName = "MultiSelectDropdown";


const DatePicker = React.forwardRef(
  ({ label, id, name, value, onChange, error, required, size, ...props }, ref) => (
    <div className="mb-4 w-full">
      {label && <label htmlFor={id} className={labelBaseStyles}>{label} {required && <span className={requiredIndicatorStyles}>*</span>}</label>}
      <div className="relative">
        <input type="date" id={id} name={name} value={value} onChange={onChange} className={cn(inputVariants({ variant: error ? "error" : "default", size }), "pr-10")} ref={ref} {...props} />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-slate-600"><Calendar className="h-5 w-5" /></div>
      </div>
      {error && <p className={errorTextStyles}>{error}</p>}
    </div>
  )
);
DatePicker.displayName = "DatePicker";


const FileUpload = React.forwardRef(
  ({ label, id, name, onChange, error, required, isLoading = false, ...props }, ref) => {
    const [fileName, setFileName] = useState('');
    const handleFileChange = (e) => {
      if (e.target.files?.length) setFileName(Array.from(e.target.files).map(file => file.name).join(', '));
      else setFileName('');
      if (onChange) onChange(e);
    };
    return (
      <div className="mb-4 w-full">
        {label && <label htmlFor={id} className={labelBaseStyles}>{label} {required && <span className={requiredIndicatorStyles}>*</span>}</label>}
        <label htmlFor={id} className={cn("light-glass-pane flex flex-col items-center justify-center w-full min-h-[120px] p-4 text-center rounded-lg border-2 border-dashed border-white/50 cursor-pointer hover:border-orange-500/50 hover:bg-white/60 transition-all duration-300", error && "border-red-500/80", isLoading && "animate-pulse")}>
          <input id={id} name={name} type="file" className="hidden" onChange={handleFileChange} disabled={isLoading} ref={ref} {...props} />
          {isLoading ? <Loader2 className="w-8 h-8 text-orange-500 animate-spin mb-2" /> : <Upload className="w-8 h-8 text-slate-600 mb-2" />}
          <p className="mb-2 text-sm text-slate-700">
            <span className="font-semibold text-orange-600">{isLoading ? "Uploading..." : "Click to upload"}</span> or drag & drop
          </p>
          {fileName && !isLoading && <p className="text-xs text-slate-600">{fileName}</p>}
        </label>
        {error && <p className={errorTextStyles}>{error}</p>}
      </div>
    );
  }
);
FileUpload.displayName = "FileUpload";


const RadioGroup = React.forwardRef(
  ({ label, idPrefix, name, selectedValue, onChange, options, error, required, ...props }, ref) => (
    <fieldset className="mb-4 w-full">
      {label && <legend className={labelBaseStyles}>{label} {required && <span className={requiredIndicatorStyles}>*</span>}</legend>}
      <div className="flex flex-col space-y-2 mt-2">
        {options.map((option, index) => (
          <label key={option.value} className="flex items-center cursor-pointer p-2 rounded-md hover:bg-white/20">
            <input type="radio" id={`${idPrefix}-${option.value}`} name={name} value={option.value} checked={selectedValue === option.value} onChange={onChange} className="h-5 w-5 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-slate-900/30 bg-white/20 checked:border-transparent checked:bg-gradient-to-br from-orange-500 to-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white/50 focus:ring-orange-500" ref={index === 0 ? ref : null} {...props} />
            <span className="ml-3 text-slate-800 text-sm font-medium">{option.label}</span>
          </label>
        ))}
      </div>
      {error && <p className={errorTextStyles}>{error}</p>}
    </fieldset>
  )
);
RadioGroup.displayName = "RadioGroup";


const Checkbox = React.forwardRef(
  ({ label, id, name, checked, onChange, error, required, ...props }, ref) => (
    <div className="mb-4 flex items-center w-full">
      <label htmlFor={id} className="flex items-center cursor-pointer p-2 rounded-md hover:bg-white/20">
        <div className="relative flex items-center h-5 w-5">
            <input type="checkbox" id={id} name={name} checked={checked} onChange={onChange} className="h-5 w-5 shrink-0 cursor-pointer appearance-none rounded-md border-2 border-slate-900/30 bg-white/20 checked:border-transparent checked:bg-gradient-to-br from-orange-500 to-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white/50 focus:ring-orange-500" ref={ref} {...props} />
            {checked && <Check className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 text-white pointer-events-none" />}
        </div>
        <span className="ml-3 text-slate-800 text-sm font-medium">{label}</span>
        {required && <span className={cn(requiredIndicatorStyles, "ml-1")}>*</span>}
      </label>
      {error && <p id={`${id}-error`} className={errorTextStyles}>{error}</p>}
    </div>
  )
);
Checkbox.displayName = "Checkbox";


export { Input, SingleSelectDropdown, MultiSelectDropdown, DatePicker, FileUpload, RadioGroup, Checkbox };