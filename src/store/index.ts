import { create } from 'zustand'

interface User {
  id: string
  email: string
  role: 'admin' | 'investor' | 'captain' | 'driver'
  full_name: string
  phone: string
}

interface AuthStore {
  user: User | null
  isLoading: boolean
  setUser: (user: User | null) => void
  setLoading: (loading: boolean) => void
  logout: () => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLoading: false,
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ isLoading: loading }),
  logout: () => set({ user: null }),
}))

interface UIStore {
  sidebarOpen: boolean
  theme: 'dark' | 'light'
  setSidebarOpen: (open: boolean) => void
  setTheme: (theme: 'dark' | 'light') => void
}

export const useUIStore = create<UIStore>((set) => ({
  sidebarOpen: true,
  theme: 'dark',
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  setTheme: (theme) => set({ theme }),
}))

interface RideStore {
  rides: any[]
  selectedRide: any | null
  setRides: (rides: any[]) => void
  setSelectedRide: (ride: any | null) => void
  addRide: (ride: any) => void
  updateRide: (id: string, data: any) => void
}

export const useRideStore = create<RideStore>((set) => ({
  rides: [],
  selectedRide: null,
  setRides: (rides) => set({ rides }),
  setSelectedRide: (ride) => set({ selectedRide: ride }),
  addRide: (ride) => set((state) => ({ rides: [...state.rides, ride] })),
  updateRide: (id, data) =>
    set((state) => ({
      rides: state.rides.map((r) => (r.id === id ? { ...r, ...data } : r)),
    })),
}))
