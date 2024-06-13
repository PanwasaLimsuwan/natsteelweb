import React from "react";

const flyToIcon = (imageSrc, startElement, iconRef) => {
    // if (!newsProductRef.current) return; // Ensure the icon ref is available
    if (!iconRef || !iconRef.current) {
      console.error("iconRef is not available");
      return;
    }
    console.log("Product Image URL:", imageSrc);
    console.log("IconRef Special: ", iconRef);
    // if (!iconRef.current) return;
    // if (!newsProductRef.current) return;

    const iconRect = iconRef.current.getBoundingClientRect();
    // const iconRect = newsProductRef.current.getBoundingClientRect();
    const startRect = startElement.getBoundingClientRect();
    const flyingImage = document.createElement("img");

    flyingImage.src = imageSrc;
    flyingImage.style.position = "fixed";
    flyingImage.style.left = `${startRect.left}px`;
    flyingImage.style.top = `${startRect.top}px`;
    flyingImage.style.width = `${startRect.width}px`;
    flyingImage.style.height = `${startRect.height}px`;
    flyingImage.style.transition = "all 0.8s ease-out";
    flyingImage.style.zIndex = 1000;
    document.body.appendChild(flyingImage);

    setTimeout(() => {
      flyingImage.style.left = `${iconRect.left}px`;
      flyingImage.style.top = `${iconRect.top}px`;
      flyingImage.style.width = "20px"; // or '0px' if you want it to disappear
      flyingImage.style.height = "20px";
      flyingImage.style.opacity = 0;
    }, 10);

    setTimeout(() => {
      document.body.removeChild(flyingImage);
    }, 820); // slightly longer than the transition
  };

export default flyToIcon;