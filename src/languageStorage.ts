//获取用户保存的语言首选项
export function getStoredLanguage(): string | null {
  return localStorage.getItem("selectedLanguage");
}
//保存新的语言选择
export function saveStoredLanguage(language: string): void {
  localStorage.setItem("selectedLanguage", language);
}
