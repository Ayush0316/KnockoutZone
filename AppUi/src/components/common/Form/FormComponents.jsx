// FormComponents.jsx
import React, { useState } from 'react';
import { ChevronDown, Calendar, Upload, XCircle, CheckCircle, Loader2 } from 'lucide-react';
import { cva } from "class-variance-authority";
import PropTypes from "prop-types"; // For prop-types if you still use them
import { cn } from "../../../utils/utils"; // Assuming this path for your cn utility

// --- Shared Styles & Types ---
// Define common styles for input elements
const inputBaseStyles = 
  "w-full p-2 rounded-radius bg-input text-foreground border border-border focus:outline-none focus:ring-1 focus:ring-primary";

// Define common styles for labels
const labelBaseStyles = "block text-sm font-medium text-foreground mb-1";
const requiredIndicatorStyles = "text-destructive"; // For '*' next to required labels
const errorTextStyles = "text-destructive text-xs mt-1";

// CVA variants for shared input appearance (e.g., small, large, default)
// Not all inputs will use 'size', but it provides a consistent API if needed later.
const inputVariants = cva(inputBaseStyles, {
  variants: {
    // We can define 'styles' for different visual treatments like 'outline', 'solid', etc.
    // For now, mirroring ButtonComponent's idea of primary/secondary for form elements is less common,
    // but we can add 'variant' if distinct visual styles are needed.
    // For now, let's use a simple 'variant' for basic state (default, error)
    variant: {
      default: "",
      error: "border-destructive", // Applies red border for error state
    },
    // Example for size if you wanted different input heights/padding
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
Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "error"]),
  size: PropTypes.oneOf(["default", "sm", "lg"]),
};


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
SingleSelectDropdown.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "error"]),
  size: PropTypes.oneOf(["default", "sm", "lg"]),
};


// --- Reusable MultiSelect Dropdown ---
// Note: A true multi-select component often involves a custom UI (chips, search)
// rather than a native <select multiple>. This CVA setup is for the native element.
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
      inputVariants({ variant: error ? "error" : variant, size: "default" }), // Multi-select often has fixed height, so size might be less dynamic
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
MultiSelectDropdown.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  selectedValues: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "error"]),
};


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
DatePicker.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "error"]),
  size: PropTypes.oneOf(["default", "sm", "lg"]),
};


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
FileUpload.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
  multiple: PropTypes.bool,
  isLoading: PropTypes.bool,
};


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
RadioGroup.propTypes = {
  label: PropTypes.string,
  idPrefix: PropTypes.string.isRequired, // Unique prefix for radio group IDs
  name: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
};


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
Checkbox.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
};


