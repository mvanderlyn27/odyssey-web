import { readdir, writeFile, mkdir } from "fs/promises";
import { join, extname, dirname, basename } from "path";
import { encode } from "blurhash";
import sharp from "sharp";

const sourcePath = join(process.cwd(), "public");
const publicPath = join(process.cwd(), "public/images");
const outputPath = join(process.cwd(), "src", "blurhashes.json");

const resolutions = {
  mobile: 800,
  desktop: 1920,
};

async function getPngFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = join(dir, dirent.name);
      return dirent.isDirectory() ? getPngFiles(res) : res;
    })
  );
  return files.flat().filter((file) => extname(file).toLowerCase() === ".png");
}

async function processImage(filePath) {
  try {
    const relativePath = filePath.replace(sourcePath, "");
    console.log(`Processing ${relativePath}...`);

    const image = sharp(filePath);

    // Generate different resolutions
    for (const [size, width] of Object.entries(resolutions)) {
      const outputDir = join(publicPath, dirname(relativePath), size);
      await mkdir(outputDir, { recursive: true });
      const filename = basename(relativePath, ".png");

      // Create WebP
      const webpPath = join(outputDir, `${filename}.webp`);
      await image.resize({ width }).toFile(webpPath);
      console.log(`Created ${webpPath}`);

      // Create resized PNG as a fallback
      const pngPath = join(outputDir, `${filename}.png`);
      await image.resize({ width }).toFile(pngPath);
      console.log(`Created ${pngPath}`);
    }

    // Generate BlurHash
    const { data, info } = await image
      .raw()
      .ensureAlpha()
      .resize(32, 32, { fit: "inside" })
      .toBuffer({ resolveWithObject: true });

    const hash = encode(new Uint8ClampedArray(data), info.width, info.height, 4, 4);
    console.log(`Generated BlurHash for ${relativePath}.`);
    return { [relativePath]: hash };
  } catch (error) {
    console.error(`Failed to process ${filePath}:`, error);
    throw error;
  }
}

async function main() {
  try {
    console.log("Starting image processing...");
    await mkdir(publicPath, { recursive: true });
    const pngFiles = await getPngFiles(sourcePath);
    console.log(`Found ${pngFiles.length} PNG files to process.`);
    if (pngFiles.length === 0) {
      console.log("No PNG files found in source directory.");
      return;
    }
    const blurhashes = await Promise.all(pngFiles.map(processImage));
    const blurhashesMap = blurhashes.reduce((acc, curr) => ({ ...acc, ...curr }), {});

    await writeFile(outputPath, JSON.stringify(blurhashesMap, null, 2));
    console.log("Successfully processed images and generated blurhashes.");
  } catch (error) {
    console.error("Error processing images:", error.message);
  }
}

main();
