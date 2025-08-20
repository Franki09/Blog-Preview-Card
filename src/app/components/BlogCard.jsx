import Image from "next/image";
import React from "react";

export default function BlogCard() {
  return (
    <div className="relative w-fit flex flex-col items-center justify-center">
      <div className="absolute top-2 right-2 bg-DarkGray rounded-3xl p-5 w-[384px] h-[522px]"></div>
      {/* Para hacer el efecto de sombra */}
      <div className=" relative bg-white border-2 border-DarkGray rounded-3xl p-5 w-[384px] h-[522px]">
        <div>
          <Image src={"/images/illustration-article.svg"} width={336} height={200} alt={"Blog Image"} className="rounded-xl" />
          <h2 className="py-1 px-3 mt-6 mb-3 bg-Yellow text-sm text-DarkGray font-figtree font-extrabold text-center rounded w-fit">
            Learning
          </h2>
          <h3 className="mb-4 text-sm text-DarkGray font-figtree font-medium">Published 21 Dec 2023</h3>
          <h1 className="my-4 text-2xl text-DarkGray font-figtree font-extrabold hover:text-Yellow">HTML & CSS foundations</h1>
          <p className="w-[336px] mb-5 text-base text-Gray font-figtree font-medium">
            These languages are the backbone of every website, defining structure, content, and presentation.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Image src={"/images/image-avatar.webp"} width={32} height={32} alt="avatar" />
          <h2 className="text-sm text-DarkGray font-figtree font-extrabold">Greg Hooper</h2>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 mt-5">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/home"
          target="_blank"
          className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600"
        >
          Frontend Mentor
        </a>
        Coded by{" "}
        <a
          href="https://www.frontendmentor.io/profile/Franki09"
          className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600"
        >
          Franco Gomez
        </a>
      </div>
    </div>
  );
}

{
}
