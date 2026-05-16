import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const supabaseAdmin = createClient(
  supabaseUrl,
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
)

// Auth functions
export const signUp = async (email: string, password: string, fullName: string) => {
  return await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  })
}

export const signIn = async (email: string, password: string) => {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  })
}

export const signOut = async () => {
  return await supabase.auth.signOut()
}

export const getCurrentUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return user
}

// User profile functions
export const createUserProfile = async (
  userId: string,
  data: {
    full_name: string
    phone: string
    role: string
  }
) => {
  return await supabase
    .from('user_profiles')
    .insert([{ id: userId, ...data }])
    .select()
}

export const getUserProfile = async (userId: string) => {
  return await supabase
    .from('user_profiles')
    .select('*')
    .eq('id', userId)
    .single()
}

export const updateUserProfile = async (userId: string, data: any) => {
  return await supabase
    .from('user_profiles')
    .update(data)
    .eq('id', userId)
    .select()
}

// Rides functions
export const createRide = async (rideData: any) => {
  return await supabase
    .from('rides')
    .insert([rideData])
    .select()
}

export const getRides = async (filters?: any) => {
  let query = supabase.from('rides').select('*')
  
  if (filters?.status) {
    query = query.eq('status', filters.status)
  }
  if (filters?.captainId) {
    query = query.eq('captain_id', filters.captainId)
  }
  if (filters?.driverId) {
    query = query.eq('driver_id', filters.driverId)
  }
  
  return await query.order('created_at', { ascending: false })
}

export const updateRide = async (rideId: string, data: any) => {
  return await supabase
    .from('rides')
    .update(data)
    .eq('id', rideId)
    .select()
}

// Transactions functions
export const createTransaction = async (transactionData: any) => {
  return await supabase
    .from('transactions')
    .insert([transactionData])
    .select()
}

export const getTransactions = async (userId: string) => {
  return await supabase
    .from('transactions')
    .select('*')
    .or(`user_id.eq.${userId},captain_id.eq.${userId}`)
    .order('created_at', { ascending: false })
}

// Stats functions
export const getAdminStats = async () => {
  const [ridesRes, usersRes, transactionsRes] = await Promise.all([
    supabase.from('rides').select('*', { count: 'exact', head: true }),
    supabase.from('user_profiles').select('*', { count: 'exact', head: true }),
    supabase.from('transactions').select('*', { count: 'exact', head: true }),
  ])

  return {
    totalRides: ridesRes.count || 0,
    totalUsers: usersRes.count || 0,
    totalTransactions: transactionsRes.count || 0,
  }
}
