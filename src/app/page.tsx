"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { SignInButton, SignedIn, SignOutButton, SignedOut } from '@clerk/nextjs'
import { useMutation } from 'convex/react'
import { api } from '../../convex/_generated/api'

const page = () => {
  const createFile = useMutation(api.files.createFile);
  return (
    <div>
      <SignedIn>
        <SignOutButton>
          <Button>Sign Out</Button>
        </SignOutButton>
      </SignedIn>

      <SignedOut>
        <SignInButton mode='modal'>
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>

      <Button onClick={() =>{
        createFile({
          name: "hello world",
        })
      }}
      >
        Click here
      </Button>
    </div>
  )
}

export default page