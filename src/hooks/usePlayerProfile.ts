import { useState, useCallback } from 'react'
import { PlayerProfile } from '../types'
import { AVAILABLE_INTERESTS } from '../data'

export function usePlayerProfile(initialProfile: PlayerProfile) {
  const [profile, setProfile] = useState<PlayerProfile>(initialProfile)

  const updateName = useCallback((name: string) => {
    setProfile(prev => ({ ...prev, name }))
  }, [])

  const updateAge = useCallback((age: number) => {
    setProfile(prev => ({ ...prev, age }))
  }, [])

  const updateBio = useCallback((bio: string) => {
    setProfile(prev => ({ ...prev, bio }))
  }, [])

  const toggleInterest = useCallback((interest: string) => {
    setProfile(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest],
    }))
  }, [])

  const setInterests = useCallback((interests: string[]) => {
    setProfile(prev => ({ ...prev, interests }))
  }, [])

  const updateProfile = useCallback((updatedProfile: Partial<PlayerProfile>) => {
    setProfile(prev => ({ ...prev, ...updatedProfile }))
  }, [])

  const isInterestSelected = useCallback((interest: string) => {
    return profile.interests.includes(interest)
  }, [profile.interests])

  const getAvailableInterests = useCallback(() => {
    return AVAILABLE_INTERESTS
  }, [])

  return {
    profile,
    updateName,
    updateAge,
    updateBio,
    toggleInterest,
    setInterests,
    updateProfile,
    isInterestSelected,
    getAvailableInterests,
  }
}
