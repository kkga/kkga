import { spawnSync } from "node:child_process";
import { glob } from "glob";
import ffmpegPath from "ffmpeg-static";
import fs from "node:fs";
import path from "node:path";

console.log("🎬 Generating video metadata...");

const videos = await glob("src/**/*.mp4");
const metadata = {};

for (const video of videos) {
  try {
    const result = spawnSync(ffmpegPath, ["-i", video], { encoding: "utf-8" });
    const output = result.stderr || result.stdout;
    const dimensions = output?.match(/Video:.*,\s*(\d+)x(\d+)/);

    if (dimensions) {
      const [, width, height] = dimensions;
      metadata[video] = {
        width: parseInt(width),
        height: parseInt(height),
      };
      console.log(`  ✓ ${video}: ${width}x${height}`);
    } else {
      console.warn(`  ⚠ Could not extract dimensions for ${video}`);
    }
  } catch (e) {
    console.error(`  ✗ Failed to process ${video}:`, e.message);
  }
}

const outputPath = "src/data/video-metadata.json";
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(metadata, null, 2));

console.log(`\n✨ Generated metadata for ${Object.keys(metadata).length} videos`);
console.log(`📝 Saved to ${outputPath}`);
