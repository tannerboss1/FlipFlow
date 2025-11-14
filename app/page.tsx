"use client";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "./firebaseConfig";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState<any>(null);

  const handleLogin = async () => {
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-black text-white">
      {!user ? (
        <>
          <h1 className="text-3xl font-semibold mb-6">Welcome to FlipFlow</h1>
          <button
            onClick={handleLogin}
            className="px-6 py-3 bg-amber-500 rounded-lg font-medium hover:bg-amber-600"
          >
            Sign in with Google
          </button>
        </>
      ) : (
        <>
          <p className="text-lg mb-4">Hello, {user.displayName}</p>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600"
          >
            Sign Out
          </button>
        </>
      )}
    </main>
  );
}
