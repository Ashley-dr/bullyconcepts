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
    <div id="reviews" className="w-full py-10 mt-10">
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.6525630272345!2d123.94718557401166!3d10.353803266848962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99ea7eca455d5%3A0x28669ae4847bf709!2sBullyconcepts%20decal%20Hub!5e1!3m2!1sen!2sph!4v1742540808721!5m2!1sen!2sph"
        width="600"
        height="450"
        loading="lazy"
      ></iframe> */}
      <div
        className="elfsight-app-53da1039-63b0-4a1b-930c-75455d404a6a"
        data-elfsight-app-lazy
      >
        {" "}
      </div>
    </div>
  );
}
