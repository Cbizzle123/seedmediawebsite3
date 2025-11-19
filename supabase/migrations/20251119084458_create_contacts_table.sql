/*
  # Create contacts table for Edge Function compatibility

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `company` (text, optional)
      - `message` (text)
      - `created_at` (timestamptz)
  
  2. Security
    - Enable RLS on `contacts` table
    - Add policy for service role access only (since Edge Function writes to it)
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can insert contacts"
  ON contacts
  FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Service role can read contacts"
  ON contacts
  FOR SELECT
  TO service_role
  USING (true);