// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:

const { title } = require("process");

// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const customers = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Hector Simpson',
    email: 'hector@simpson.com',
    image_url: '/customers/hector-simpson.png',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Steven Tey',
    email: 'steven@tey.com',
    image_url: '/customers/steven-tey.png',
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name: 'Steph Dietz',
    email: 'steph@dietz.com',
    image_url: '/customers/steph-dietz.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
    name: 'Emil Kowalski',
    email: 'emil@kowalski.com',
    image_url: '/customers/emil-kowalski.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[7].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[6].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-18',
  },
  {
    customer_id: customers[0].id,
    amount: 8945,
    status: 'paid',
    date: '2023-10-04',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

const article = [
  {image_url: 'https://mlpqxinfrnomb00o.public.blob.vercel-storage.com/105604363-1547570907444gettyimages-1067412622-0EOvH9BiUJSPBttf4ItIYdxfp5iKJF.jpg', title: 'Protest erupt in france against the far right', description: 'Recent eruptions in paris as groups from the far left to center protest the FN', id: '4678', content: 'testing', content_type: 'world'},
  {image_url: '/gaza.png', title: 'Protest in jerusalem as locals morn palestinian deaths', description: 'you can infer from title 1', id: '4679', content: 'testing', content_type: 'world'},
  {image_url: 'https://mlpqxinfrnomb00o.public.blob.vercel-storage.com/Emmanuel-Macron-2017-IXgMHsS0R9SPpFyjflYIdxcwJ2DP4C.webp', title: 'Insiders claim emmanuel macron regrets calling for election', description: 'Insiders claim that emmanuel macron has recognsied a miscalculation in calling for a general election', id: '4690', content: 'testing', content_type: 'local'},
  {image_url: 'https://mlpqxinfrnomb00o.public.blob.vercel-storage.com/economy-planet-jHwCilKF3JYJr89eojg46AXLuiCVvl.jpg', title: 'New report from the imf shows inflation dropping to 4% globally', description: 'you can infer from title 2', id: '4691', content: 'testing', content_type: 'local'},
  {image_url: 'https://mlpqxinfrnomb00o.public.blob.vercel-storage.com/_119168866_gettyimages-1204741868-JI5sEoAtzDOqPeLvoXNxYi23p6SMLz.jpg', title: 'How the Taliban took over Afghanistans mines', description: 'you can infer from title 2', id: '4692', content: 'testing', content_type: 'world'},
  {image_url: 'https://mlpqxinfrnomb00o.public.blob.vercel-storage.com/762f7670-33f9-11ef-bdc5-41d7421c2adf-jolsKrFEGdiWiPpxlnmcBHTwrbPDB6.jpg', title: 'USA presidential debates, what the pollsters predicts', description: 'you can infer from title 2', id: '4693', content: 'testing', content_type: 'torah'},
  {image_url: 'https://mlpqxinfrnomb00o.public.blob.vercel-storage.com/skynews-bolivia-coup_6592009-xFqrFLgBixCL6KlfncvzgwtH2KImwU.jpg', title: 'Coup detat in bolivia circumvented by president', description: 'you can infer from title 2', id: '4694', content: 'testing', content_type: 'torah'},
]

module.exports = {
  users,
  customers,
  invoices,
  revenue,
  article
};
