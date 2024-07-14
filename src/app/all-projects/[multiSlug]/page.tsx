import { MultiPortfolioPageAttributes, MultiPortfolioPageData, MultiPortfolioPageSchema } from '@/interface/api-interface'
import { getMultiPortfolios, getMultiPortfoliosById, getMultiPortfoliosBySlug, getMultiPortfoliosBySlugV2 } from '@/network-calls/api'
import React from 'react'

type MultiPortfolioPageParams = {
    multiSlug:string
}

export async function generateStaticParams() {
    const result: any = await getMultiPortfolios()
    const posts: MultiPortfolioPageSchema = result

    return posts.data.map((post) => {
        return { multiSlug: post.attributes.slug }
    })
}

export default async function MultiPortfolioPage({ params }: { params: MultiPortfolioPageParams }) {
    const { multiSlug } = params
    const result = await getMultiPortfoliosBySlugV2(params.multiSlug)
    console.log("slug", multiSlug, params, result)
    return (
        <div>MultiPortfolioPage, {JSON.stringify(params)}</div>
    )
}

