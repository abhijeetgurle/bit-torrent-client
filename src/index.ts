import fs from "fs";

const torrent = fs.readFileSync("puppy.torrent", "utf8");
console.log(torrent);
