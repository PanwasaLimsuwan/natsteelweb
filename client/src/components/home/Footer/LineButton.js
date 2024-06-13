import React, { useEffect } from "react";

const LineButton = () => {
  useEffect(() => {
    const loadLineScript = () => {
      const script = document.createElement("script");
      script.src = "https://www.line-website.com/social-plugins/js/thirdparty/loader.min.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };

    loadLineScript();
  }, []);

  return (
    <div
      className="line-it-button"
      data-lang="en"
      data-type="friend"
      data-env="REAL"
      data-count="true"
      data-home="true"
      data-lineid="@lida426"
      style={{ display: "none" }}
    ></div>
  );
};

export default LineButton;
