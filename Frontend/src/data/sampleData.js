export const posts = [
{
id: 'p1',
user: 'alia.stylist',
avatar: '',
caption: 'Minimal pastel fit for rainy Bengaluru ☔️ #Minimalist',
video: '/src/assets/sample-video.mp4',
product: { id: 'prod1', title: 'Pastel Raincoat', price: '₹1,999', image: '/src/assets/placeholder.jpg' },
likes: 120,
comments: 14
},
{
id: 'p2',
user: 'noah.creates',
avatar: '',
caption: 'Throwback retro party look — sequins + attitude ✨',
video: '',
product: { id: 'prod2', title: 'Retro Sequin Top', price: '₹2,499', image: '/src/assets/placeholder.jpg' },
likes: 340,
comments: 28
}
]


export const products = new Array(12).fill(0).map((_,i)=>({
id: `prod-${i}`,
title: `Product ${i+1}`,
price: `₹${999 + i*100}`,
image: '/src/assets/placeholder.jpg'
}))