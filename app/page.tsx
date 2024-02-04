"use client"
import MouseTargetingTrainer from "./components/MouseTargetingTrainer/index";
import { UserInfoProvider } from '@/app/contexts/UserInfoProvider';

export default function Home() {
  return (
    <UserInfoProvider>
      <MouseTargetingTrainer />
    </UserInfoProvider>

  )
}
