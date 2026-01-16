import { Suspense } from "react";
import { Await, NavLink, useLoaderData } from "react-router-dom"

export function Blog () {
   const posts = useLoaderData();
   return <>
    <h1>Mon blog</h1> 
    <Suspense fallback={<Spinner />}>
    <Await resolve={posts}>
    {(posts) => (    <ul>
        {posts.map((post) => (
            <li key={post.id}>
                <NavLink to={post.id}>{post.title}</NavLink>
            </li>
        ))}
    </ul>)}
</Await>

    </Suspense>
    {/*}
    <ul>
        {posts.map((post) => (
            <li key={post.id}>
                <NavLink to={post.id}>{post.title}</NavLink>
            </li>
        ))}
    </ul>*/}
     </>
     
}