const {
  addNewVisitor,
  listAllVisitors,
  deleteAVisitor,
  updateAVisitor,
  listOneVisitor,
  deleteAllVisitor,
  pool,
  createTable,
} = require(`../src/index`);

describe("Test if methods are called", () => {
  it("should query method addNewVisitor", () => {
    spyOn(pool, "query");
    addNewVisitor();
    expect(pool.query).toHaveBeenCalled();
  });
  it("should query method listVisitors", () => {
    spyOn(pool, "query");
    listAllVisitors();
    expect(pool.query).toHaveBeenCalled();
  });
  it("should query method deleteAVisitor", () => {
    spyOn(pool, "query");
    deleteAVisitor();
    expect(pool.query).toHaveBeenCalled();
  });
  it("should query method updateAVisitor", () => {
    spyOn(pool, "query");
    updateAVisitor();
    expect(pool.query).toHaveBeenCalled();
  });
  it("should query method listOneVisitor", () => {
    spyOn(pool, "query");
    listOneVisitor();
    expect(pool.query).toHaveBeenCalled();
  });
  it("should query method deleteVisitor", () => {
    spyOn(pool, "query");
    deleteAllVisitor();
    expect(pool.query).toHaveBeenCalled();
  });
  it("should query method createTable", () => {
    spyOn(pool, "query");
    createTable();
    expect(pool.query).toHaveBeenCalled();
  });
});