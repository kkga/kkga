import React from "react";

export default function Figure({ video, image, caption, className }) {
  return (
    <figure className={`my-8 ${className}`}>
      {video &&
        (
          <video controls autoPlay loop muted width="100%">
            <source src={video} />
          </video>
        )}
      {image &&
        <img src={image} />}
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
