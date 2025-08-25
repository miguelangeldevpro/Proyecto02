import React from "react";

const IframeMap: React.FC = () => (
  <div 
    style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      width: "100%", 
      height: "100%" 
    }}
  >
    <iframe
      src="https://www.google.com/maps/embed?pb=..."
      width="700"   // ancho fijo
      height="610"  // alto fijo
      style={{ border: 0, borderRadius: "12px" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Mapa incrustado"
    />
  </div>
);

export default IframeMap;
