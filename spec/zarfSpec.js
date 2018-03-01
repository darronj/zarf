describe("Zarf", function() {
  var zarf = require("../index");

  it("should should return false for missing", function() {
    var retVal = zarf.isDefined();
    expect(retVal).toEqual(false);
  });

  it("should should return false for null", function() {
    var retVal = zarf.isDefined();
    expect(retVal).toEqual(false);
  });

  it("should should return false for undefined", function() {
    var testVal;
    var retVal = zarf.isDefined(testVal);
    expect(retVal).toEqual(false);
  });

  it("should should return true for value", function() {
    var testVal = { name: "testVal" };
    var retVal = zarf.isDefined(testVal);
    expect(retVal).toEqual(true);
  });
});
