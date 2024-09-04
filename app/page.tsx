'use client';

import React from 'react';
import { SignInButton, useAuth, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function Demo() {
  const { signOut } = useAuth(); 
  const router = useRouter(); 
  const { user, isLoaded } = useUser();

  // Show a loading state while user data is being fetched
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  // If there is no user, show a message or sign-in button
  if (!user) {
    return (
      <div>
        <p>No user</p>
        <SignInButton>Đăng nhập</SignInButton>
      </div>
    );
  }

  // Handler for sign out
  const handleSignOut = async () => {
    try {
      await signOut();
      router.push('/sign-in');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Render user info and sign out button
  return (
    <div>
      <h1>Trang chủ</h1>
      <button onClick={handleSignOut}>Đăng xuất</button>
    </div>
  );
}
