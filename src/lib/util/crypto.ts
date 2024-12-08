import CryptoJS from "crypto-js";
import { SECRET_KEY } from "../config";

export class AESEncrypt {
  /**
   * Encrypts the given data using AES encryption
   * @param data - The data to encrypt (can be any JSON-serializable value)
   * @returns The encrypted string
   */
  static encrypt(data: any): string {
    const jsonString = JSON.stringify(data);
    return CryptoJS.AES.encrypt(jsonString, SECRET_KEY).toString();
  }

  /**
   * Decrypts the given encrypted string
   * @param encryptedData - The encrypted string to decrypt
   * @returns The decrypted data, or null if decryption fails
   */
  static decrypt(encryptedData: string): string | null {
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
      const decryptedString = bytes.toString(CryptoJS.enc.Utf8);
      return JSON.parse(decryptedString);
    } catch (error) {
      console.error("Decryption failed:", error);
      return null;
    }
  }
}
