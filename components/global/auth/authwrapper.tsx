"use client";
import { useUser } from '@/db/models/firebase.modals';
import { privateRoutes } from '@/routes';
import { useEffect } from 'react';

interface AuthWrapperProps {
  children: React.ReactNode;
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
  useUser();
  let user = null;

  if (typeof window !== 'undefined') {
    // make a variable to check to the local storage to see if the user is logged in
    user = localStorage.getItem('user');
    const NoUser = user === 'false';
    const isPrivateRoute = privateRoutes.includes(window.location.pathname);
    if (isPrivateRoute && NoUser) {
      window.location.replace("/");
      return null;
    }
  }

  return children;
}
