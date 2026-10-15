import { useEffect, useState } from 'react'
import { DEFAULT_LANGUAGE, LANGUAGE_STORAGE_KEY, translations } from '../i18n'

function readLanguage() {
  try {
    const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
    return saved === 'en' || saved === 'pt' ? saved : DEFAULT_LANGUAGE
  } catch {
    return DEFAULT_LANGUAGE
  }
}

export default function useLanguage() {
  const [language, setLanguage] = useState(readLanguage)

  useEffect(() => {
    const locale = translations[language].locale
    document.documentElement.lang = locale
    document.title = translations[language].pageTitle
    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', translations[language].metaDescription)
    try { window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language) } catch { /* storage can be unavailable */ }
  }, [language])

  return { language, setLanguage, copy: translations[language] }
}
