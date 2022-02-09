import { fetch } from "undici";
import { Deno } from "@deno/shim-deno";
import { TransformStream } from "stream/web";

globalThis.fetch = fetch;
globalThis.Deno = Deno;
globalThis.TransformStream = TransformStream;
