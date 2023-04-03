import { Translated } from "./model";

type Lang = "ar" | "en";

/**
 *
 * @param text to translate
 * @param lang current uer language
 * @returns the appropriate translation if exists, otherwise return the default translation
 */
const translate = (text: Translated, lang: Lang) => {
  return text[lang] || Object.values(text)?.at(0);
};
export { translate, Lang };