// --- Form Components Page for Visual Reference (Remains largely the same, but uses new props) ---
const FormComponentsPage = () => {
  const [formData, setFormData] = useState({
    gameTitle: '',
    gameCategory: '',
    tournamentType: [],
    matchDate: '',
    gameImage: null,
    gamePlatform: 'pc',
    agreeTerms: false,
  });
  const [isUploading, setIsUploading] = useState(false); // State for FileUpload loading

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : (type === 'file' ? files : value),
    }));
    // Clear error when user starts typing/interacting
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    if (!formData.gameTitle) {
      errors.gameTitle = 'Game Title is required.';
    }
    if (!formData.gameCategory) {
      errors.gameCategory = 'Game Category is required.';
    }
    if (formData.tournamentType.length === 0) {
        errors.tournamentType = 'At least one Tournament Type is required.';
    }
    if (!formData.matchDate) {
        errors.matchDate = 'Match Date is required.';
    }
    if (!formData.gameImage) {
        errors.gameImage = 'Game Image is required.';
    }
    if (!formData.gamePlatform) {
        errors.gamePlatform = 'Game Platform is required.';
    }
    if (!formData.agreeTerms) {
        errors.agreeTerms = 'You must agree to the terms and conditions.';
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log('Form data submitted:', formData);
      alert('Form submitted successfully! Check console for data.');
      // Reset form or perform further actions
    } else {
      console.error('Form has errors:', errors);
    }
  };

  const categoryOptions = [
    { label: 'Action', value: 'action' },
    { label: 'Adventure', value: 'adventure' },
    { label: 'RPG', value: 'rpg' },
    { label: 'Strategy', value: 'strategy' },
    { label: 'Sports', value: 'sports' },
  ];

  const tournamentTypeOptions = [
    { label: 'Single Elimination', value: 'single_elimination' },
    { label: 'Double Elimination', value: 'double_elimination' },
    { label: 'Round Robin', value: 'round_robin' },
  ];

  const platformOptions = [
    { label: 'PC', value: 'pc' },
    { label: 'PlayStation', value: 'playstation' },
    { label: 'Xbox', value: 'xbox' },
    { label: 'Nintendo Switch', value: 'switch' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-3xl mx-auto bg-card rounded-radius p-8 shadow-lg border border-border">
        <h1 className="text-3xl font-bold text-primary mb-6 text-center">KnockoutZone Form Components</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Game Details Form</h2>

          <Input
            label="Game Title"
            id="gameTitle"
            name="gameTitle"
            value={formData.gameTitle}
            onChange={handleChange}
            error={formErrors.gameTitle}
            required
            placeholder="Enter game title"
            size="lg" // Example of new size prop
          />

          <SingleSelectDropdown
            label="Game Category"
            id="gameCategory"
            name="gameCategory"
            value={formData.gameCategory}
            onChange={handleChange}
            options={categoryOptions}
            error={formErrors.gameCategory}
            required
            size="default" // Example of new size prop
          />

          <MultiSelectDropdown
            label="Tournament Types (Select all that apply)"
            id="tournamentType"
            name="tournamentType"
            selectedValues={formData.tournamentType}
            onChange={handleChange}
            options={tournamentTypeOptions}
            error={formErrors.tournamentType}
            required
          />

          <DatePicker
            label="Match Date"
            id="matchDate"
            name="matchDate"
            value={formData.matchDate}
            onChange={handleChange}
            error={formErrors.matchDate}
            required
            size="sm" // Example of new size prop
          />

          <FileUpload
            label="Upload Game Image"
            id="gameImage"
            name="gameImage"
            onChange={handleChange}
            error={formErrors.gameImage}
            required
            isLoading={isUploading} // Example of loading state
          />
            {/* Simulate upload progress */}
            <button
                type="button"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-radius hover:shadow-glow-primary"
                onClick={() => setIsUploading(!isUploading)}
            >
                Toggle Uploading State
            </button>


          <RadioGroup
            label="Game Platform"
            idPrefix="gamePlatform"
            name="gamePlatform"
            selectedValue={formData.gamePlatform}
            onChange={handleChange}
            options={platformOptions}
            error={formErrors.gamePlatform}
            required
          />

          <Checkbox
            label="I agree to the terms and conditions"
            id="agreeTerms"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleChange}
            error={formErrors.agreeTerms}
            required
          />
            
            <div className="flex justify-end gap-4">
                <button
                    type="button"
                    onClick={() => {
                        setFormData({
                            gameTitle: '',
                            gameCategory: '',
                            tournamentType: [],
                            matchDate: '',
                            gameImage: null,
                            gamePlatform: 'pc',
                            agreeTerms: false,
                        });
                        setFormErrors({});
                        setIsUploading(false); // Reset upload state too
                    }}
                    className="px-6 py-2 rounded-radius bg-secondary text-secondary-foreground hover:bg-muted transition-smooth"
                >
                    Reset
                </button>
                <button
                    type="submit"
                    className="px-6 py-2 rounded-radius bg-primary text-primary-foreground hover:shadow-glow-primary transition-bounce"
                >
                    Submit Form
                </button>
            </div>
        </form>

        <div className="mt-8 pt-8 border-t border-border">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Component Usage Examples</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-muted p-4 rounded-radius border border-border">
              <h3 className="text-xl font-medium text-foreground mb-3">Input Example</h3>
              <Input label="Username" id="usernameEx" name="usernameEx" placeholder="Your username" size="default" />
              <Input label="Password" id="passwordEx" name="passwordEx" type="password" error="Password is too short" variant="error" />
              <Input label="Small Input" id="smallInputEx" name="smallInputEx" placeholder="Small" size="sm" />
              <Input label="Large Input" id="largeInputEx" name="largeInputEx" placeholder="Large" size="lg" />
            </div>

            <div className="bg-muted p-4 rounded-radius border border-border">
              <h3 className="text-xl font-medium text-foreground mb-3">Single Select Example</h3>
              <SingleSelectDropdown
                label="Game Genre"
                id="genreEx"
                name="genreEx"
                options={[{label: 'RPG', value: 'rpg'}, {label: 'Action', value: 'action'}]}
                size="default"
              />
               <SingleSelectDropdown
                label="Team Size"
                id="teamSizeEx"
                name="teamSizeEx"
                options={[{label: '2 Players', value: '2'}, {label: '4 Players', value: '4'}]}
                error="Required"
                size="sm"
              />
            </div>

            <div className="bg-muted p-4 rounded-radius border border-border">
              <h3 className="text-xl font-medium text-foreground mb-3">Multi Select Example</h3>
              <MultiSelectDropdown
                label="Game Modes"
                id="modesEx"
                name="modesEx"
                selectedValues={['deathmatch', 'team_battle']}
                options={[{label: 'Deathmatch', value: 'deathmatch'}, {label: 'Team Battle', value: 'team_battle'}, {label: 'Capture the Flag', value: 'ctf'}]}
              />
            </div>

            <div className="bg-muted p-4 rounded-radius border border-border">
              <h3 className="text-xl font-medium text-foreground mb-3">Date Picker Example</h3>
              <DatePicker label="Event Date" id="eventDateEx" name="eventDateEx" size="default" />
              <DatePicker label="Birthday" id="birthdayEx" name="birthdayEx" error="Date must be in the past" size="sm" />
            </div>

            <div className="bg-muted p-4 rounded-radius border border-border">
              <h3 className="text-xl font-medium text-foreground mb-3">File Upload Example</h3>
              <FileUpload label="Upload Avatar" id="avatarEx" name="avatarEx" />
              <FileUpload label="Upload Game Patch" id="patchEx" name="patchEx" isLoading={true} />
              <FileUpload label="Upload Documents (Multiple)" id="docsEx" name="docsEx" multiple />
            </div>

            <div className="bg-muted p-4 rounded-radius border border-border">
              <h3 className="text-xl font-medium text-foreground mb-3">Radio Group Example</h3>
              <RadioGroup
                label="Difficulty"
                idPrefix="difficultyEx"
                name="difficultyEx"
                options={[{label: 'Easy', value: 'easy'}, {label: 'Normal', value: 'normal'}, {label: 'Hard', value: 'hard'}]}
                selectedValue="normal"
              />
            </div>

            <div className="bg-muted p-4 rounded-radius border border-border">
              <h3 className="text-xl font-medium text-foreground mb-3">Checkbox Example</h3>
              <Checkbox label="Remember Me" id="rememberMeEx" name="rememberMeEx" checked={true} />
              <Checkbox label="Subscribe to Newsletter" id="newsletterEx" name="newsletterEx" checked={false} />
              <Checkbox label="I acknowledge the age requirement" id="ageReqEx" name="ageReqEx" checked={false} error="You must be 18+." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Input, SingleSelectDropdown, MultiSelectDropdown, DatePicker, FileUpload, RadioGroup, Checkbox, FormComponentsPage };