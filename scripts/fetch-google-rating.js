#!/usr/bin/env node
/**
 * Script to fetch Google Maps rating and update environment variables
 * 
 * Usage:
 *   GOOGLE_PLACES_API_KEY=your_key GOOGLE_PLACE_ID=your_place_id node scripts/fetch-google-rating.js
 * 
 * Or set in .env file:
 *   GOOGLE_PLACES_API_KEY=your_key
 *   GOOGLE_PLACE_ID=your_place_id
 */

import { config } from 'dotenv';
import { writeFileSync, readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env file if it exists
config();

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACE_ID;

if (!API_KEY || !PLACE_ID) {
  console.error('Error: GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID must be set');
  console.error('Set them in .env file or as environment variables');
  process.exit(1);
}

async function fetchRating() {
  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=rating,user_ratings_total&key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === 'OK' && data.result) {
      const rating = data.result.rating || 0;
      const count = data.result.user_ratings_total || 0;
      
      console.log(`✓ Rating: ${rating.toFixed(1)}`);
      console.log(`✓ Reviews: ${count}`);
      
      // Update .env file
      const envPath = join(__dirname, '..', '.env');
      let envContent = '';
      
      if (existsSync(envPath)) {
        envContent = readFileSync(envPath, 'utf-8');
      }
      
      // Update or add GOOGLE_RATING and GOOGLE_RATING_COUNT
      const lines = envContent.split('\n');
      let ratingLineIndex = -1;
      let countLineIndex = -1;
      
      lines.forEach((line, index) => {
        if (line.startsWith('GOOGLE_RATING=')) {
          ratingLineIndex = index;
        }
        if (line.startsWith('GOOGLE_RATING_COUNT=')) {
          countLineIndex = index;
        }
      });
      
      if (ratingLineIndex >= 0) {
        lines[ratingLineIndex] = `GOOGLE_RATING=${rating}`;
      } else {
        lines.push(`GOOGLE_RATING=${rating}`);
      }
      
      if (countLineIndex >= 0) {
        lines[countLineIndex] = `GOOGLE_RATING_COUNT=${count}`;
      } else {
        lines.push(`GOOGLE_RATING_COUNT=${count}`);
      }
      
      writeFileSync(envPath, lines.join('\n'));
      console.log(`✓ Updated .env file`);
      
      return { rating, count };
    } else {
      console.error('Error:', data.status, data.error_message || '');
      return null;
    }
  } catch (error) {
    console.error('Error fetching rating:', error);
    return null;
  }
}

fetchRating();

