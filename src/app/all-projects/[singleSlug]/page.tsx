import React from 'react'
import SinglePageComponent from './components/SinglePageComponent'
import { getSinglePortfolios, getSinglePortfoliosBySlugV2 } from '@/network-calls/api'
import { SinglePortfolioPageSchema } from '@/interface/api-interface'

import singlePortJSON from "../../../../public/single-dummy.json"

type SinglePortfolioPageParams = {
    singleSlug: string
}

export async function generateStaticParams() {
    const result: any = await getSinglePortfolios()
    // const result = singlePortJSON
    // console.log("result", result)
    const posts: SinglePortfolioPageSchema = result

    return posts.data.map((post) => {
        return { singleSlug: post.attributes.slug }
    })
}


export default async function SinglePage({ params }: { params: SinglePortfolioPageParams }) {

    const { singleSlug } = params
    const result = await getSinglePortfoliosBySlugV2(singleSlug)
    // const dummyData = singlePortJSON
    // const result = dummyData.data[0]

    // console.log("result", result)

    return (
        <SinglePageComponent data={result.data[0]} />
    )
}
