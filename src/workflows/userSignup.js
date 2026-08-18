// src/workflows/userSignup.js - Durable Workflow for User Signup & Onboarding
import { sleep } from "workflow";

export async function createUser(email) {
  // Step function to create user in database/storage
  console.log(`[Workflow Step] Creating user for email: ${email}`);
  return {
    id: `usr_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
    email,
    createdAt: new Date().toISOString()
  };
}

export async function sendWelcomeEmail(user) {
  // Step function to send welcome email
  console.log(`[Workflow Step] Sending welcome email to ${user.email} (ID: ${user.id})`);
  return { sent: true, type: "welcome", timestamp: new Date().toISOString() };
}

export async function sendOnboardingEmail(user) {
  // Step function to send onboarding email after delay
  console.log(`[Workflow Step] Sending onboarding email to ${user.email}`);
  return { sent: true, type: "onboarding", timestamp: new Date().toISOString() };
}

export async function handleUserSignup(email) {
  "use workflow";

  const user = await createUser(email);
  await sendWelcomeEmail(user);

  // Durable non-blocking sleep for 5 seconds
  await sleep("5s");

  await sendOnboardingEmail(user);
  return { userId: user.id, status: "onboarded" };
}
