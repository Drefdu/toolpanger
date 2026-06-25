# POSTGREST SCHEMAS;

CREATE TABLE Links (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  slug character(60) NOT NULL UNIQUE,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  title character(60),
  description character(120),
  url character varying,
  image_url character varying,
  tags TEXT[],
  CONSTRAINT Links_pkey PRIMARY KEY (id)
);
