export default class Parser {
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