import React from 'react'


export default function ProductGrid({ items }){
return (
<div className="grid grid-cols-2 gap-3">
{items.map(p=> (
<div key={p.id} className="bg-white rounded-xl overflow-hidden card-shadow">
<img src={p.image} alt={p.title} className="w-full h-36 object-cover" />
<div className="p-3">
<div className="font-semibold">{p.title}</div>
<div className="text-sm text-gray-600">{p.price}</div>
<button className="mt-2 rounded-full px-3 py-2 bg-trybePink text-white">View Details</button>
</div>
</div>
))}
</div>
)
}