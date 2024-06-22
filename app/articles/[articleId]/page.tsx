import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
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
        data.rows.map((article, i) => {
            return(
                <div key={article.title}> 
                    <div>{article.title}</div>
                    <div>{article.description}</div>
                    <div>{article.content}</div>
                 </div>
            )
        }
    )
)
}

