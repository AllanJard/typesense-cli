const i = require("./modules/indexData");
const a = require("./modules/serverManagement");
const inq = require("./modules/changeNodeSettings");
const vars = require("./modules/updateSettings");
const d = require("./modules/dirs");
const arg = require("arg");
const index = new i.application();
const other = new a.application();
export async function cli(args) {
  const x = arg({
    "--schemas": Boolean,
    "--help": Boolean,
    "--version": Boolean,
    "--serv": Boolean,
    "--collections": Boolean,
    "--key": Boolean,
    "--index": [String],
    "--new": String,
    "--remove": [String],
    "-v": "--version",
    "-i": "--index",
    "-h": "--help",
    "-s": "--schemas",
    "-c": "--collections",
    "-k": "--keys",
    "-r": "--remove",
  });
  // console.log(x);
  if (x["--index"]) {
    index.indexData(x["--index"]);
  }
  if (x["--schemas"]) {
    other.getSchemas();
  }
  if (x["--version"]) {
    d.getDirectoryPath();
  }
  if (x["--serv"]) {
    let r = await inq.nodeSettings();
    vars.node(r);
  }
  if (x["--help"]) {
  }
  if (x["--key"] && !x["--remove"] && !x["--new"]) {
  }
  if (x["--key"] && x["--remove"]) {
  }
  if (x["--key"] && x["--new"]) {
  }
  if (x["--collections"] && !x["--remove"] && x["--new"]) {
  }
  if (x["--collections"] && x["--remove"]) {
  }
}
