# Form Components Documentation

## Overview

The **FormComponents** system offers a suite of standardized, highly customizable form components tailored for the KnockoutZone application. These components ensure **uniform styling**, consistent user experience (*UX*), and simplified form management. The system helps reduce code duplication and streamlines future updates.

## Features

- **Standardized Inputs:** Components for text input, single-select dropdowns, multi-select dropdowns, date pickers, file uploads, radio groups, and checkboxes.
- **Customizable Styling:** Utilizes `cva` (class-variance-authority) for defining visual variants (e.g., error state) and sizes (`sm`, `default`, `lg`) for easy theming and visual consistency.
- **Loading States:** Built-in loading indicator for the FileUpload component.
- **Accessibility:** Proper use of labels (`htmlFor`, `id`), ARIA attributes (`aria-describedby`, `aria-invalid`), and full keyboard navigation support.
- **Reusable & Composable:** Designed for easy integration into complex forms.

## Installation

components are located at `AppUi/src/components/common/Form/FormComponents.jsx`:

```jsx
import { Input, SingleSelectDropdown, MultiSelectDropdown, DatePicker, FileUpload, RadioGroup, Checkbox } from './FormComponents';
// If you use a separate demo page component:
// import { FormComponentsPage } from './FormComponents';
```

## Basic Usage

### Simple Text Input

```jsx
import { Input } from './FormComponents';


```


## Props Table

| Prop             | Type                              | Default     | Description                                                         | Applies To                         |
|------------------|-----------------------------------|-------------|---------------------------------------------------------------------|-------------------------------------|
| label            | string                            | undefined   | Label above the input field                                         | All                                |
| id               | string                            | undefined   | Unique ID, for linking label and input                              | All (RadioGroup uses `idPrefix`)   |
| name             | string                            | undefined   | Name attribute for form submission                                  | All                                |
| value            | string / number                   | ""          | Current value of single-value inputs                                | Input, SingleSelectDropdown, DatePicker |
| selectedValues   | string[]                          | []          | Array of selected values                                            | MultiSelectDropdown                |
| selectedValue    | string                            | ""          | Selected value                                                      | RadioGroup                         |
| checked          | boolean                           | false       | Checkbox checked state                                              | Checkbox                           |
| onChange         | function                          | undefined   | Handler when the input’s value changes                              | All                                |
| options          | { label: string, value: string }[]| []          | Options for selection components                                    | SingleSelectDropdown, MultiSelectDropdown, RadioGroup |
| error            | string                            | undefined   | Error message and border destructive style if set                   | All                                |
| required         | boolean                           | false       | Adds required indicator to label if true                            | All                                |
| className        | string                            | undefined   | Additional Tailwind classes                                         | All                                |
| variant          | string ("default" \| "error")     | "default"   | Visual style variant                                                | Input, SingleSelectDropdown, DatePicker |
| size             | string ("default"\|"sm"\|"lg")    | "default"   | Component size                                                      | Input, SingleSelectDropdown, DatePicker |
| isLoading        | boolean                           | false       | Displays loading spinner and disables interaction                   | FileUpload                         |
| multiple         | boolean                           | false       | Allows multiple file selection                                      | FileUpload                         |
| idPrefix         | string                            | undefined   | ID prefix for unique radio IDs                                      | RadioGroup                         |

## Component Details

### Input

A flexible component for text, password, email, number, etc. Supports labels, placeholders, and errors.

```jsx
import { Input } from './FormComponents'; 
<Input label="Your Name" id="name" name="name" placeholder="John Doe" />

<Input label="Password" id="password" name="password" type="password" placeholder="Secure password" />

<Input label="Email (Error)" id="emailError" name="emailError" type="email" error="Invalid email format" variant="error" placeholder="your@example.com" />

<Input label="Small Field" id="smallField" name="smallField" size="sm" placeholder="Compact size" />

<Input label="Large Field" id="largeField" name="largeField" size="lg" placeholder="Prominent size" />
```

### SingleSelectDropdown

A native `` for single option selection, with error handling.

```jsx
const categoryOptions = [
  { label: 'Action', value: 'action' },
  { label: 'Adventure', value: 'adventure' },
  { label: 'RPG', value: 'rpg' },
];

 {}} 
  required 
/>
 {}} 
  error="Please select an option." 
  variant="error"
/>
```

