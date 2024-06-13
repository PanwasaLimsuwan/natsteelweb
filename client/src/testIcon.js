import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import './testIcon.css';

const flyToIcon = (imageSrc, startElement, targetRef) => {
  if (!targetRef.current) {
    console.warn('Icon ref is not ready.');
    return;
  }

  const startRect = startElement.getBoundingClientRect();
  const targetRect = targetRef.current.getBoundingClientRect();

  const flyingImage = document.createElement("img");

  flyingImage.src = imageSrc;
  flyingImage.className = "floating-image";
  flyingImage.style.position = "fixed";
  flyingImage.style.left = `${startRect.left}px`;
  flyingImage.style.top = `${startRect.top}px`;
  flyingImage.style.width = `${startRect.width}px`;
  flyingImage.style.height = `${startRect.height}px`;
  flyingImage.style.transition = "all 0.8s ease-out";
  flyingImage.style.zIndex = 1000;
  document.body.appendChild(flyingImage);

  setTimeout(() => {
    flyingImage.style.left = `${targetRect.left}px`;
    flyingImage.style.top = `${targetRect.top}px`;
    flyingImage.style.width = "20px";
    flyingImage.style.height = "20px";
    flyingImage.style.opacity = 0;
  }, 10);

  setTimeout(() => {
    document.body.removeChild(flyingImage);
  }, 820); // slightly longer than the transition
};

const TestIcon = () => {
  const startElementRef = useRef(null);
  const iconRef = useRef(null);
  const [productImageSrc, setProductImageSrc] = useState(
    "https://upload.wikimedia.org/wikipedia/en/e/e1/Kuromi_2019.svg"
  );

  const handleButtonClick = () => {
    if (startElementRef.current && iconRef.current) {
      flyToIcon(productImageSrc, startElementRef.current, iconRef);
    }
  };

  return (
    <div>
      <button ref={startElementRef} onClick={handleButtonClick} style={{ border: "none", background: "none" }}>
        <img
          src={productImageSrc}
          alt="Product"
          style={{ width: "150px", height: "150px" }}
        />
      </button>
      <div style={{ marginTop: "50px", position: "relative" }}>
        <Link to="/cart">
          <img
            ref={iconRef}
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Picture_icon_BLACK.svg"
            alt="Cart Icon"
            style={{ width: "2em", height: "2em", position: "absolute", top: "0", right: "0" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default TestIcon;
