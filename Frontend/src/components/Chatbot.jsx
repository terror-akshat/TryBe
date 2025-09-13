import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { FiSend } from 'react-icons/fi'


export default function Chatbot(){
const [open,setOpen] = useState(false)
const [q,setQ] = useState('')
const [history,setHistory] = useState([{from:'bot',text:'Hey! Tell me a vibe or occasion (eg. "Pastel brunch look")'}])


function send(){
if(!q) return
const userMsg = {from:'user', text:q}
setHistory(h=>[...h,userMsg, {from:'bot', text:`Smart picks for "${q}" — try: Pastel oversized shirt, white sneakers, mini bag.`}])
setQ('')
}


return (
<>
<button onClick={()=>setOpen(true)} className="fixed right-6 bottom-24 bg-trybeLav p-3 rounded-full shadow-lg">AI</button>
<Dialog open={open} onClose={()=>setOpen(false)} className="fixed inset-0 flex items-end justify-center">
<div className="w-full max-w-md bg-white rounded-t-xl p-4 card-shadow">
<div className="flex justify-between items-center"><h3 className="font-bold">Trybe Chat</h3><button onClick={()=>setOpen(false)}>Close</button></div>
<div className="mt-3 h-56 overflow-auto border rounded p-2">
{history.map((h,i)=>(<div key={i} className={`mb-2 ${h.from==='bot' ? 'text-gray-700' : 'text-right'}`}>{h.text}</div>))}
</div>
<div className="mt-3 flex gap-2">
<input value={q} onChange={e=>setQ(e.target.value)} placeholder="Ask about style, size, or combo" className="flex-1 rounded-full border px-3 py-2" />
<button onClick={send} className="rounded-full bg-trybePink px-3 py-2 text-white"><FiSend/></button>
</div>
</div>
</Dialog>
</>
)
}