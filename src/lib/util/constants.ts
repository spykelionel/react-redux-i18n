export const currencies: string[] = [
  "USD", // US Dollar
  "EUR", // Euro
  "GBP", // British Pound Sterling
  "JPY", // Japanese Yen
  "CAD", // Canadian Dollar
  "AUD", // Australian Dollar
  "CHF", // Swiss Franc
  "CNY", // Chinese Yuan Renminbi
  "INR", // Indian Rupee
  "BRL", // Brazilian Real
  "RUB", // Russian Ruble
  "ZAR", // South African Rand
  "KRW", // South Korean Won
  "MXN", // Mexican Peso
  "TRY", // Turkish Lira
  "SGD", // Singapore Dollar
  "NOK", // Norwegian Krone
  "SEK", // Swedish Krona
  "DKK", // Danish Krone
  "NZD", // New Zealand Dollar
  "THB", // Thai Baht
  "MYR", // Malaysian Ringgit
  "IDR", // Indonesian Rupiah
  "PHP", // Philippine Peso
  "ILS", // Israeli Shekel
  "HKD", // Hong Kong Dollar
  "CZK", // Czech Koruna
  "PLN", // Polish Zloty
  "HUF", // Hungarian Forint
  "RON", // Romanian Leu
  "COP", // Colombian Peso
  "PEN", // Peruvian Sol
  "CLP", // Chilean Peso
  "ARS", // Argentine Peso
  "VEF", // Venezuelan Bolívar
  "TWD", // New Taiwan Dollar
  "VND", // Vietnamese Dong
];

export const timezonesGMT: string[] = [
  "GMT", // Greenwich Mean Time
  "GMT+1", // Central European Time (CET)
  "GMT+2", // Eastern European Time (EET)
  "GMT+3", // Moscow Standard Time (MSK)
  "GMT+4", // Gulf Standard Time (GST)
  "GMT+5", // Pakistan Standard Time (PST)
  "GMT+6", // Kazakhstan Standard Time (AKST)
  "GMT+7", // Indochina Time (ICT)
  "GMT+8", // China Standard Time (CST)
  "GMT+9", // Japan Standard Time (JST)
  "GMT+10", // Australian Eastern Standard Time (AEST)
  "GMT+11", // Solomon Islands Standard Time (SBT)
  "GMT+12", // New Zealand Standard Time (NZST)
  "GMT-1", // Atlantic Standard Time (AST)
  "GMT-2", // Brazil Standard Time (BRT)
  "GMT-3", // Argentina Standard Time (ART)
  "GMT-4", // Eastern Standard Time (EST)
  "GMT-5", // Central Standard Time (CST)
  "GMT-6", // Mountain Standard Time (MST)
  "GMT-7", // Pacific Standard Time (PST)
  "GMT-8",
  // Alaska Standard Time (AKST)
  "GMT-9", // Hawaii Standard Time (HST)
  "GMT-10", // Aleutian Standard Time (ALST)
  "GMT-11", // Samoa Standard Time (SST)
  "GMT-12", // International Date Line West (IDLW)
];

export const daysOfWeek: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

/**
 * Validates the Video Url for the various platform formats
 * Example Matches:
 * 1. YouTube: https://www.youtube.com/watch?v=dQw4w9WgXcQ
 * 2. Vimeo: https://vimeo.com/123456789
 * 3. Google Drive: https://drive.google.com/file/d/1a2b3c4d5e6f7g8h9i0j/view
 * 4. OneDrive: https://onedrive.live.com/redir?resid=ABC123XYZ
 */

export const videoUrlRegex =
  /^(?:(?:https?):\/\/)?(?:www\.)?(?:(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|watch\?.+&v=))([a-zA-Z0-9_-]{11})|(?:youtu\.be\/)([a-zA-Z0-9_-]{11})|(?:vimeo\.com\/(?:manage\/videos\/|)([0-9]+))|(?:drive\.google\.com\/file\/d\/)([a-zA-Z0-9_-]+)|(?:onedrive\.live\.com\/redir\?resid=)([a-zA-Z0-9_-]+).*)$/;

export const MAX_CARD_LENGTH = 16;

export const SESSION_EXPIRE_TIME = 48 * 60 * 60 * 1000; // 48 hrs

export const DEFAULT_USER_PROFILE =
  "https://aui.atlassian.com/aui/9.3/docs/images/avatar-person.svg";
