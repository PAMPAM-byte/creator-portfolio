export function whatsappHref(number, message) {
  const digits = String(number || "").replace(/\D/g, "");
  const text = encodeURIComponent(message || "");
  return `https://wa.me/${digits}${text ? `?text=${text}` : ""}`;
}
