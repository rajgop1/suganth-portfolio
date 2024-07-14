import React from 'react'
import AllProjectComponent from './components/AllProjectComponent'
import { getMultiPortfolios } from '@/network-calls/api'
import { MultiPortfolioPageSchema } from '@/interface/api-interface'

export default async function AllProject() {

  const result: any = await getMultiPortfolios()
  const posts: MultiPortfolioPageSchema = result

  return (
    <div>
      <AllProjectComponent data={posts}/>
    </div>
  )
}
