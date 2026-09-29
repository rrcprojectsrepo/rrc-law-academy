export const RRC_WHATSAPP_NUMBER = '919025596694';

export const isRrcWhatsAppConfigured = /^\d{8,15}$/.test(RRC_WHATSAPP_NUMBER);

export const DIRECT_WHATSAPP_MESSAGE =
  'Hello RRC Law Academy, I would like to enquire about your law entrance preparation courses.';

export function createWhatsAppClickToChatUrl(phoneNumber, message) {
  if (!/^\d{8,15}$/.test(phoneNumber)) return null;

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

export function createRrcWhatsAppUrl(message) {
  if (!isRrcWhatsAppConfigured) return null;
  return createWhatsAppClickToChatUrl(RRC_WHATSAPP_NUMBER, message);
}

export function createEnquiryWhatsAppMessage(formData) {
  const optionalValue = (value) => value.trim() || 'Not provided';

  return [
    'Hello RRC Law Academy,',
    '',
    'I am interested in learning more about your law entrance preparation programmes.',
    '',
    'My enquiry details:',
    '',
    `Name: ${formData.fullName.trim()}`,
    `Phone: ${formData.phone.trim()}`,
    `Email: ${optionalValue(formData.email)}`,
    `Course/Programme: ${formData.course}`,
    `Qualification: ${optionalValue(formData.qualification)}`,
    `City: ${optionalValue(formData.city)}`,
    `Preferred Mode: ${formData.preferredMode}`,
    `Message: ${optionalValue(formData.message)}`,
    '',
    'I would like to know more about the course details, preparation approach, batches, and admission process.',
    '',
    'Thank you.',
  ].join('\n');
}
