-- Dynamic categories table
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,            -- e.g. 'law', 'government'
  label text NOT NULL,                  -- e.g. 'Law', 'Government'
  keywords text[] NOT NULL DEFAULT '{}', -- keywords for auto-detection
  prompt text,                          -- additional system prompt guidance
  high_stakes boolean NOT NULL DEFAULT false, -- use stronger model
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Seed with existing categories
INSERT INTO categories (name, label, keywords, prompt, high_stakes, sort_order) VALUES
  ('law', 'Law', ARRAY['law','constitution','act','legal','rights','court','legislation','bill'],
   'When answering legal questions, always reference the specific Act, section, or article number. Remind the user this is informational only — not legal advice.',
   true, 1),
  ('government', 'Government', ARRAY['register','business','tax','passport','visa','permit','immigration','pacra','zra'],
   'Provide step-by-step instructions when explaining government processes. Include office locations and contact details when available.',
   true, 2),
  ('tourism', 'Tourism', ARRAY['visit','park','tourism','hotel','safari','victoria falls','travel'],
   'Be enthusiastic about Zambia''s natural beauty. Include practical travel tips when relevant.',
   false, 3),
  ('economy', 'Economy', ARRAY['gdp','inflation','economy','trade','export','import','kwacha','bank'],
   'Use the most recent data available. Always state the date/period the data refers to.',
   false, 4),
  ('culture', 'Culture', ARRAY['culture','tradition','ethnic','tribe','language','music','dance','ceremony'],
   'Celebrate Zambia''s cultural diversity. Be respectful of all ethnic groups and traditions.',
   false, 5),
  ('health', 'Health', ARRAY['health','hospital','clinic','disease','medical','doctor','hiv','malaria'],
   'Include emergency contacts when relevant. Remind users to consult healthcare professionals for medical advice.',
   true, 6),
  ('education', 'Education', ARRAY['school','university','education','exam','grade','student','teacher'],
   'Include application deadlines, requirements, and contact information when available.',
   false, 7)
ON CONFLICT (name) DO NOTHING;
