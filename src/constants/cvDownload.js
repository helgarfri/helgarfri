/** Ordered list of CV locales (matches available PDFs). */
export const CV_LANGUAGE_CODES = ["is", "en", "es"];

/** CV PDF paths by site language (files live in public/docs). */
export const CV_DOWNLOAD_BY_LANGUAGE = {
  is: {
    href: "/docs/helgarfri_cv_is.pdf",
    download: "helgarfri_cv_is.pdf",
  },
  en: {
    href: "/docs/helgarfri_cv_en.pdf",
    download: "helgarfri_cv_en.pdf",
  },
  es: {
    href: "/docs/helgarfri_cv_es.pdf",
    download: "helgarfri_cv_es.pdf",
  },
};

export function getCvDownload(language) {
  return CV_DOWNLOAD_BY_LANGUAGE[language] || CV_DOWNLOAD_BY_LANGUAGE.en;
}
