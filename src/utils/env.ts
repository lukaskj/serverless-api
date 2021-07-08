/* eslint-disable @typescript-eslint/no-explicit-any */
import * as fs from "fs";
import * as path from "path";

type EnvType = {
  [k: string]: any;
};
export class Env {
  private static envObject: EnvType = {};

  public static warmup(): void {
    const baseDir = process.cwd();

    const envFilePath = path.join(baseDir, "env.json");

    if (fs.existsSync(envFilePath)) {
      Env.envObject = JSON.parse(fs.readFileSync(envFilePath).toString());
      for (const key in Env.envObject) {
        const nKey = key.toLocaleUpperCase();
        Env.envObject[nKey] = Env.envObject[key];
        if (nKey !== key) {
          delete Env.envObject[key];
        }
      }
    }
  }

  public static get<T>(key: string, defaultValue?: T): T {
    key = key.toLocaleUpperCase();
    return (process.env[key] || Env.envObject[key] || defaultValue) as T;
  }
}

export function env<T>(key: string, defaultValue?: T): T {
  return Env.get<T>(key, defaultValue);
}
