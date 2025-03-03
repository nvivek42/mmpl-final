import fs from 'fs-extra';
import path from 'path';
import { getPlaiceholder } from 'plaiceholder';

export async function getBlurDataURL(imagePath: string) {
  const fullPath = path.join(process.cwd(), 'public', imagePath);
  const buffer = await fs.readFile(fullPath);
  const { base64 } = await getPlaiceholder(buffer);
  return base64;
}
