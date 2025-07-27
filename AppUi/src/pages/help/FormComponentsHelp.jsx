import React, { useState } from 'react';
import {
  Input,
  SingleSelectDropdown,
  MultiSelectDropdown,
  DatePicker,
  FileUpload,
  RadioGroup,
  Checkbox,
} from '../../components/common/Form/FormComponents'; 
import Button from '../../components/common/Buttons/ButtonComponent';

const FormComponentsHelp = () => {
  const [basicInput, setBasicInput] = useState('');
  const [errorInput, setErrorInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedMulti, setSelectedMulti] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [radioOption, setRadioOption] = useState('option1');
  const [isChecked, setIsChecked] = useState(false);
  const [isErrorCheckbox, setIsErrorCheckbox] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    selectedRole: '',
    selectedPlatforms: [],
    notificationPreference: 'email',
    acceptTerms: false,
  });

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  
  const handleMultiSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Complete Form Data Submitted:', formData);
    alert('Complete Form submitted! Check console for data.');
  };

  const categoryOptions = [
    { label: 'Action', value: 'action' },
    { label: 'Adventure', value: 'adventure' },
    { label: 'RPG', value: 'rpg' },
  ];

  const multiSelectOptions = [
    { label: 'PC', value: 'pc' },
    { label: 'PlayStation', value: 'playstation' },
    { label: 'Xbox', value: 'xbox' },
    { label: 'Nintendo Switch', value: 'switch' },
  ];

  const radioOptions = [
    { label: 'Email', value: 'email' },
    { label: 'In-App', value: 'app' },
    { label: 'None', value: 'none' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-2 text-primary">Form Components Documentation</h1>
          <p className="text-lg text-muted-foreground">
            A showcase of standardized, glassmorphic form components for your application.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b border-border pb-2">Live Examples</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Input</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-card rounded-radius border">
              <Input
                label="Default Input"
                id="liveInputDefault"
                placeholder="Enter text here"
                value={basicInput}
                onChange={(e) => setBasicInput(e.target.value)}
              />
              <Input
                label="Input with Error"
                id="liveInputError"
                placeholder="This field has an error"
                value={errorInput}
                onChange={(e) => setErrorInput(e.target.value)}
                error="This field is required!"
              />
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 border-b border-border pb-2">Complete Form Example</h2>
          <div className="light-glass-pane p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-6 text-center text-primary">User Registration</h3>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleFormChange}
                  required
                />
                <Input
                  label="Email Address"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <SingleSelectDropdown
                label="Primary Role"
                id="selectedRole"
                name="selectedRole"
                options={categoryOptions}
                value={formData.selectedRole}
                onChange={handleFormChange}
                required
              />
              <MultiSelectDropdown
                label="Favorite Gaming Platforms"
                id="selectedPlatforms"
                name="selectedPlatforms"
                options={multiSelectOptions}
                selectedValues={formData.selectedPlatforms}
                onChange={handleMultiSelectChange}
                required
              />
              <RadioGroup
                label="Notification Preference"
                idPrefix="formRadio"
                name="notificationPreference"
                options={radioOptions}
                selectedValue={formData.notificationPreference}
                onChange={handleFormChange}
              />
              <Checkbox
                label="I accept the Terms and Conditions"
                id="acceptTerms"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleFormChange}
                required
              />
              <Button type="submit" size="lg" className="w-full">
                Register Account
              </Button>
            </form>
          </div>
        </div>

        <div className="prose max-w-none prose-slate">
          <h2 className="text-2xl font-bold mb-4 border-b border-border pb-2">Documentation</h2>
          
          <h3 className="text-xl font-semibold mb-4">Features</h3>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>✅ Standardized inputs: Text, Selects, Date, File Upload, Radios, Checkboxes</li>
            <li>🎨 Glassmorphic styling applied via global CSS for consistency</li>
            <li>⚡ Loading states for File Upload component</li>
            <li>♿ Accessibility with proper labels, `htmlFor`, and ARIA attributes</li>
          </ul>

          <h3 className="text-xl font-semibold mb-4">How to Use & Import</h3>
          <p className="mb-2">First, import the desired components from the `FormComponents.jsx` file:</p>
          <div className="p-4 mb-6 border rounded-radius bg-card">
            <pre><code className="text-sm">
{`import { Input, Checkbox } from './path/to/FormComponents';`}
            </code></pre>
          </div>

          <p className="mb-2">Then, use them in your JSX. The styling is applied automatically from your `index.css` file.</p>
          <div className="p-4 mb-6 border rounded-radius bg-card">
            <pre><code className="text-sm">
{`<Input label="Your Name" />`}
            </code></pre>
          </div>

          <h4 className="font-semibold mb-2">Activating the Glassmorphic Container</h4>
          <p className="mb-2">To place components on a "frosted glass" surface, wrap them in a `div` and apply the `glass-pane` class. This effect is only visible if the page has a background image or gradient.</p>
          <div className="p-4 border rounded-radius bg-card">
            <pre><code className="text-sm">
{`<div className="glass-pane p-8 rounded-2xl">
  <Input label="Username" />
  <Button>Submit</Button>
</div>`}
            </code></pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComponentsHelp;