import React from 'react'
import AllProjectComponent from './components/AllProjectComponent'
import { getMultiPortfolios } from '@/network-calls/api'
import { MultiPortfolioPageSchema } from '@/interface/api-interface'

import multiPortJSON from "../../../public/dummy.json"

export default async function AllProject() {

  const result: any = await getMultiPortfolios()
  console.log("result",result)
  // const posts: MultiPortfolioPageSchema = result

  // const result = multiPortJSON
  const posts: MultiPortfolioPageSchema = result


  return (
    <div>
      <AllProjectComponent data={posts}/>
    </div>
  )
}
