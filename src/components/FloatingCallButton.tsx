// src/app/ElevenLabsWidget.tsx
import React, { useEffect } from "react";

export default function ElevenLabsWidget() {
  useEffect(() => {
    // Create script tag dynamically (so it only loads once client-side)
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      // Optional cleanup if you navigate between pages
      document.body.removeChild(script);
    };
  }, []);

  return (
    // This tag is recognized by the ElevenLabs embed script
    <elevenlabs-convai agent-id="agent_8801k97nssa3edvsnahck1h4z7d3"></elevenlabs-convai>
  );
}
