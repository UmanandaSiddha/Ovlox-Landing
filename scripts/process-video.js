const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")

const INPUT = "video-src/intro.mp4"
const OUTPUT_DIR = "public/video-output"

function run(cmd) {
    console.log("\n▶", cmd)
    execSync(cmd, { stdio: "inherit" })
}

fs.mkdirSync(OUTPUT_DIR, { recursive: true })

// 1️⃣ Generate HLS stream (2s segments)
run(`
ffmpeg -y -i "${INPUT}" \
  -vf "scale=1280:-2" \
  -c:v libx264 \
  -profile:v main \
  -crf 23 \
  -g 48 \
  -keyint_min 48 \
  -sc_threshold 0 \
  -c:a aac \
  -ar 48000 \
  -b:a 128k \
  -hls_time 2 \
  -hls_playlist_type vod \
  -hls_segment_filename "${OUTPUT_DIR}/intro_%03d.ts" \
  "${OUTPUT_DIR}/intro.m3u8"
`.trim())

// 2️⃣ Poster frame
run(`
ffmpeg -y -i "${INPUT}" -ss 00:00:01 -vframes 1 "${OUTPUT_DIR}/intro-poster.jpg"
`.trim())

console.log("\n✅ HLS stream ready")
