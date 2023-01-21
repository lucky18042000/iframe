import React, { useState, useEffect } from 'react';


function IframeCatcher() {
  const [iframeUrl, setIframeUrl] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const url = searchParams.get("iframe_url");
    if (url) {
      setIframeUrl(url);
    }
  }, []);
console.log("i a Here")
  return (
    <>
      {iframeUrl && (
        <>
          <iframe
            src={iframeUrl}
            style={{ width: "100%", height: "100vh", border: "none" }}
          />
          <button className="hover-button">Hover Button</button>
        </>
      )}
    </>
  );
}

export default IframeCatcher;
