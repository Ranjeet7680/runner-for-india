// src/services/sandboxRunner.js - Vercel Sandbox Integration
import { Sandbox } from "@vercel/sandbox";

export async function runSandboxExample() {
  console.log("[Sandbox Service] Creating Vercel Isolated Sandbox instance...");

  try {
    const sandbox = await Sandbox.create();

    const cmd = await sandbox.runCommand("echo", ["Hello from Vercel Sandbox!"]);
    const output = await cmd.stdout();
    console.log("[Sandbox Output]:", output);

    await sandbox.stop();
    return { success: true, output };
  } catch (error) {
    console.warn("[Sandbox Service] Note:", error.message);
    return { success: false, error: error.message };
  }
}
