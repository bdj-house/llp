// sanity-codegen.config.ts
import { SanityCodegenConfig } from "sanity-codegen";

const config: SanityCodegenConfig = {
  schemaPath: "./src/sanity/schemaTypes/index",
  outputPath: "./src/sanity/types/schema.ts",
};

export default config;
