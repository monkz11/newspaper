import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredArticles } from '@/app/lib/data';
import Link from 'next/link';

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
                  <div>
                        <div className="mb-2 flex items-center">
                        <Image
                            src={article.image_url}
                            className="mr-2"
                            width={164}
                            height={54}
                            alt={`${article.title}'s profile picture`}
                        />
                        <p>{article.title}</p>
                        </div>
                  </div>
                </div>
              </div>
              </Link>
            ))}
    </div>
  )
}