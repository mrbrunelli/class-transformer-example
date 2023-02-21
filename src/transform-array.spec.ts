import { plainToInstance } from "class-transformer";
import { expect, test } from "vitest";
import { User } from "./transform-array";

test("should be trim the emails", () => {
  const user = plainToInstance(User, {
    emails: ["tesT@gmail.com", "Test1@gmail.com", "   Test2@gmail.com"],
  });
  expect(user).toBeInstanceOf(User);
  expect(user.emails).toEqual([
    "test@gmail.com",
    "test1@gmail.com",
    "test2@gmail.com",
  ]);
});

test("should be double the numbers", () => {
  const user = plainToInstance(User, {
    numbers: [1, 2, 3, 4, 5],
  });
  expect(user).toBeInstanceOf(User);
  expect(user.numbers).toEqual([2, 4, 6, 8, 10]);
});

test("should be verify user is a developer", () => {
  const user = plainToInstance(User, {
    position: "developer",
  });
  expect(user).toBeInstanceOf(User);
  expect(user.isDeveloper).toBeTruthy();
});

test("should be return false if user isn't a developer", () => {
  const user = plainToInstance(User, {
    position: "agilist",
  });
  expect(user).toBeInstanceOf(User);
  expect(user.isDeveloper).toBeFalsy();
});
