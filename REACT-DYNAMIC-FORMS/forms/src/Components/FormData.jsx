export const FORM_FIELDS = [
  { type: 'text', name: 'firstname', label: 'First Name', placeholder: 'Enter your first name' },
  { type: 'text', name: 'lastName', label: 'Last Name', placeholder: 'Enter your last name' },

  { type: 'radio', name: 'role', label: 'Select Role', options: ['Student', 'Teacher', 'Admin'] },
  { type: 'radio', name: 'gender', label: 'Select Gender', options: ['Male', 'Female', 'Other'] },

  {
    type: 'select', name: 'hobbies', label: 'Select Hobbies',
    options: ['Gyming', 'Reading', 'Gaming', 'Cooking', 'Swimming'],
  },
  {
    type: 'select', name: 'subjects', label: 'Select Subjects',
    options: ['Math', 'Science', 'English', 'History', 'Geography'],
  },
];
