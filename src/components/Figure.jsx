import React from "react";

export default function Figure({ video, image, caption, className }) {
  return (
    <figure className={`my-8 ${className}`}>
      {video &&
        (
          <video
            className="shadow-md"
            controls
            autoPlay
            loop
            muted
            width="100%"
          >
            <source src={video} />
          </video>
        )}
      {image &&
        <img className="shadow-md" src={image} />}
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
