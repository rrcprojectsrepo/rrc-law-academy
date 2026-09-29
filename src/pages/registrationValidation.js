import { coursePageList } from '../data/coursePages';
import { programPageList } from '../data/programPages';

export const COURSE_OPTIONS = [
  ...coursePageList.map((course) => course.shortTitle),
  ...programPageList.map((program) => program.title),
  'Not Sure',
];

function isValidIndianPhone(input) {
  const value = input.trim();
  if (!value || !/^[+()\d\s.-]+$/.test(value)) return false;

  let digits = value.replace(/\D/g, '');
  if (digits.length === 12 && digits.startsWith('91')) digits = digits.slice(2);
  if (digits.length === 11 && digits.startsWith('0')) digits = digits.slice(1);

  if (digits.length !== 10 || /^([0-9])\1{9}$/.test(digits)) return false;

  const mobileNumber = /^[6-9]\d{9}$/.test(digits);
  const landlineNumber = /^[1-5]\d{9}$/.test(digits) && !/^(0123456789|1234567890|9876543210)$/.test(digits);
  return mobileNumber || landlineNumber;
}

export function validateForm(formData) {
  const errors = {};
  const fullName = formData.fullName.trim();
  const email = formData.email.trim();
  const message = formData.message.trim();

  if (fullName.length < 2) errors.fullName = 'Please enter your full name.';
  else if (fullName.length > 100) errors.fullName = 'Please keep your name within 100 characters.';

  if (!isValidIndianPhone(formData.phone)) errors.phone = 'Please enter a valid phone number.';

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!COURSE_OPTIONS.includes(formData.course)) errors.course = 'Please select a course or programme.';
  if (formData.qualification.trim().length > 120) errors.qualification = 'Please keep this within 120 characters.';
  if (formData.city.trim().length > 100) errors.city = 'Please keep your city within 100 characters.';
  if (message.length > 500) errors.message = 'Please keep your message within the allowed length.';

  return errors;
}
