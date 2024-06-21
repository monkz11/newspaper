import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import Image from 'next/image';
import {lusitana} from '@/app/ui/fonts'
import { CardSkeleton } from './ui/skeletons';
import { fetchRevenue, fetchLatestInvoices, fetchCardData, fetchArticle } from '@/app/lib/data';
import { Card } from '@/app/ui/dashboard/cards';
import ArticleCard from "@/app/ui/articlecard"
import DropdownMenu from './ui/DropdownMenu';

export default async function Page() {
  const article = await fetchArticle();

  return (
    <main className="flex bg-seashell min-h-screen flex-col p-6">
      <div className="sticky top-0 flex h-10 md:h-32 items-center justify-between bg-seashell p-4 rounded-lg">
        <div className="flex items-center">
          <DropdownMenu />
        </div>
        <div className="flex-1 text-center">
          <span className={`${lusitana.className} antialiased text-4xl`}>The people times</span>
        </div>
        <div className="w-8">Profile</div> {/* Placeholder for spacing to keep text centered */}
    </div>

      { <ArticleCard articleInfo={article} />}
    </main>
  );
}
