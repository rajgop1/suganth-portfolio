import React from 'react'

export async function generateStaticParams() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/todos').then((res) => res.json())
    console.log("posts", posts)
    return posts.map((post) => ({
        slug: post.title,
    }))
}

export default function SpecificProject({ params }:{params:any}) {
    const slug = { params }
    console.log("slug", slug)
    return (
        <div>SpecificProject</div>
    )
}
