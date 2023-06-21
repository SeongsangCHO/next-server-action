import React from "react";
import { db } from "../lib/mysql";

export default async function LikeButton() {
  const postId = 1;
  async function handleAddLike(formData: FormData) {
    "use server";
    db.query(
      "SELECT * FROM posts WHERE PostId = 1",
      [postId],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(result, "RESULT");
        }
      }
    );

    console.log("handleAddLike");
  }

  return (
    <form action={handleAddLike}>
      <button className="text-white bg-blue-600 p-2 rounded-lg" type="submit">
        {/* {likes}  */}
        Likes
      </button>
    </form>
  );
}
