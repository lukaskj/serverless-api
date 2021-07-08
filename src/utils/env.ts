/* eslint-disable @typescript-eslint/no-explicit-any */
import * as fs from "fs";
import * as path from "path";

const baseDir = process.cwd();

let envObject: any = {};

const envFilePath = path.join(baseDir, "env.json");

if (fs.existsSync(envFilePath)) {
  envObject = JSON.parse(fs.readFileSync(envFilePath).toString());
  for (const key in envObject) {
    const nKey = key.toLocaleUpperCase();
    envObject[nKey] = envObject[key];
    if (nKey !== key) {
      delete envObject[key];
    }
  }
}

function env<T>(key: string, defaultValue?: T): T {
  key = key.toLocaleUpperCase();
  return (process.env[key] || envObject[key] || defaultValue) as T;
}

export default env;
