import { Expose, Transform } from "class-transformer";

export class User {
  @Transform(({ value }) =>
    value.map((item: string) => item.trim().toLowerCase())
  )
  emails: string[];

  @Transform(({ value }) => value.map((item: number) => item * 2))
  numbers: number[];

  @Expose({ name: "position" })
  @Transform(({ value }) => value === "developer")
  isDeveloper: boolean;
}
