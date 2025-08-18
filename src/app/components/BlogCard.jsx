import Image from "next/image";
import React from "react";

export default function BlogCard() {
  return (
    <>
      <div>
        <Image src={"/images/illustration-article.svg"} width={336} height={200} alt={"Blog Image"} />
        <h2>Learning</h2>
        <h3>Published 21 Dec 2023</h3>
        <h1>HTML & CSS foundations</h1>
        <p>These languages are the backbone of every website, defining structure, content, and presentation.</p>
      </div>
      <div className="flex">
        <Image src={"/images/image-avatar.webp"} width={32} height={32} alt="avatar" />
        <h2>Greg Hooper</h2>
      </div>
    </>
  );
}

{
  /* <div class="attribution">
  Challenge by{" "}
  <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
    Frontend Mentor
  </a>
  . Coded by <a href="#">Your Name Here</a>.
</div>; */
}
