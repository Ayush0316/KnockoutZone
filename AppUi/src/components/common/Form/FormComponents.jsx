// FormComponents.jsx
import React, { useState } from 'react';
import { ChevronDown, Calendar, Upload, XCircle, CheckCircle, Loader2 } from 'lucide-react';
import { cva } from "class-variance-authority";
import { cn } from "../../../utils/utils"; 

// --- Shared Styles & Types ---
// Define common styles for input elements
const inputBaseStyles = 
  "w-full p-2 rounded-radius bg-input text-foreground border border-border focus:outline-none focus:ring-1 focus:ring-primary";

// Define common styles for labels
const labelBaseStyles = "block text-sm font-medium text-foreground mb-1";
const requiredIndicatorStyles = "text-destructive"; // For '*' next to required labels
const errorTextStyles = "text-destructive text-xs mt-1";

// CVA variants for shared input appearance (e.g., small, large, default)
const inputVariants = cva(inputBaseStyles, {
  variants: {
    variant: {
      default: "",
      error: "border-destructive", // Applies red border for error state
    },
    size: {
      default: "h-12 px-4 py-2 text-base", // Standard input size
      sm: "h-9 px-3 py-1 text-sm",     // Smaller input
      lg: "h-14 px-5 py-3 text-lg",    // Larger input
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});


// --- Reusable Input Component ---
const Input = React.forwardRef(
  ({ label, id, name, type = 'text', value, onChange, error, required, className, variant, size, ...props }, ref) => {
    const inputClass = cn(
      inputVariants({ variant: error ? "error" : variant, size }),
      className
    );

    return (
      <div className="mb-4">
        {label && (
          <label htmlFor={id} className={labelBaseStyles}>
            {label} {required && <span className={requiredIndicatorStyles}>*</span>}
          </label>
        )}
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={inputClass}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={!!error} // Indicate invalid state for accessibility
          ref={ref}
          {...props}
        />
        {error && (
          <p id={`${id}-error`} className={errorTextStyles}>
            {error}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";


// --- Reusable SingleSelect Dropdown ---
const SingleSelectDropdown = React.forwardRef(
  ({ label, id, name, value, onChange, options, error, required, className, variant, size, ...props }, ref) => {
    const selectClass = cn(
      inputVariants({ variant: error ? "error" : variant, size }), // Reusing inputVariants for consistency
      "appearance-none pr-8", // Specific for select to hide default arrow and make room for custom icon
      className
    );

    return (
      <div className="mb-4">
        {label && (
          <label htmlFor={id} className={labelBaseStyles}>
            {label} {required && <span className={requiredIndicatorStyles}>*</span>}
          </label>
        )}
        <div className="relative">
          <select
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            className={selectClass}
            aria-describedby={error ? `${id}-error` : undefined}
            aria-invalid={!!error}
            ref={ref}
            {...props}
          >
            <option value="" disabled>Select an option</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-foreground">
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
        {error && (
          <p id={`${id}-error`} className={errorTextStyles}>
            {error}
          </p>
        )}
      </div>
    );
  }
);
SingleSelectDropdown.displayName = "SingleSelectDropdown";


// --- Reusable MultiSelect Dropdown ---
const MultiSelectDropdown = React.forwardRef(
  ({ label, id, name, selectedValues, onChange, options, error, required, className, variant, ...props }, ref) => {
    const handleChange = (e) => {
        const value = Array.from(e.target.selectedOptions).map(option => option.value);
        onChange({ target: { name, value } });
    };

    const handleRemoveTag = (valueToRemove) => {
        const updatedValues = selectedValues.filter(val => val !== valueToRemove);
        onChange({ target: { name, value: updatedValues } });
    };

    const selectClass = cn(
      inputVariants({ variant: error ? "error" : variant, size: "default" }),
      "h-32", // Fixed height for multi-select
      className
    );

    return (
        <div className="mb-4">
            {label && (
                <label htmlFor={id} className={labelBaseStyles}>
                    {label} {required && <span className={requiredIndicatorStyles}>*</span>}
                </label>
            )}
            <div className="relative">
                <select
                    id={id}
                    name={name}
                    multiple
                    value={selectedValues}
                    onChange={handleChange}
                    className={selectClass}
                    aria-describedby={error ? `${id}-error` : undefined}
                    aria-invalid={!!error}
                    ref={ref}
                    {...props}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
            {error && (
                <p id={`${id}-error`} className={errorTextStyles}>
                    {error}
                </p>
            )}
            {selectedValues.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                    {selectedValues.map((val) => (
                        <span key={val} className="flex items-center bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">
                            {options.find(opt => opt.value === val)?.label}
                            <button
                                type="button"
                                className="ml-1 text-secondary-foreground/80 hover:text-secondary-foreground focus:outline-none focus:ring-1 focus:ring-secondary rounded-full"
                                onClick={() => handleRemoveTag(val)}
                                aria-label={`Remove ${options.find(opt => opt.value === val)?.label}`}
                            >
                                <XCircle className="h-3 w-3" />
                            </button>
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
});
MultiSelectDropdown.displayName = "MultiSelectDropdown";


// --- Reusable DatePicker ---
const DatePicker = React.forwardRef(
  ({ label, id, name, value, onChange, error, required, className, variant, size, ...props }, ref) => {
    const inputClass = cn(
      inputVariants({ variant: error ? "error" : variant, size }),
      className
    );

    return (
      <div className="mb-4">
        {label && (
          <label htmlFor={id} className={labelBaseStyles}>
            {label} {required && <span className={requiredIndicatorStyles}>*</span>}
          </label>
        )}
        <div className="relative">
          <input
            type="date"
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            className={inputClass}
            aria-describedby={error ? `${id}-error` : undefined}
            aria-invalid={!!error}
            ref={ref}
            {...props}
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-foreground">
            <Calendar className="h-4 w-4" />
          </div>
        </div>
        {error && (
          <p id={`${id}-error`} className={errorTextStyles}>
            {error}
          </p>
        )}
      </div>
    );
  }
);
DatePicker.displayName = "DatePicker";


// --- Reusable File Upload ---
const FileUpload = React.forwardRef(
  ({ label, id, name, onChange, error, required, className, multiple = false, isLoading = false, ...props }, ref) => {
    const [fileName, setFileName] = useState('');

    const handleFileChange = (e) => {
      if (e.target.files && e.target.files.length > 0) {
        setFileName(Array.from(e.target.files).map(file => file.name).join(', '));
      } else {
        setFileName('');
      }
      onChange(e);
    };

    const fileUploadClass = cn(
      "flex items-center justify-center w-full border border-border rounded-radius cursor-pointer bg-input hover:bg-muted transition-colors p-4",
      error && "border-destructive",
      isLoading && "animate-pulse-glow bg-muted-foreground", // Added loading state style
      className
    );

    return (
      <div className="mb-4">
        {label && (
          <label htmlFor={id} className={labelBaseStyles}>
            {label} {required && <span className={requiredIndicatorStyles}>*</span>}
          </label>
        )}
        <div className={fileUploadClass}>
          <label htmlFor={id} className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
            {isLoading ? (
              <Loader2 className="w-8 h-8 text-primary animate-spin mb-2" />
            ) : (
              <Upload className="w-8 h-8 text-muted-foreground mb-2" />
            )}
            <p className="mb-2 text-sm text-muted-foreground">
              <span className="font-semibold text-primary">
                {isLoading ? "Uploading..." : "Click to upload"}
              </span>{" "}
              or drag and drop
            </p>
            {fileName && !isLoading && <p className="text-xs text-foreground">{fileName}</p>}
            <input
              id={id}
              name={name}
              type="file"
              className="hidden"
              onChange={handleFileChange}
              multiple={multiple}
              aria-describedby={error ? `${id}-error` : undefined}
              aria-invalid={!!error}
              disabled={isLoading} // Disable input during loading
              ref={ref}
              {...props}
            />
          </label>
        </div>
        {error && (
          <p id={`${id}-error`} className={errorTextStyles}>
            {error}
          </p>
        )}
      </div>
    );
  }
);
FileUpload.displayName = "FileUpload";


// --- Reusable Radio Button Group ---
const RadioGroup = React.forwardRef(
  ({ label, idPrefix, name, selectedValue, onChange, options, error, required, className, ...props }, ref) => {
    return (
      <div className="mb-4">
        {label && (
          <label className={cn(labelBaseStyles, "mb-2")}>
            {label} {required && <span className={requiredIndicatorStyles}>*</span>}
          </label>
        )}
        <div className={cn("flex flex-col space-y-2", className)}>
          {options.map((option) => (
            <div key={option.value} className="flex items-center">
              <input
                type="radio"
                id={`${idPrefix}-${option.value}`}
                name={name}
                value={option.value}
                checked={selectedValue === option.value}
                onChange={onChange}
                className="h-4 w-4 text-primary bg-input border-border focus:ring-primary checked:bg-primary checked:border-primary cursor-pointer"
                aria-describedby={error ? `${idPrefix}-error` : undefined}
                aria-invalid={!!error}
                ref={ref} // Refers to the first radio input, consider using a separate ref for each if needed
                {...props}
              />
              <label htmlFor={`${idPrefix}-${option.value}`} className="ml-2 text-foreground text-sm cursor-pointer">
                {option.label}
              </label>
            </div>
          ))}
        </div>
        {error && (
          <p id={`${idPrefix}-error`} className={errorTextStyles}>
            {error}
          </p>
        )}
      </div>
    );
  }
);
RadioGroup.displayName = "RadioGroup";


// --- Reusable Checkbox ---
const Checkbox = React.forwardRef(
  ({ label, id, name, checked, onChange, error, required, className, ...props }, ref) => {
    const checkboxClass = cn(
      "h-4 w-4 text-primary bg-input border-border rounded focus:ring-primary checked:bg-primary checked:border-primary cursor-pointer",
      error && "border-destructive",
      className
    );

    return (
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={checked}
          onChange={onChange}
          className={checkboxClass}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={!!error}
          ref={ref}
          {...props}
        />
        {label && (
          <label htmlFor={id} className="ml-2 text-foreground text-sm cursor-pointer">
            {label} {required && <span className={requiredIndicatorStyles}>*</span>}
          </label>
        )}
        {error && (
          <p id={`${id}-error`} className={errorTextStyles}>
            {error}
          </p>
        )}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";


// Export all components
export { Input, SingleSelectDropdown, MultiSelectDropdown, DatePicker, FileUpload, RadioGroup, Checkbox };