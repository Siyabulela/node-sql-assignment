// const {
//   addNewVisitor,
//   listAllVisitors,
//   deleteAVisitor,
//   deleteAllVisitor,
// } = require(`../src/index`);

// describe("Test SQL commands and modifying table in the database", () => {
//   const Visitors = { addNewVisitor };
//   let table = new Visitors();

// //   const visitor = {
// //     name: "Bruce Lee",
// //     age: 48,
// //     date: new Date("1936-08-15"),
// //     time: "06:00",
// //     assistant: "Chinese",
// //     comments: "The karate dude",
// //   };
// //   it("should add new visitors", async () => {
// //     const newVisitor = await table.addNewVisitor(
// //       visitor.name,
// //       visitor.age,
// //       visitor.date,
// //       visitor.time,
// //       visitor.assistant,
// //       visitor.comments
// //     );
// //     expect(newVisitor[0].name).toEqual(visitor.name);
// //     expect(newVisitor[0].age).toEqual(visitor.age);
// //     expect(newVisitor[0].dateofvisit).toEqual(visitor.date);
// //     expect(newVisitor[0].timeofvisit).toEqual(visitor.time);
// //     expect(newVisitor[0].assistant).toEqual(visitor.assisted);
// //     expect(newVisitor[0].comments).toEqual(visitor.comments);
// //   });

// //   it("should check if visitor data exist in the table", async () => {
// //     const seeAllVisitors = await table.listAllVisitors();
// //     expect(seeAllVisitors).not.toEqual([]);
// //     expect(seeAllVisitors[0].name).toEqual("Bruce Lee");
// //     expect(seeAllVisitors[0].assistant).toEqual(visitor.assisted);
// //   });

// //   it("should delete a visitor from the table", async () => {
// //     const deleteOneVisitor = await table.deleteAVisitor(1);
// //     expect(deleteOneVisitor).toEqual([]);
// //   });

// //   it("should delete all visitors from the table", async () => {
// //     const deleteVisitors = await table.deleteAllVisitor();
// //     expect(deleteVisitors).toEqual([]);
// //   });
//  });