import React from "react";

const IframeMap: React.FC = () => (
  <div style={{ width: "100vw", height: "100vh" }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=..."
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Mapa incrustado"
    />
  </div>
);

export default IframeMap;
