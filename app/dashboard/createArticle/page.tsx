import Form from '@/app/ui/articleCreate';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchArticle } from '@/app/lib/data';
 
export default async function Page() {
  const article = await fetchArticle();
 
  return (
    <main>
      <Form article={article} />
    </main>
  );
}