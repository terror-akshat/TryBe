import React from 'react'
import VideoPlayer from './VideoPlayer'
import { FiHeart, FiMessageCircle, FiShare } from 'react-icons/fi'


export default function FeedCard({ post }){
return (
<article className="bg-white p-3 rounded-xl card-shadow mb-4">
<VideoPlayer url={post.video} />
<div className="mt-3 flex justify-between items-start">
<div>
<div className="font-bold">{post.user}</div>
<div className="text-sm text-gray-600">{post.caption}</div>
</div>
<div className="flex flex-col items-end gap-3">
<button className="flex items-center gap-2"><FiHeart/> {post.likes}</button>
<button className="flex items-center gap-2"><FiMessageCircle/> {post.comments}</button>
<button className="flex items-center gap-2"><FiShare/></button>
</div>
</div>
<button className="mt-3 w-full btn-rounded py-3 bg-trybePink text-white font-semibold">Shop This Look</button>
</article>
)
}