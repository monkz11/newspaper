'use server';
import { sql } from '@vercel/postgres';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
 
const FormSchema = z.object({
    image_url: z.string(),
    title: z.string(),
    description: z.string(),
    id: z.string(),
    content: z.string()
});
 
const CreateArticle = FormSchema;
 
export async function createArticle(formData: FormData) {
    const { image_url, title, description, id, content } = CreateArticle.parse({
      id: formData.get('id'),
      title: formData.get('title'),
      description: formData.get('description'),
      image_url: formData.get('image_url'),
      content: formData.get('content')
    });

    await sql`
    INSERT INTO article (image_url, title, description, id, content)
    VALUES (${image_url}, ${title}, ${description}, ${id}, ${content})
  `;

  revalidatePath('/');
  redirect('/');
  }