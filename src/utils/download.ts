export function downloadResume() {
  const link = document.createElement('a');
  link.href = import.meta.env.BASE_URL + 'assets/Rayyan_Omar_Resume.pdf';
  link.download = 'Rayyan_Omar_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
