"use client";

import { useEffect } from "react";

export default function GoogleReviews() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full py-10 mt-10">
      <div
        className="elfsight-app-53da1039-63b0-4a1b-930c-75455d404a6a"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
}
