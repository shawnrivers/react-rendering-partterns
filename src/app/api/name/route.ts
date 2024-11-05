import {getName} from '@/app/api/name/functions';

export async function GET() {
  const name = await getName();
  return Response.json({name});
}
