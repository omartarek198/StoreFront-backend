import { IsValidNumber } from "../utils";

import { IsValidString } from "../utils";

describe("testing validate input functions", () => {
  it("expect IsValidNumber(5) to equal true ", () => {
    expect(IsValidNumber(5)).toEqual(true);
  });

  it("expect IsValidNumber(-5) to equal false ", () => {
    expect(IsValidNumber(-5)).toEqual(false);
  });

  it("expect IsValidNumber(abc) to equal false ", () => {
    expect(IsValidNumber(Number("abc"))).toEqual(false);
  });

  it('expect IsValidString("hi" ) to equal true ', () => {
    expect(IsValidString("hi")).toEqual(true);
  });

  it("expect IsValidString(undefined ) to equal false ", () => {
    //using any here to pass S into IsValidString which only accepts string
    var s: any = undefined;
    expect(IsValidString(s)).toEqual(false);
  });
});
