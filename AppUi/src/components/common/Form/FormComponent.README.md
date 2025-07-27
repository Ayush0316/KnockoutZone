# Form Components Documentation

## Overview
The **FormComponents** system offers a suite of standardized, reusable form components featuring a modern light glassmorphic UI. These components ensure uniform styling, a consistent user experience (UX), and simplified form management, helping to reduce code duplication and streamline future updates.

## Features

- **Standardized Inputs:** A full suite of components including text inputs, dropdowns, date pickers, file uploads, radio groups, and checkboxes.
- **Glassmorphic Theme:** A beautiful, pre-built light glassmorphic theme with a blue tint and orange accents, managed centrally via `index.css`.
- **Fully Custom Dropdowns:** `SingleSelectDropdown` and `MultiSelectDropdown` are now fully custom components, allowing complete styling of the dropdown panels to match the glassmorphic theme.
- **Customizable Styling:** Utilizes `cva` for defining visual variants (e.g., error state) and sizes (`sm`, `default`, `lg`).
- **Loading States:** Built-in loading indicator for the `FileUpload` component.
- **Accessibility:** Designed with accessibility in mind, using proper labels, ARIA attributes, and full keyboard navigation support.

## How to Use

### 1. Installation & Import

The components are located at `AppUi/src/components/common/Form/FormComponents.jsx`. Import them into your file:

```jsx
import { Input, SingleSelectDropdown, ... } from './path/to/FormComponents';
```

### 2. Basic Usage

Use the components directly in your JSX. Their "inset" glass appearance is pre-styled.

```jsx
import { Input } from './FormComponents';
<Input label="Your Name" placeholder="Enter your name..." />

```

### 3. Activating the Glass Pane Effect

To place components on a "frosted glass" surface, wrap your form in a `` with the `glass-pane` class.

> **Important:** The glass effect is only visible if the page has a background image or gradient behind it.

```jsx
<div style={{ backgroundImage: 'url(...)' }}>
  {/* Apply the .glass-pane class to the form's wrapper */}
  <div className="glass-pane p-8 rounded-2xl">
    <Input label="Username" />
    <Button>Submit</Button>
  </div>
</div>

```

## Props Table

| Prop           | Type                                         | Default     | Description                                                                      | Applies To                                               |
| -------------- | -------------------------------------------- | ----------- | -------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `label`        | `string`                                     | `undefined` | Label text displayed above the input field.                                       | All                                                      |
| `id`           | `string`                                     | `undefined` | Unique ID for linking the label and input.                                        | All (`RadioGroup` uses `idPrefix`)                       |
| `name`         | `string`                                     | `undefined` | `name` attribute for form submission.                                             | All                                                      |
| `value`        | `string / number`                            | `""`        | The current value of single-value inputs.                                         | Input, SingleSelectDropdown, DatePicker                   |
| `selectedValues`| `string[]`                                  | `[]`        | An array of selected values for the multi-select dropdown.                        | MultiSelectDropdown                                      |
| `selectedValue`| `string`                                     | `""`        | The currently selected value for a radio group.                                   | RadioGroup                                               |
| `checked`      | `boolean`                                    | `false`     | The checked state of the checkbox.                                                | Checkbox                                                 |
| `onChange`     | `function`                                   | `undefined` | The handler function called when the input’s value changes.                       | All                                                      |
| `options`      | `{ label: string, value: string }[]`         | `[]`        | An array of objects used to populate selection components.                        | SingleSelectDropdown, MultiSelectDropdown, RadioGroup     |
| `error`        | `string`                                     | `undefined` | An error message to display, which also applies a destructive style.              | All                                                      |
| `required`     | `boolean`                                    | `false`     | Adds a required indicator to the label if true.                                   | All                                                      |
| `isLoading`    | `boolean`                                    | `false`     | Displays a loading spinner and disables the component.                            | FileUpload                                               |
| `multiple`     | `boolean`                                    | `false`     | Allows for multiple file selection.                                               | FileUpload                                               |

## Component Details

### Input

A flexible component for text, password, email, number, etc.

```jsx
<Input label="Your Name" id="name" name="name" placeholder="John Doe" />
<Input label="Password" id="password" type="password" />
<Input label="Email (Error)" id="emailError" error="Invalid email format" />
```

### SingleSelectDropdown

A fully custom dropdown for single option selection, featuring a glassmorphic dropdown panel.

```jsx
const categoryOptions = [
  { label: 'Action', value: 'action' },
  { label: 'Adventure', value: 'adventure' },
];
const [category, setCategory] = React.useState('action');

<SingleSelectDropdown
  label="Game Category"
  id="category"
  name="category"
  options={categoryOptions}
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  required
/>
```

### MultiSelectDropdown

A fully custom component that allows selecting multiple options, with a UI for displaying and removing selections.

```jsx
const teams = [
  { label: 'Team Alpha', value: 'alpha' }, 
  { label: 'Team Beta', value: 'beta' },
];
const [selectedTeams, setSelectedTeams] = React.useState(['alpha']);

<MultiSelectDropdown
  label="Select Teams"
  id="teams"
  name="teams"
  options={teams}
  selectedValues={selectedTeams}
  onChange={(e) => setSelectedTeams(e.target.value)} 
/>
```

### FileUpload

Enhanced file selection with a glass pane dropzone, loading state, and error messages.

```jsx
<FileUpload label="Upload Game Logo" id="gameLogo" name="gameLogo" />
<FileUpload label="Uploading..." id="uploadingFile" isLoading={true} />
<FileUpload label="Upload Error" id="uploadError" error="File size exceeds limit." />
```

## Styling Notes

- All components are styled with **Tailwind CSS** and rely on variables from your `index.css` for a consistent theme.
- The glassmorphic effect is controlled by two main utility classes in your `index.css`:
    - `.glass-pane`: For container elements (like form wrappers and dropdown panels).
    - `.glass-input`: For the input fields themselves.
- **Crucially:** The `backdrop-filter` property used by `.glass-pane` requires a background with content (an image or gradient) behind it to be visible.

## Browser Support

- All modern browsers are supported.
- The glassmorphic effect relies on the `backdrop-filter` CSS property, which is supported in all major modern browsers.

## Demo

A live demo and documentation page is available at `FormComponentsHelp.jsx`.

---