const {
  addNewVisitor,
  listAllVisitors,
  deleteAVisitor,
  updateAVisitor,
  listOneVisitor,
  deleteAllVisitor,
  pool,
} = require(`../src/index`);

describe("Test if functions are called", () => {
  it("should query functions addNewVisitor", () => {
    spyOn(pool, "query");
    addNewVisitor();
    expect(pool.query).toHaveBeenCalled();
  });
  it("should query function listAllVisitors", () => {
    spyOn(pool, "query");
    listAllVisitors();
    expect(pool.query).toHaveBeenCalled();
  });
  it("should query function deleteAVisitor", () => {
    spyOn(pool, "query");
    deleteAVisitor();
    expect(pool.query).toHaveBeenCalled();
  });
  it("should query function updateAVisitor", () => {
    spyOn(pool, "query");
    updateAVisitor();
    expect(pool.query).toHaveBeenCalled();
  });
  it("should query function listOneVisitor", () => {
    spyOn(pool, "query");
    listOneVisitor();
    expect(pool.query).toHaveBeenCalled();
  });
  it("should query function deleteAllVisitor", () => {
    spyOn(pool, "query");
    deleteAllVisitor();
    expect(pool.query).toHaveBeenCalled();
  });
});