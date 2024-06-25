import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { lusitana } from '../../ui/fonts';
import Image from 'next/image';
import Navbar from '@/app/ui/navbar';
import {
  CustomerField,
  CustomersTableType,
  InvoiceForm,
  InvoicesTable,
  LatestInvoiceRaw,
  User,
  Revenue,
  article,
} from '@/app/lib/definitions';

export default async function Page({
    params, 
    }: {
    params: {articleId: string};
}) {
    noStore();
    const data = await sql<article>`SELECT * FROM article WHERE id = ${params.articleId};`;
    return(
        <main>
        <Navbar />
        {data.rows.map((article, i) => {
            return(
                <div key={article.title} className='bg-seashell pb-28 flex justify-center items-center pt-16'>
                    <div className="text-center"> 
                        <h1 className={`${lusitana.className} text-6xl mb-4 pb-4`}>{article.title}</h1>
                        <p className={`${lusitana.className} mb-4 pb-8 font-light`}>{article.description}</p>

                        <Image
                            src={article.image_url}
                            alt={`${article.title} article image`}
                            className="mr-4 object-center pb-16"
                            width={600}
                            height={400}
                        />
                        <div className='max-w-screen-lg'>
                            <p className={`${lusitana.className} max-w-4 mb-4 font-semibold text-center pl-40 pr-40`}>{article.content}</p>
                        </div>
                    </div>
                 </div>
            )
        }
    )}
    </main>
)
}

