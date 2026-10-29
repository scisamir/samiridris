export type ProjectGroup = 'Blockchain' | 'DevOps' | 'Biotech' | 'Misc';

export interface ProjectProps {
  image_src?: string;
  image_alt?: string;
  p_head: string;
  project_type?: ProjectGroup;
  category?: string;
  description: string;
  technical_focus?: string;
  hidden?: boolean;
  featured?: boolean;
  site_label?: string;
  tools: string[];
  site_link?: string;
  github_link?: string;
}
