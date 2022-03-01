export const updateThemeMode = (mode: boolean) => {
  const bodyEl = document.body
  if (mode) {
    bodyEl.classList.add('theme-dark')
    bodyEl.classList.remove('theme-light')
  } else {
    bodyEl.classList.remove('theme-dark')
    bodyEl.classList.add('theme-light')
  }
}
