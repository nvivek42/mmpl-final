declare module 'fs-extra' {
  import { PathLike } from 'fs';

  export function readFile(
    path: PathLike | number, 
    options?: { encoding?: string | null, flag?: string } | string
  ): Promise<Buffer>;
}
