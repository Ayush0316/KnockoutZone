import React, { useState } from 'react';
import { ChevronDown, Calendar, Upload, XCircle, CheckCircle, Loader2 } from 'lucide-react';
import {
  Input,
  SingleSelectDropdown,
  MultiSelectDropdown,
  DatePicker,
  FileUpload,
  RadioGroup,
  Checkbox,
} from '../components/common/Form/FormComponents';  // Adjust path as needed

const FormComponentsHelp = () => {
  // State for live example forms
  const [basicInput, setBasicInput] = useState('');
  const [errorInput, setErrorInput] = useState('Error text');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedMulti, setSelectedMulti] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [radioOption, setRadioOption] = useState('option1');
  const [isChecked, setIsChecked] = useState(false);
  const [isErrorCheckbox, setIsErrorCheckbox] = useState(false); // For error checkbox demo

  const categoryOptions = [
    { label: 'Action', value: 'action' },
    { label: 'Adventure', value: 'adventure' },
    { label: 'RPG', value: 'rpg' },
  ];

  const multiSelectOptions = [
    { label: 'Team A', value: 'team_a' },
    { label: 'Team B', value: 'team_b' },
    { label: 'Team C', value: 'team_c' },
  ];

  const radioOptions = [
    { label: 'Option One', value: 'option1' },
    { label: 'Option Two', value: 'option2' },
    { label: 'Option Three', value: 'option3' },
  ];


  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        {/* Main Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">Form Components Documentation</h1>
          <p className="text-lg text-muted-foreground">
            A set of standardized, highly customizable form components for the KnockoutZone application.
            Designed for consistent styling, enhanced UX, and simplified validation.
          </p>
        </div>

        {/* Live Examples Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">Live Examples</h2>
          
          {/* Input Component Examples */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Input Component</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-card rounded-lg border">
              <Input
                label="Default Input"
                id="liveInputDefault"
                name="liveInputDefault"
                placeholder="Enter text here"
                value={basicInput}
                onChange={(e) => setBasicInput(e.target.value)}
              />
              <Input
                label="Input with Error"
                id="liveInputError"
                name="liveInputError"
                placeholder="Required field"
                value={errorInput}
                onChange={(e) => setErrorInput(e.target.value)}
                error="This field is required!"
              />
              <Input
                label="Small Input"
                id="liveInputSmall"
                name="liveInputSmall"
                placeholder="Compact size"
                size="sm"
              />
              <Input
                label="Large Input"
                id="liveInputLarge"
                name="liveInputLarge"
                placeholder="Prominent size"
                size="lg"
              />
            </div>
          </div>

          {/* SingleSelect Dropdown Examples */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">SingleSelect Dropdown</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-card rounded-lg border">
              <SingleSelectDropdown
                label="Game Category"
                id="liveSingleSelectDefault"
                name="liveSingleSelectDefault"
                options={categoryOptions}
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                required
              />
              <SingleSelectDropdown
                label="Select Option (Error)"
                id="liveSingleSelectError"
                name="liveSingleSelectError"
                options={[{ label: 'Option 1', value: 'op1' }, { label: 'Option 2', value: 'op2' }]}
                value="" // Show default disabled option
                onChange={() => {}} // No-op for demo
                error="Please select an option."
              />
            </div>
          </div>

          {/* MultiSelect Dropdown Examples */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">MultiSelect Dropdown</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-card rounded-lg border">
              <MultiSelectDropdown
                label="Select Teams"
                id="liveMultiSelect"
                name="liveMultiSelect"
                options={multiSelectOptions}
                selectedValues={selectedMulti}
                onChange={(e) => setSelectedMulti(e.target.value)}
              />
              <MultiSelectDropdown
                label="Select Teams (with Error)"
                id="liveMultiSelectError"
                name="liveMultiSelectError"
                options={multiSelectOptions}
                selectedValues={[]}
                onChange={() => {}}
                error="At least one team must be selected."
              />
            </div>
          </div>

          {/* DatePicker Examples */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">DatePicker Component</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-card rounded-lg border">
              <DatePicker
                label="Event Date"
                id="liveDatePicker"
                name="liveDatePicker"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
              <DatePicker
                label="Match Deadline (Error)"
                id="liveDatePickerError"
                name="liveDatePickerError"
                value=""
                onChange={() => {}}
                error="Date cannot be in the past."
              />
            </div>
          </div>

          {/* FileUpload Examples */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">FileUpload Component</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-card rounded-lg border">
              <FileUpload
                label="Upload Profile Picture"
                id="liveFileUpload"
                name="liveFileUpload"
                onChange={() => {}} // No actual file handling for demo
              />
              <FileUpload
                label="Uploading File..."
                id="liveFileUploadLoading"
                name="liveFileUploadLoading"
                isLoading={true}
                onChange={() => {}}
              />
              <FileUpload
                label="Multiple Files"
                id="liveFileUploadMulti"
                name="liveFileUploadMulti"
                multiple
                onChange={() => {}}
              />
               <FileUpload
                label="Upload Error"
                id="liveFileUploadError"
                name="liveFileUploadError"
                error="File size exceeds limit."
                onChange={() => {}}
              />
            </div>
          </div>

          {/* RadioGroup Examples */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">RadioGroup Component</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-card rounded-lg border">
              <RadioGroup
                label="Select Game Mode"
                idPrefix="liveRadioMode"
                name="liveRadioMode"
                options={radioOptions}
                selectedValue={radioOption}
                onChange={(e) => setRadioOption(e.target.value)}
              />
              <RadioGroup
                label="Select Difficulty (Error)"
                idPrefix="liveRadioDifficulty"
                name="liveRadioDifficulty"
                options={[{ label: 'Easy', value: 'easy' }, { label: 'Hard', value: 'hard' }]}
                selectedValue="" // No selection for error demo
                onChange={() => {}}
                error="Please choose a difficulty."
              />
            </div>
          </div>

          {/* Checkbox Examples */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Checkbox Component</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-card rounded-lg border">
              <Checkbox
                label="Remember Me"
                id="liveCheckboxDefault"
                name="liveCheckboxDefault"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <Checkbox
                label="Accept Terms & Conditions"
                id="liveCheckboxError"
                name="liveCheckboxError"
                checked={isErrorCheckbox}
                onChange={(e) => setIsErrorCheckbox(e.target.checked)}
                error="You must accept the terms."
              />
            </div>
          </div>
        </div>

        {/* Documentation Content Section */}
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4 text-primary">Documentation</h2>

          {/* Features */}
          <h3 className="text-xl font-semibold mb-4">Features</h3>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>✅ Standardized inputs: Text, Selects, Date, File Upload, Radios, Checkboxes</li>
            <li>🎨 Customizable styling with `cva` variants for common states (e.g., error) and sizes</li>
            <li>⚡ Loading states for File Upload component with spinner animation</li>
            <li>♿ Accessibility with proper labels, `htmlFor`, and ARIA attributes</li>
            <li>🔧 Reusable and composable for building complex forms</li>
          </ul>

          {/* Installation */}
          <h3 className="text-xl font-semibold mb-4">Installation</h3>
          <div className="bg-card p-4 rounded-lg border mb-6">
            <code className="text-sm">
              import {'{ Input, SingleSelectDropdown, ... }'} from '../components/common/FormComponents/FormComponents';
            </code>
          </div>

          {/* Props Table */}
          <h3 className="text-xl font-semibold mb-4">Props</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left">Prop</th>
                  <th className="border border-border p-3 text-left">Type</th>
                  <th className="border border-border p-3 text-left">Default</th>
                  <th className="border border-border p-3 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3"><code>label</code></td>
                  <td className="border border-border p-3">string</td>
                  <td className="border border-border p-3">`undefined`</td>
                  <td className="border border-border p-3">Label text for the input field.</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code>id</code></td>
                  <td className="border border-border p-3">string</td>
                  <td className="border border-border p-3">`undefined`</td>
                  <td className="border border-border p-3">Unique ID for the input, links to label via `htmlFor`.</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code>name</code></td>
                  <td className="border border-border p-3">string</td>
                  <td className="border border-border p-3">`undefined`</td>
                  <td className="border border-border p-3">Name attribute for form submission.</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code>value</code> (for single inputs)</td>
                  <td className="border border-border p-3">string | number</td>
                  <td className="border border-border p-3">`""`</td>
                  <td className="border border-border p-3">Current value of the input.</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code>selectedValues</code> (for MultiSelect)</td>
                  <td className="border border-border p-3">string[]</td>
                  <td className="border border-border p-3">`[]`</td>
                  <td className="border border-border p-3">Array of selected values for multi-select.</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code>selectedValue</code> (for RadioGroup)</td>
                  <td className="border border-border p-3">string</td>
                  <td className="border border-border p-3">`""`</td>
                  <td className="border border-border p-3">Currently selected value for radio group.</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code>checked</code> (for Checkbox)</td>
                  <td className="border border-border p-3">boolean</td>
                  <td className="border border-border p-3">`false`</td>
                  <td className="border border-border p-3">Checked state for checkbox.</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code>onChange</code></td>
                  <td className="border border-border p-3">function</td>
                  <td className="border border-border p-3">`undefined`</td>
                  <td className="border border-border p-3">Handler for value changes.</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code>options</code> (for Selects, Radios)</td>
                  <td className="border border-border p-3">object[]</td>
                  <td className="border border-border p-3">`[]`</td>
                  <td className="border border-border p-3">Array of  {`{label, value}`} objects for options.</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code>error</code></td>
                  <td className="border border-border p-3">string</td>
                  <td className="border border-border p-3">`undefined`</td>
                  <td className="border border-border p-3">Error message to display below the input.</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code>required</code></td>
                  <td className="border border-border p-3">boolean</td>
                  <td className="border border-border p-3">`false`</td>
                  <td className="border border-border p-3">Indicates if the field is required.</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code>className</code></td>
                  <td className="border border-border p-3">string</td>
                  <td className="border border-border p-3">`undefined`</td>
                  <td className="border border-border p-3">Additional Tailwind CSS classes for customization.</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code>variant</code> (Input, Selects, DatePicker)</td>
                  <td className="border border-border p-3">string</td>
                  <td className="border border-border p-3">"default"</td>
                  <td className="border border-border p-3">Visual style variant (e.g., "default", "error").</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code>size</code> (Input, Selects, DatePicker)</td>
                  <td className="border border-border p-3">string</td>
                  <td className="border border-border p-3">"default"</td>
                  <td className="border border-border p-3">Input size ("default", "sm", "lg").</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code>isLoading</code> (FileUpload)</td>
                  <td className="border border-border p-3">boolean</td>
                  <td className="border border-border p-3">`false`</td>
                  <td className="border border-border p-3">Shows loading spinner for FileUpload.</td>
                </tr>
                <tr>
                  <td className="border border-border p-3"><code>multiple</code> (FileUpload)</td>
                  <td className="border border-border p-3">boolean</td>
                  <td className="border border-border p-3">`false`</td>
                  <td className="border border-border p-3">Allows multiple file selection.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Accessibility */}
          <h3 className="text-xl font-semibold mb-4">Accessibility</h3>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Properly associated labels with inputs using `htmlFor` and `id`.</li>
            <li>Error messages linked to inputs via `aria-describedby` for screen readers.</li>
            <li>`aria-invalid` attribute used to indicate validation state.</li>
            <li>Keyboard navigation support for all interactive elements.</li>
          </ul>

          <div className="mt-8 p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> This is a development help page for testing the Form components.
              The components are located at <code>/src/components/common/FormComponents/FormComponents.jsx</code> and use named exports.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComponentsHelp;