import { AppStorageKey, StorageItem } from "@/types";
import { assertStorageKeyType } from "./assertion";
import { SESSION_EXPIRE_TIME } from "./constants";
import { AESEncrypt } from "./crypto";

/**
 * Class to Format Date
 */
class DateWizard {
  /**
   * Function to format a date to the locale format.
   * @param {string | Date} date - The date to format.
   * @returns {string} - The formatted date string.
   */
  static toLocaleDate = (date: string | Date): string => {
    const dateOptions: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    return new Date(date).toLocaleString("en-US", {
      ...dateOptions,
    });
  };

  /**
   * Function to format a date and time to the locale format.
   * @param {string | Date} date - The date to format.
   * @returns {string} - The formatted date-time string.
   */
  toLocaleDateTime = (date: string | Date): string => {
    const dateOptions: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(date).toLocaleString("en-US", dateOptions);
  };
}

/**
 * Form Utility
 */
class FormWizard {
  /**
   *
   * @param {string} url The endpoint to post to.
   * @param {Record<string, any> | null} body The body of the request
   * @returns {RequestInit} Request options object
   */
  static post = (
    url: string,
    body: any
  ): Partial<RequestInit & { url: string }> => ({
    url,
    method: "POST",
    body,
    headers: {
      "Content-Type": "application/json",
    },
  });

  /**
   *
   * @param {string} url The endpoint to post to.
   * @param {FormData} formData The form data to send
   * @returns {RequestInit} Request options object
   */
  static postFormData = (url: string, formData: FormData) => ({
    url,
    body: formData,
    method: "POST",
    formData: true,
  });
}

/**
 * Abstract implementation of the window.localStorage
 */

class LocalStorage {
  private static DEFAULT_EXPIRATION = SESSION_EXPIRE_TIME; // 24 hours in milliseconds

  /**
   * This method saves an encrypted object to localstorage with expiration
   * @param {AppStorageKey} key The key which will be used to reference the object
   * @param {Record<string, any>} object The object to save
   * @param {number} [expirationMs] Optional expiration time in milliseconds
   * @returns {boolean} true if successful, else false
   */
  static save(
    key: AppStorageKey,
    value: IUser | string | number,
    expirationMs?: number
  ): boolean {
    assertStorageKeyType(key, value);
    try {
      const item: StorageItem = {
        value,
        expiry: Date.now() + (expirationMs || this.DEFAULT_EXPIRATION),
      };
      const encryptedValue = AESEncrypt.encrypt(JSON.stringify(item));
      localStorage.setItem(key, encryptedValue);
      return true;
    } catch (error) {
      console.error("Error saving to local storage:", error);
      return false;
    }
  }

  /**
   * The load method returns the decrypted parsed object stored in the localstorage if not expired
   * @param {AppStorageKey} key The key used to save the object
   * @returns {any | null} parsed object stored or null if expired or not found
   */
  static load(key: AppStorageKey): any | null {
    try {
      const encryptedValue = localStorage.getItem(key);
      if (!encryptedValue) return null;

      const decryptedString = AESEncrypt.decrypt(encryptedValue);
      if (!decryptedString) return null;
      const item = JSON.parse(decryptedString) as StorageItem;
      if (item.expiry) {
        if (Date.now() > item.expiry) {
          this.remove(key);
          return null;
        }
      } else return null;
      return item.value;
    } catch (error) {
      console.error("Error loading from local storage:", error);
      return null;
    }
  }

  /**
   * This method removes an object from the localstorage
   * @param {AppStorageKey} key The key to remove
   * @returns {boolean} true if successful, else false
   */
  static remove(key: AppStorageKey): boolean {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error("Error removing from local storage:", error);
      return false;
    }
  }

  /**
   * This method sets a new default expiration time
   * @param {number} expirationMs New default expiration time in milliseconds
   */
  static setDefaultExpiration(expirationMs: number): void {
    this.DEFAULT_EXPIRATION = expirationMs;
  }
}

// Type definition for `stringAvatar` function
function stringAvatar(name: string): string {
  // Assuming this function generates initials or something similar from the name.
  const initials = name
    .split(" ")
    .map((part) => part[0].toUpperCase())
    .join("");
  return initials;
}

const getEmbedUrl = (url: string) => {
  let embedUrl = "";

  // YouTube
  if (url.includes("youtube.com/watch") || url.includes("youtu.be")) {
    const videoId = url.split("v=")[1] || url.split("/").pop();
    embedUrl = `https://www.youtube.com/embed/${videoId}`;
  }
  // Vimeo
  else if (url.includes("vimeo.com")) {
    const videoId = url.split("/").pop();
    embedUrl = `https://player.vimeo.com/video/${videoId}`;
  }
  // Google Drive
  else if (url.includes("drive.google.com")) {
    const videoId = url.match(/\/d\/(.*?)\//)?.[1];
    if (videoId) {
      embedUrl = `https://drive.google.com/file/d/${videoId}/preview`;
    }
  }
  // OneDrive
  else if (url.includes("onedrive.live.com")) {
    embedUrl = url.replace("redir", "embed"); // Simplified embed format
  }
  // Add more platforms as needed

  return embedUrl;
};

export { DateWizard, FormWizard, getEmbedUrl, LocalStorage, stringAvatar };
