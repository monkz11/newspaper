import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import Image from 'next/image';
import {lusitana} from '@/app/ui/fonts'
import { CardsSkeleton } from './ui/skeletons';

export default function Page() {
  return (
    <main className="flex bg-seashell min-h-screen flex-col p-6">
      <div className="sticky top-0 flex h-10 shrink-0 items-center justify-center rounded-lg bg-seashell p-4 md:h-32">
      <span className={`${lusitana.className} antialiased text-4xl`}>The people times</span>
      </div>
      < CardsSkeleton />
    </main>
  );
}
