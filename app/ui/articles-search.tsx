import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredArticles } from '@/app/lib/data';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';

export default async function ArticleTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const articles = await fetchFilteredArticles(query, currentPage);

  return (
    <div className='pl-64 pr-64'>
            {articles?.map((article) => (
            <Link href={`/articles/${article.id}`} key={article.title}>
              <div
                key={article.title}
                className="mb-2 w-full rounded-md bg-seashell p-4 mt-8 drop-shadow-lg hover:scale-102 hover:shadow-2xl"
              >
                <div className="flex items-center justify-between">
                    <div className="flex w-3/5 items-center border-r-2 border-black pr-8">
                        <Image
                            src={article.image_url}
                            className="mr-2"
                            width={164}
                            height={54}
                            alt={`${article.title}'s profile picture`}
                        />
                        <div>
                            <h1 className={`${lusitana.className} text-lg`}>{article.title}</h1>
                            <Link href={`/articles/${article.article_author}`} key={article.title}>
                                <p className={`${lusitana.className} pt-4 text-slate-400 underline`}>{article.article_author}</p>
                            </Link>
                        </div>
                    </div>
                    <div className="w-2/5 pl-4">
                        <p className={`${lusitana.className}`}>{article.description}</p>
                    </div>
                </div>
            </div>
            </Link>
            ))}
    </div>
  )
}