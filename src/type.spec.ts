import { plainToInstance } from "class-transformer";
import { expect, test } from "vitest";
import { Blog, Post } from "./type";

test("should be transform array of objects", () => {
  const blog = plainToInstance(Blog, {
    entity_posts: [
      {
        entity_id: "1",
        entity_title: "My 1st post",
      },
      {
        entity_id: "2",
        entity_title: "My 2nd post",
      },
    ],
  });
  expect(blog).toBeInstanceOf(Blog);
  expect(blog.posts).toBeInstanceOf(Array<Post>);
  expect(blog.posts).toEqual([
    { id: "1", title: "My 1st post" },
    { id: "2", title: "My 2nd post" },
  ]);
});
