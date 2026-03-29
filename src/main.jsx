import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import "./styles.css";
import App from "./App.jsx";
import favicon from "./assets/WhatsApp_Image_2026-03-17_at_8.54.45_PM-removebg-preview.png";

const setFavicon = (url) => {
  try {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = url;
  } catch (e) {
    // ignore in non-browser environments
  }
};

setFavicon(favicon);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
