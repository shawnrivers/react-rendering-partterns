import {getTime} from '@/app/api/time/functions';

export async function GET() {
  const time = await getTime();
  return Response.json({time: time});
}
