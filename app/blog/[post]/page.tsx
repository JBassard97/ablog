"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function Post() {
  const params = useParams();
  const post = params.post; // 'post' corresponds to the dynamic segment in the file name [post].tsx

  useEffect(() => {
    if (post) {
      console.log(params);
      console.log(post);
    }
  }, [post]); // Uncomment if you need to run side effects based on slug

  return (
    <div className="bg-amber-400 flex-1">
      <h1>A single blog post</h1>
      {post && <h2>post: {post.toString()}</h2>}
    </div>
  );
}
