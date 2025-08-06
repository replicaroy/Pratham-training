// config.js
export const formFields = [
  { name: 'firstname', label: 'First Name', type: 'text', required: true },
  { name: 'lastname', label: 'Last Name', type: 'text', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true },
  { name: 'password', label: 'Password', type: 'password', required: true },
  { name: 'confirmpassword', label: 'Confirm Password', type: 'password', required: true, confirmWith: 'password' },
  { name: 'age', label: 'Age', type: 'number', required: true },
  {
    name: 'role', label: 'Role', type: 'radio', required: true, options: [
      { label: 'Admin', value: 'admin' },
      { label: 'Manager', value: 'manager' },
      { label: 'Viewer', value: 'viewer' },
    ]
  },
  {
    name: 'gender', label: 'Gender', type: 'select', required: true, options: [
      { label: 'Select', value: '' },
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
      { label: 'Other', value: 'other' },
    ]
  },
  {
    name: 'intrest', label: 'Interest', type: 'checkbox', required: true, options: [
      { label: 'Music', value: 'music' },
      { label: 'Gym', value: 'gym' },
      { label: 'Play', value: 'play' },
    ]
  },
];
