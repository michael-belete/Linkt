import DOMPurify from "isomorphic-dompurify";
import parse from "html-react-parser";
import { ReactNode } from "react";
import he from "he";

/**
 * Parses and sanitizes HTML using DOMPurify and html-react-parser.
 *
 * @param {string} html - The HTML string to be sanitized and parsed.
 * @returns {ReactNode} - The ReactNode representing the sanitized and parsed HTML.
 */

export const parseHtml = (html: string): ReactNode => {
  try {
    // Sanitize the HTML using DOMPurify
    const purified = DOMPurify.sanitize(html);

    // Parse the sanitized HTML using html-react-parser
    return parse(purified);
  } catch (error) {
    // Handle errors gracefully
    console.error("Error parsing or sanitizing HTML:", error);
    return ""; // or handle the error in an appropriate way
  }
};

/**
 * Strips HTML tags from a given HTML string and decodes HTML entities.
 *
 * @param {string} html - The HTML string to be processed.
 * @returns {string} - The text content with HTML tags stripped and HTML entities decoded.
 */
export const stripHtml = (html: string): string => {
  // Use a regular expression to remove HTML tags
  const contentWithoutTags = html.replace(/(<([^>]+)>)/gi, "");

  // Decode HTML entities using the 'he' library
  const decodedContent = he.decode(contentWithoutTags);

  // Return the final processed text
  return decodedContent;
};

/**
 * Truncates a string and adds "..." if it exceeds the specified limit.
 *
 * @param {string} str - The string to be truncated.
 * @param {number} limit - The character limit.
 * @returns {string} - The truncated string.
 */
export const truncateString = (str: string, limit: number = 200): string => {
  if (str.length > limit) {
    // Truncate the string and add "..."
    return str.substring(0, limit) + "...";
  } else {
    // If the string is within the limit, return it as is
    return str;
  }
};
