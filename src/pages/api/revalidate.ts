import { timingSafeEqual } from 'crypto';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const envSecret = process.env.REVALIDATE_SECRET;

  if (!envSecret) {
    console.error('REVALIDATE_SECRET environment variable is not configured');
    return res.status(500).json({ message: 'Server configuration error' });
  }

  let secret: string | undefined;

  if (req.body?.secret) {
    secret = req.body.secret;
  } else if (req.headers.authorization) {
    const authHeader = req.headers.authorization;
    
    if (authHeader.startsWith('Bearer ')) {
      secret = authHeader.substring(7);
    } else {
      secret = authHeader;
    }
  }

  if (!secret || !constantTimeCompare(secret, envSecret)) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    await res.revalidate('/');

    return res.json({ revalidated: true });
  } catch (err) {
    console.error('Error revalidating:', err instanceof Error ? err.message : err);
    if (err instanceof Error && err.stack) {
      console.error('Stack trace:', err.stack);
    }
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

function constantTimeCompare(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false;
  }
  return timingSafeEqual(Buffer.from(a), Buffer.from(b));
}