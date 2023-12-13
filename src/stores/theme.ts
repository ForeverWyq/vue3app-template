const themeKey = 'learn-demo-theme'

type theme = 'light' | 'dark'

const nowThem: theme = (localStorage.getItem(themeKey) as theme) || 'light'

function selectTheme(value: theme) {
  const html = document.getElementsByTagName('html')[0]
  html.classList[value === 'dark' ? 'add' : 'remove']('dark')
  document.documentElement.classList[value === 'dark' ? 'add' : 'remove']('dark')
  return value
}

selectTheme(nowThem)

export const themeStore = defineStore('theme', () => {
  const theme = ref(nowThem)
  function changeTheme() {
    const value = selectTheme(theme.value === 'light' ? 'dark' : 'light')
    localStorage.setItem(themeKey, value)
    theme.value = value
  }
  addEventListener('message', function (event) {
    const { origin, data } = event
    if (origin === location.origin && data.type === 'themeChange') {
      if (data.value !== theme.value) {
        changeTheme()
      }
    }
  })
  return { theme, changeTheme }
})
