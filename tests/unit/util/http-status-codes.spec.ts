import { HttpStatusCode } from "../../../src/utils/http-status-codes";

describe("Unit", () => {
  describe("Util", () => {
    test("If http status codes are number", () => {
      const values = Object.values(HttpStatusCode);
      const numberKeys = values.filter((val) => !isNaN(parseInt(val as string)));
      const stringKeys = values.filter((val) => isNaN(parseInt(val as string)));
      expect(numberKeys.length).toBe(stringKeys.length);
    });
  });
});
