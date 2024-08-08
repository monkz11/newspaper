import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import ArticleTable from '../../ui/author-search';
import Navbar from '../../ui/navbar';
 
export default async function Page({
    params,  
    }: {
    params: {authorId: string};
  }) {
  const query = params.authorId;
  const currentPage = 1;

  return (
    <div className="w-full bg-seashell">
        <Navbar/>
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl pt-8 pl-16`}>Articles</h1>
      </div>
      <div className="pl-16 pr-16 mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search articles..." />
      </div>
      {  <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <ArticleTable query={query} currentPage={currentPage} />
      </Suspense> }
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  );
}