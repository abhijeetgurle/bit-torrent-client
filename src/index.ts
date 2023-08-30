import parseTorrent from "parse-torrent";
import fs from "fs";

const torrentFilePath = "puppy.torrent";
const torrentFileContent = fs.readFileSync(torrentFilePath);

const torrentInfo = parseTorrent(torrentFileContent);

torrentInfo.then((res) => {
  console.log("Announce URL:", res.announce);
});
