/// <reference path="../.astro/types.d.ts" />

declare module "*.mp4" {
  const meta: {
    src: string;
    width: number;
    height: number;
  };
  export default meta;
}