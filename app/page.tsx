'use client'
import React from 'react';
import {  SignOutButton, SignInButton, useAuth, useUser } from '@clerk/nextjs';
// import { currentUser } from '@clerk/nextjs/server';
import { useRouter } from 'next/navigation';

// async function fetchUser() {
//   try {
//     const userData = await currentUser();
//     if (userData) {
//       return {
//         firstName: userData.firstName,
//         emailAddress: userData.emailAddresses[0]
//       };
//     }
//     return null;
//   } catch (error) {
//     console.error('Failed to fetch user data:', error);
//     return null;
//   }
// }


export default  function Demo() {
  // const user = await fetchUser();

  const { user, isLoaded } = useUser();
  // console.log(user);
  

  if (!user) {
    return <div>No user</div>
  }
  const { signOut } = useAuth(); 
  const router = useRouter(); 

  const handleSignOut = async () => {
    
      await signOut(); 
      router.push('/sign-in'); 
  
  }

 

  return (
    <div>
      <h1>Trang chủ</h1>
      {user ? (
        <button onClick={handleSignOut}>Đăng xuất</button>
      ) : (
        <SignInButton>Đăng nhập</SignInButton>
      )}
    </div>
  );
}
