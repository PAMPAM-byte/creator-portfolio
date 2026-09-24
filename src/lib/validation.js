const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(data) {
  const errors = {};
  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  const projectType = (data.projectType || "").trim();
  const budget = (data.budget || "").trim();
  const message = (data.message || "").trim();

  if (name.length < 2) errors.name = "Enter your name.";
  if (!EMAIL.test(email)) errors.email = "Enter a valid email address.";
  if (!projectType) errors.projectType = "Choose a project type.";
  if (!budget) errors.budget = "Enter your budget.";
  if (message.length < 20) {
    errors.message = "Tell me a little more about the project (at least 20 characters).";
  }

  return errors;
}

export function isHoneypot(data) {
  return Boolean(data.company && String(data.company).trim());
}

export function formatContactMessage(data) {
  return [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Project type: ${data.projectType}`,
    `Budget: ${data.budget}`,
    "",
    data.message,
  ].join("\n");
}
