import { validate } from "uuid";

import { User } from "../../../modules/users/model/User";

describe("User model", () => {
  it("should be able to create an user with all props", () => {
    const user = new User("Atlas", "atlas@fromspace.com");

    // Object.assign(user, {
    //   name: "Atlas",
    //   email: "atlas@fromspace.com",
    //   created_at: new Date(),
    //   updated_at: new Date(),
    // });

    // desculpa mas eu acho gambiarra usar Object.assign :D

    expect(user).toMatchObject({
      name: "Atlas",
      email: "atlas@fromspace.com",
      admin: false,
    });
    expect(validate(user.id)).toBe(true);
    expect(user.created_at).toBeInstanceOf(Date);
    expect(user.updated_at).toBeInstanceOf(Date);
  });
});
