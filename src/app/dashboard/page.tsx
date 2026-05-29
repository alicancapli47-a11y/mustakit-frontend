import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { Navbar } from '@/components/layout/Navbar'
import { DashboardClient } from './DashboardClient'

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/giris')

  return (
    <>
      <Navbar />
      <DashboardClient user={session.user} />
    </>
  )
}
