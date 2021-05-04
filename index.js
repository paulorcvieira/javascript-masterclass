class DatabaseError {
  constructor(statement, message) {
    this.statement = statement;
    this.message = message;
  }
}
class Parser {
  constructor() {
    this.commands = new Map();
    this.commands.set("createTable", /^create\stable\s([a-z]+)\s\((.+)\)/i);
    this.commands.set("insert", /^insert\sinto\s([a-z]+)\s\((.+)\)\svalues\s\((.+)\)/i);
    this.commands.set("select", /^select\s(.+)\sfrom\s([a-z]+)(?:\swhere\s(.+))?/i);
    this.commands.set("delete", /^delete\sfrom\s([a-z]+)(?:\swhere\s(.+))?/i);
  }

  parse(statement) {
    for (let [command, regexp] of this.commands) {
      const parsedStatement = statement.match(regexp);
      if (parsedStatement) {
        return {
          command,
          parsedStatement
        }
      }
    }
  }
}
class Database {
  constructor() {
    this.tables = {};
    this.parser = new Parser();
  }

  createTable(parsedStatement) {
    let [, tableName, columns] = parsedStatement;
    this.tables[tableName] = {
      columns: {},
      data: []
    }
    columns = columns.split(",");
    for (let column of columns) {
      column = column.trim().split(" ");
      const [name, type] = column;
      this.tables[tableName].columns[name] = type;
    }
  }

  insert(parsedStatement) {
    let [, tableName, columns, values] = parsedStatement;
    columns = columns.split(", ");
    values = values.split(", ");
    let row = {};
    for (let i = 0; i < columns.length; i++) {
      const column = columns[i];
      const value = values[i];
      row[column] = value;
    }
    this.tables[tableName].data.push(row);
  }

  select(parsedStatement) {
    let [, columns, tableName, whereClause] = parsedStatement;
    columns = columns.split(", ");
    let rows = this.tables[tableName].data;

    if (whereClause) {
      const [columnWhere, valueWhere] = whereClause.split(" = ");
      rows = rows.filter(function (row) {
        return row[columnWhere] === valueWhere;
      });
    }

    rows = rows.map(function (row) {
      let selectedRow = {};
      columns.forEach(function (column) {
        selectedRow[column] = row[column];
      });
      return selectedRow;
    });
    return rows;
  }

  delete(parsedStatement) {
    let [, tableName, whereClause] = parsedStatement;
    if (whereClause) {
      let [columnWhere, valueWhere] = whereClause.split(" = ");
      return this.tables[tableName].data = this.tables[tableName].data
        .filter(function (row) {
          return row[columnWhere] !== valueWhere;
        });
    } else {
      return this.tables[tableName].data = [];
    }
  }

  execute(statement) {
    const result = this.parser.parse(statement);
    if (result) {
      return this[result.command](result.parsedStatement);
    }
    const message = `Syntax error: "${statement}"`;
    throw new DatabaseError(statement, message);
  }
}
try {
  const database = new Database();
  database.execute("create table author (id number, name string, age number, city string, state string, country string)");
  database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");
  database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
  database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");
  database.execute("delete from author where id = 2");
  console.log(JSON.stringify(database.execute("select name, age from author"), undefined, "  "));
} catch (err) {
  console.error(err.message);
}