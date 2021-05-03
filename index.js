const DatabaseError = function(statement, message) {
  this.statement = statement;
  this.message = message;
}
const database = {
  tables: {},
  createTable(statement) {
    const regexp = /^create\stable\s([a-z]+)\s\((.+)\)/i;
    const parsedStatement = statement.match(regexp);
    const tableName = parsedStatement[1];
    this.tables[tableName] = {
      columns: {},
      data: []
    }
    let columns = parsedStatement[2];
    columns = columns.split(",");
    for (let column of columns) {
      column = column.trim().split(" ");
      const name = column[0];
      const type = column[1];
      this.tables[tableName].columns[name] = type;
    }
  },
  execute(statement) {
    const regexp = /^create\stable/i;
    if (regexp.test(statement)) {
      return this.createTable(statement);
    }
    const message = `Syntax error: "${statement}"`;
    throw new DatabaseError(statement, message);
  }
};
try {
  database.execute("create table author (id number, name string, age number, city string, state string, country string)");
  console.log(JSON.stringify(database, undefined, "  "));
  database.execute("select id, name from author");
} catch (err) {
  console.error(err.message);
}