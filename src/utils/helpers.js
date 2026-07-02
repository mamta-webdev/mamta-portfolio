// ─── HELPERS ─────────────────────────────────────────────────

/**
 * Validates the contact form fields.
 * Returns an object keyed by field name containing error messages.
 * An empty object means the form is valid.
 */
export function validateContactForm(form) {
    const errors = {};
  
    if (!form.name.trim()) errors.name = "Name is required";
    if (!form.email.trim()) errors.email = "Email is required";
    if (!form.message.trim()) errors.message = "Message is required";
  
    return errors;
  }