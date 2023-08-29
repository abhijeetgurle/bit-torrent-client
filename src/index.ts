import fs from "fs";
import bencode from "bencode";

const torrent = bencode.decode(fs.readFileSync("puppy.torrent"));
const trackerUrl = torrent.announce.toString("utf8");
console.log(trackerUrl);
