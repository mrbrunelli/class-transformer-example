import { Expose, Type } from "class-transformer";
import "reflect-metadata";

export class Blog {
  @Expose({ name: "entity_posts" })
  @Type(() => Post)
  posts: Post[];
}

export class Post {
  @Expose({ name: "entity_id" })
  id: string;

  @Expose({ name: "entity_title" })
  title: string;
}
