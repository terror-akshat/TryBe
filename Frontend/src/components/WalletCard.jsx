import React from 'react'


export default function WalletCard({balance}){
return (
<div className="bg-white p-4 rounded-xl card-shadow border-2 border-trybePink">
<div className="text-sm">Wallet Balance</div>
<div className="font-bold text-2xl">{balance}</div>
<div className="mt-3 flex gap-2">
<button className="flex-1 btn-rounded py-2 bg-trybePink text-white">Use for Free Delivery</button>
<button className="flex-1 btn-rounded py-2 bg-trybeLav">Convert to Discounts</button>
</div>
</div>
)
}