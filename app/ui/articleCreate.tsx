import { article } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createArticle } from '@/app/lib/actions';

export default function Form({ article }: { article: article[] }) {
  return (
    <form action={createArticle}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Article title
          </label>
          <div className="relative">
          <label>
            Title input: <input name="title" />
          </label>
            <hr />
          </div>
        </div>

        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Description
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                name="description"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        {/* Invoice Status */}
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            id
          </label>
          <div className="relative">
          <label>
            id input: <input name="id" />
          </label>
            <hr />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            img_url
          </label>
          <div className="relative">
          <label>
            img_url input: <input name="image_url" />
          </label>
            <hr />
          </div>
        </div>

        <div className="mb-4">
            <label htmlFor="content" className="mb-2 block text-sm font-medium">
                Content
            </label>
            <textarea
                id="content"
                name="content"
                rows={20} // Adjust the number of rows as needed
                className="w-full px-3 py-2 border rounded-md text-sm leading-tight focus:outline-none focus:ring"
                placeholder="Enter article content here."
            />
        </div>


      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Article</Button>
      </div>
    </form>
  );
}
