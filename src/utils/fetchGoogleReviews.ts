/**
 * Fetch Google Maps reviews and rating
 * This runs at build time to fetch the latest rating
 */

export interface GooglePlaceRating {
  rating: number;
  user_ratings_total: number;
  place_id?: string;
}

/**
 * Fetch Google Place rating using the Place ID
 * Note: This requires a Google Places API key
 * For a simpler solution without API key, you can manually update the rating
 */
export async function fetchGooglePlaceRating(
  placeId: string,
  apiKey?: string
): Promise<GooglePlaceRating | null> {
  if (!apiKey) {
    console.warn('Google Places API key not provided, using fallback');
    return null;
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === 'OK' && data.result) {
      return {
        rating: data.result.rating || 0,
        user_ratings_total: data.result.user_ratings_total || 0,
        place_id: placeId,
      };
    }

    return null;
  } catch (error) {
    console.error('Error fetching Google Place rating:', error);
    return null;
  }
}

/**
 * Extract Place ID from Google Maps URL
 */
export function extractPlaceIdFromUrl(url: string): string | null {
  // Try to extract from various Google Maps URL formats
  const patterns = [
    /place_id=([^&]+)/,
    /maps\.app\.goo\.gl\/[^/]+/,
    /maps\.google\.com\/.*cid=([^&]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      return match[1];
    }
  }

  return null;
}

