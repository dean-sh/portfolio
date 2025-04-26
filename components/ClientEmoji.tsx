'use client';

import { useState, useEffect } from 'react';
import { Emoji } from 'emoji-picker-react';

interface ClientEmojiProps {
  unified: string;
  size?: number;
}

export default function ClientEmoji({ unified, size = 30 }: ClientEmojiProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Show a simple placeholder during server rendering or hydration
  if (!isMounted) {
    return <span className="emoji-placeholder">👋</span>;
  }

  // Only render the Emoji component on the client after hydration
  return <Emoji unified={unified} size={size} />;
} 