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
import Navbar from './ui/navbar';
import Bottom from './ui/bottom-nav';

export default async function Page() {
  const article = await fetchArticle();

  return (
    <main>
      <Navbar />
      <div className="flex bg-seashell min-h-screen flex-col p-6 pb-24">
        { <ArticleCard articleInfo={article} />}
      </div>
      <Bottom/>
    </main>
  );
}
