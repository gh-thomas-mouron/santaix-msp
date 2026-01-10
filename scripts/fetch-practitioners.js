#!/usr/bin/env node
/**
 * Script to fetch practitioners data from Google Spreadsheet
 * 
 * Usage:
 *   GOOGLE_SHEET_ID=your_sheet_id GOOGLE_SHEET_GID=your_gid node scripts/fetch-practitioners.js
 * 
 * Or set in .env file:
 *   GOOGLE_SHEET_ID=your_sheet_id
 *   GOOGLE_SHEET_GID=your_gid
 */

import { config } from 'dotenv';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env file if it exists
config();

const SHEET_ID = process.env.GOOGLE_SHEET_ID || '1KkLZegPui5GCO6ZQ3MJsP79sjTOKUsurs16h-4F_duA';
const SHEET_GID = process.env.GOOGLE_SHEET_GID || '1625347087';

async function fetchPractitioners() {
  try {
    // Export Google Sheet as CSV
    const csvUrl = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${SHEET_GID}`;
    
    console.log(`Fetching practitioners from Google Sheet...`);
    console.log(`URL: ${csvUrl}`);
    
    const response = await fetch(csvUrl);
    
    if (!response.ok) {
      if (response.status === 401 || response.status === 403) {
        throw new Error(`Access denied (${response.status}). Please make sure the Google Spreadsheet is publicly viewable. Go to Share → Change to "Anyone with the link" → Viewer.`);
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const csvText = await response.text();
    
    // Parse CSV
    const lines = csvText.split('\n').filter(line => line.trim());
    if (lines.length === 0) {
      throw new Error('No data found in spreadsheet');
    }
    
    // Parse header
    const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
    const nameIndex = headers.indexOf('name');
    const specialtyIndex = headers.indexOf('specialty');
    const pictureUrlIndex = headers.indexOf('picture_url');
    
    if (nameIndex === -1 || specialtyIndex === -1 || pictureUrlIndex === -1) {
      throw new Error('Missing required columns: name, specialty, picture_url');
    }
    
    // Parse data rows
    const practitioners = [];
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      // Handle CSV with potential commas in quoted fields
      // Simple CSV parser - handles quoted fields
      const values = [];
      let current = '';
      let inQuotes = false;
      
      for (let j = 0; j < line.length; j++) {
        const char = line[j];
        const nextChar = line[j + 1];
        
        if (char === '"') {
          if (inQuotes && nextChar === '"') {
            // Escaped quote
            current += '"';
            j++; // Skip next quote
          } else {
            // Toggle quote state
            inQuotes = !inQuotes;
          }
        } else if (char === ',' && !inQuotes) {
          values.push(current.trim());
          current = '';
        } else {
          current += char;
        }
      }
      values.push(current.trim());
      
      const name = values[nameIndex]?.trim();
      const specialty = values[specialtyIndex]?.trim();
      const pictureUrl = values[pictureUrlIndex]?.trim();
      
      if (name && specialty) {
        // Generate slug from name
        const slug = name
          .toLowerCase()
          .replace(/dr\.?\s*/gi, '')
          .replace(/[^a-z0-9]+/g, '_')
          .replace(/^_+|_+$/g, '');
        
        practitioners.push({
          name,
          specialty,
          pictureUrl: pictureUrl || '',
          slug
        });
      }
    }
    
    console.log(`✓ Found ${practitioners.length} practitioners`);
    
    // Save to JSON file
    const outputPath = join(__dirname, '..', 'src', 'data', 'practitioners.json');
    const outputDir = join(__dirname, '..', 'src', 'data');
    
    // Create data directory if it doesn't exist
    try {
      await import('fs/promises').then(fs => fs.mkdir(outputDir, { recursive: true }));
    } catch (e) {
      // Directory might already exist
    }
    
    writeFileSync(outputPath, JSON.stringify(practitioners, null, 2), 'utf-8');
    console.log(`✓ Saved practitioners data to ${outputPath}`);
    
    return practitioners;
  } catch (error) {
    console.error('Error fetching practitioners:', error.message);
    process.exit(1);
  }
}

fetchPractitioners();
