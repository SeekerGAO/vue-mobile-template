import {isVoidVal} from "../../src/utils";

describe('測試值是否為空',()=>{
  it('null為空', function () {
    expect(isVoidVal(null)).toBe(true)
  });
})
