import { hello } from "../../main/basics/hello-world";
describe("Hello World", () => {
  test("Say Hi!", () => {
    expect(hello()).toEqual("Hello, World!");
  });
});
