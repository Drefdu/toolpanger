import { UUID } from "node:crypto";

export interface Project {
  id: UUID
  title: string,
  slug: string,
  description?: string,
  created_at: string,
  updated_at: string,
  user_id: UUID
}

