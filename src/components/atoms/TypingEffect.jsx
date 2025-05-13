import { useState, useEffect } from "react";

/**
 * TypingEffect component
 * @param {string[]} texts - Array of texts to type out
 * @param {number} typingSpeed - Milliseconds per character
 * @param {number} deletingSpeed - Milliseconds per character when deleting
 * @param {number} pause - Milliseconds to pause after typing a text
 */
export default function TypingEffect({
  texts = [],
  typingSpeed = 80,
  deletingSpeed = 40,
  pause = 1800,
}) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!texts.length) return;
    const current = texts[index % texts.length];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayed((prev) => prev.slice(0, -1));
        if (displayed.length === 0) {
          setIsDeleting(false);
          setIndex((i) => (i + 1) % texts.length);
        }
      }, deletingSpeed);
    } else {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pause);
      }
    }
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayed, isDeleting, index, texts]);

  return (
    <span className="typing-effect">
      {displayed}
      <span className="blinking-cursor">|</span>
    </span>
  );
}

// CSS styles for the blinking cursor (to be added in global.css or as inline styles)
// .typing-effect .blinking-cursor {
//   animation: blink 1s steps(2, start) infinite;
// }
// @keyframes blink {
//   to {
//     visibility: hidden;
//   }
// }
