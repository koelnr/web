"use server";

import { type FirebaseError } from "firebase/app";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function savePreLaunchEmail(email: string, city?: string) {
  try {
    // Sanitize and validate input
    const sanitizedEmail = email.toLowerCase().trim();

    if (!sanitizedEmail) {
      return {
        success: false,
        error: "Email is required",
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedEmail)) {
      return {
        success: false,
        error: "Please enter a valid email address",
      };
    }

    // Check email length
    if (sanitizedEmail.length > 254) {
      return {
        success: false,
        error: "Email address is too long",
      };
    }

    // Save to Firestore
    const docRef = await addDoc(collection(db, "pre-launch"), {
      email: sanitizedEmail,
      city: city || null,
      timestamp: Timestamp.now(),
    });

    console.log(`[Pre-launch] Email saved: ${sanitizedEmail} from ${city || 'unknown'}`);

    return {
      success: true,
      id: docRef.id,
      message: "Thanks for signing up! We'll notify you when we launch.",
    };
  } catch (error) {
    console.error("Error saving email to pre-launch:", error);

    const firebaseError = error as FirebaseError;

    // Handle specific Firebase errors
    if (firebaseError.code === "permission-denied") {
      return {
        success: false,
        error: "Unable to save email. Please try again later.",
      };
    }

    return {
      success: false,
      error: "Something went wrong. Please try again.",
    };
  }
}
