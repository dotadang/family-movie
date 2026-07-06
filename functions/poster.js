export async function onRequest({ request }) {
  const url = new URL(request.url);
  const src = url.searchParams.get('src') || '';

  let target;
  try {
    target = new URL(src);
  } catch (e) {
    return new Response('Bad poster URL', { status: 400 });
  }

  const allowed = target.protocol === 'https:' &&
    target.hostname === 'image.tmdb.org' &&
    target.pathname.startsWith('/t/p/');

  if (!allowed) {
    return new Response('Poster host not allowed', { status: 403 });
  }

  const upstream = await fetch(target.toString(), {
    headers: {
      'User-Agent': 'family-movie-share-poster'
    },
    cf: {
      cacheTtl: 60 * 60 * 24 * 30,
      cacheEverything: true
    }
  });

  if (!upstream.ok) {
    return new Response('Poster unavailable', { status: upstream.status });
  }

  const headers = new Headers();
  const type = upstream.headers.get('content-type') || 'image/jpeg';
  headers.set('Content-Type', type);
  headers.set('Cache-Control', 'public, max-age=2592000, immutable');
  headers.set('Access-Control-Allow-Origin', '*');

  return new Response(upstream.body, {
    status: 200,
    headers
  });
}
