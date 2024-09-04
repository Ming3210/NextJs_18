
import React from 'react';
import { currentUser } from '@clerk/nextjs/server';

async function fetchUser() {
  try {
    const userData = await currentUser();
    if (userData) {
      return {
        firstName: userData.firstName,
        emailAddress: userData.emailAddresses[0]
      };
    }
    return null;
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    return null;
  }
}

export default async function ProfilePage() {
  const user = await fetchUser();
  console.log(user);
  

  if (!user) {
    return <div>No user</div>
  }

  return (
    <div>
      <h1>Thông tin cá nhân</h1>
      <p><strong>Tên:</strong> {user.firstName}</p>
      <p><strong>Email:</strong> {user.emailAddress.emailAddress}</p>
    </div>
  );
}
