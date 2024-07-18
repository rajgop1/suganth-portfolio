// /api/single-portfolios/
// /api/multi-portfolios/

import { getReqAuth, getReqAuthWithoutToken } from "./network-call";

export async function getMultiPortfolios() {
    try {
        const result = await (await getReqAuthWithoutToken("/api/multi-portfolios?populate=deep")).json()
        console.log("result", result)
        return result
    } catch (err) {
        console.log("err", err)
        return err
    }
}

export async function getHomePageGridCard() {
    try {
        const result = await (await getReqAuthWithoutToken("api/home-page-grid-card?populate=deep")).json()
        console.log("result", result)
        return result
    } catch (err) {
        console.log("err", err)
        return err
    }
}

export async function getSinglePortfolios() {
    try {
        const result = await (await getReqAuthWithoutToken("/api/single-portfolios?populate=deep")).json()
        console.log("result", result)
        return result
    } catch (err) {
        console.log("err", err)
        return err
    }
}

export async function getMultiPortfoliosById(id: number) {
    try {
        const result = await (await getReqAuthWithoutToken(`/api/multi-portfolios/${id}?populate=deep`)).json()
        console.log("result", result)
        return result
    } catch (err) {
        console.log("err", err)
        return err
    }
}
export async function getMultiPortfoliosBySlug(slug: string) {
    try {
        const result = await (await getReqAuthWithoutToken(`/api/multi-portfolios/${slug}?populate=deep`)).json()
        console.log("result", result)
        return result
    } catch (err) {
        console.log("err", err)
        return err
    }
}
export async function getMultiPortfoliosBySlugV2(slug: string) {
    try {
        const result = await (await getReqAuthWithoutToken(`/api/multi-portfolios?filters[slug][$eq]=${slug}&populate=deep`)).json()
        console.log("result", result)
        return result
    } catch (err) {
        console.log("err", err)
        return err
    }
}

export async function getSinglePortfoliosBySlugV2(slug: string) {
    try {
        const result = await (await getReqAuthWithoutToken(`/api/single-portfolios?filters[slug][$eq]=${slug}&populate=deep`)).json()
        console.log("result", result)
        return result
    } catch (err) {
        console.log("err", err)
        return err
    }
}