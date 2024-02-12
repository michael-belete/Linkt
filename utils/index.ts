import DOMPurify from "isomorphic-dompurify";
import parse, { DOMNode, Element, Text } from "html-react-parser";
import he from "he";
import { Heading } from "@/types";
import React from "react";
import Image from "next/image";

/**
 * Parses HTML content, sanitizes it, and adds IDs to heading tags.
 *
 * @param {string} html - HTML content to be parsed.
 * @returns {ReturnType<typeof parse>} - Parsed JSX elements with IDs added to heading tags.
 */
export const parseHtml = (html: string): ReturnType<typeof parse> => {
  try {
    // Set of valid heading tags
    const validHeadingTags = new Set(["h1", "h2", "h3", "h4", "h5", "h6"]);

    // Sanitize the HTML using DOMPurify
    const purified = DOMPurify.sanitize(html);

    // Parse the sanitized HTML using html-react-parser
    const parsed = parse(purified, {
      // Custom replace function for parsing with ID injection
      replace: (domNode) => {
        if (
          domNode instanceof Element &&
          domNode.attribs &&
          validHeadingTags.has(domNode.name)
        ) {
          const headingText = extractText(domNode);

          // Generate and assign a unique ID based on the heading text
          domNode.attribs.id = generateSlug(headingText);
        } else if (domNode instanceof Element && domNode.name === "img") {
          // Replace image dom element with next.js Image component
          const imageElement = React.createElement(Image, {
            src: domNode.attribs.src,
            alt: domNode.attribs.alt || "",
            width: 1200,
            height: 675,
            className: "object-cover w-full h-auto",
          });

          return imageElement;
        }
      },
    });

    return parsed;
  } catch (error) {
    // Handle errors gracefully
    console.error("Error parsing or sanitizing HTML:", error);
    return "";
  }
};

/**
 * Recursively extracts text content from a DOMNode.
 *
 * @param {DOMNode} node - The DOMNode from which to extract text.
 * @returns {string} - The extracted text content.
 */
const extractText = (node: DOMNode): string => {
  // If the node is a Text node, return its data (text content)
  if (node instanceof Text) {
    return node.data;
  }
  // If the node is an Element with children, recursively extract text from children
  else if (node instanceof Element && node.children.length > 0) {
    // Initialize an empty string to store the result
    let result = "";
    // Iterate over each child node of the current Element
    node.childNodes.forEach((childNode) => {
      // If the child node is an Element or Text node, recursively extract text
      if (childNode instanceof Element || childNode instanceof Text) {
        result += extractText(childNode); // Recursively call extractText
      }
    });
    return result; // Return the concatenated text from children
  }
  return ""; // Return an empty string if the node is neither Text nor an Element with children
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

/**
 * Generates a slug from a given text.
 * A slug is a URL-friendly version of the input text, commonly used in URLs.
 *
 * @param {string} text - The input text for which the slug needs to be generated.
 * @returns {string} - The generated slug.
 */
export const generateSlug = (text: string): string => {
  // Convert to lowercase and replace spaces with hyphens
  const slug = text
    .toLowerCase()
    .replace(/\s+/g, "-")
    // Remove special characters
    .replace(/[^\w-]/g, "");

  return slug;
};

// Function to extract text from a React element
const extractTextFromElement = (element: React.ReactNode): string => {
  if (typeof element === "string") {
    return element; // If the element is already a string, return it
  } else if (
    React.isValidElement(element) &&
    element.props &&
    element.props.children
  ) {
    // If the element has props and children, recursively extract text from children
    return React.Children.toArray(element.props.children)
      .map((child) => extractTextFromElement(child))
      .join("");
  } else {
    return ""; // Return an empty string if the element doesn't have text content
  }
};

/**
 * Extracts headings from parsed HTML content and organizes them into a hierarchical structure.
 *
 * @param {ReturnType<typeof parse>} content - Parsed HTML content.
 * @returns {{ headings:  Heading[], allHeadings: Heading[] }} - An object of nested heading and all heading objects.
 */
export const extractHeadings = (
  content: ReturnType<typeof parse>
): { headings: Heading[]; allHeadings: Heading[] } => {
  // Array to store extracted headings
  const headings: Heading[] = [];
  const allHeadings: Heading[] = [];

  // Stack to keep track of parent headings
  const stack: Heading[] = [];

  // Set of valid heading tags
  const validHeadingTags = new Set(["h1", "h2", "h3", "h4", "h5", "h6"]);

  // Check if the parsed content is an array
  if (Array.isArray(content)) {
    // Iterate over each item in the parsed content
    content.forEach((item) => {
      // Check if the current item is a valid heading
      if (validHeadingTags.has(item.type)) {
        // Extract heading text and level
        const headingText = extractTextFromElement(item.props.children);
        const currLevel = item.type;

        // Create a Heading object for the current heading
        const currHeading: Heading = {
          id: generateSlug(headingText),
          title: headingText,
          children: [], // Initialize an empty array for children (nested headings)
          level: currLevel,
        };

        allHeadings.push(currHeading);

        // Pop headings from the stack that are the same or higher level
        while (stack.length > 0 && currLevel <= stack[stack.length - 1].level) {
          stack.pop();
        }

        // If the stack is not empty, add the current heading as a child of the top heading
        if (stack.length > 0) {
          stack[stack.length - 1].children.push(currHeading);
        } else {
          // If the stack is empty, add the current heading to the headings array
          headings.push(currHeading);
        }

        // Push the current heading onto the stack
        stack.push(currHeading);
      }
    });
  }

  // Return the array of extracted headings
  return { headings, allHeadings };
};

export const isChildActive = (
  parent: Heading,
  targetChild: string,
  visited: Set<string>
): boolean => {
  if (parent.id === targetChild) {
    return true;
  }

  visited.add(parent.id);

  // visit children
  for (let child of parent.children) {
    if (!visited.has(child.id) && isChildActive(child, targetChild, visited)) {
      return true;
    }
  }

  return false;
};