### MultiSelectDropdown

Allows selecting multiple options, with UI for displaying and removing selected items.

```jsx
const teams = [
  { label: 'Team Alpha', value: 'alpha' }, 
  { label: 'Team Beta', value: 'beta' },
  { label: 'Team Gamma', value: 'gamma' },
];
const [selectedTeams, setSelectedTeams] = React.useState(['alpha', 'beta']);

 setSelectedTeams(e.target.value)} 
/>
 {}} 
  error="At least one team must be selected." 
/>
```

### DatePicker

HTML5 `` for selecting dates.

```jsx
import { DatePicker } from './FormComponents'; 

<DatePicker label="Select Match Date" id="matchDate" name="matchDate" />
<DatePicker label="Deadline (Error)" id="deadline" name="deadline" error="Date cannot be in the past" variant="error" />
<DatePicker label="Small Date" id="smallDate" name="smallDate" size="sm" />
<DatePicker label="Large Date" id="largeDate" name="largeDate" size="lg" />
```

### FileUpload

Enhanced file selection with loading state and error messages.

```jsx
import { FileUpload } from './FormComponents'; // Adjust path as per your project

<FileUpload label="Upload Game Logo" id="gameLogo" name="gameLogo" />
<FileUpload label="Uploading..." id="uploadingFile" name="uploadingFile" isLoading={true} />
<FileUpload label="Select Multiple Images" id="multiImage" name="multiImage" multiple />
<FileUpload label="Upload Error" id="uploadError" name="uploadError" error="File size exceeds limit." />

```

### RadioGroup

Manages multiple radio buttons, allowing only one to be selected.

```jsx
const difficultyOptions = [
  { label: 'Easy Peasy', value: 'easy' }, 
  { label: 'Normal Mode', value: 'normal' }, 
  { label: 'Hardcore', value: 'hard' }
];
const [difficulty, setDifficulty] = React.useState('normal');

 setDifficulty(e.target.value)} 
/>
 {}} 
  error="Please select a tier." 
/>
```

### Checkbox

Boolean input, supporting labels and errors.

```jsx
const [agree, setAgree] = React.useState(false);


 setAgree(e.target.checked)} 
  required 
/>

```

## Special States

- **Error State:** All components support an `error` prop, displaying a message and applying a destructive border style.
- **Loading State (FileUpload only):** Displays a spinner and disables interaction when `isLoading={true}`.

## Advanced Usage

### Custom Styling

Use the `className` prop to add or override Tailwind CSS classes.

```jsx
<Input 
  label="Custom Styled Input" 
  id="customInput" 
  name="customInput" 
  className="bg-primary/10 text-xl border-primary shadow-lg"
/>
```

### Integration with Form Libraries

Fully compatible with [React Hook Form](https://react-hook-form.com/) and [Formik](https://formik.org/) via standard input APIs. You can pass `register` props, `onChange`, `value`, and `error` states directly.

## Accessibility

- **Labels & IDs:** Correctly associated using `htmlFor` and `id`.
- **Error Feedback:** Error messages are linked with `aria-describedby` and `aria-invalid`.
- **Keyboard Navigation:** All interactive elements are fully keyboard accessible via standard keys.

## Demo & Examples

- **Demo Help Page:** The `FormComponentsHelp.jsx` provides a live demo at `/help/FormComponentsHelp.jsx`.`.

## Styling Notes

- All form components use **Tailwind CSS** classes and leverage variables from your `src/index.css`.
- Support both *light* and *dark* themes automatically via CSS variables (`--background`, `--primary`, `--destructive`, etc.).
- Gaming-themed color variables (`--game-success`, `--game-warning`, etc.) and gradients are utilized for consistent visual feedback.
- The `--radius` variable and `rounded-radius` class are used for **uniform rounded corners**.

## Browser Support

- Modern browsers with **CSS Grid**, **Flexbox**, and **CSS variables** support.
- Tested on latest Chrome, Firefox, Safari, Edge.

## Contributing

When modifying or extending form components:

- **Update Documentation:** Revise FormComponents.md and check live demos.
- **Thorough Testing:** Test all variants, sizes, and special states.
- **Accessibility Compliance:** Ensure correct focus, keyboard support, and ARIA attributes.
- **Theme Testing:** Test both light and dark themes for consistency.