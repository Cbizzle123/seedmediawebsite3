/*
  # Add status column to contacts table

  1. Changes
    - Add `status` column to `contacts` table with default value 'new'
*/

ALTER TABLE contacts ADD COLUMN IF NOT EXISTS status text DEFAULT 'new';