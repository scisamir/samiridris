export type ProjectGroup = 'Blockchain' | 'DevOps' | 'Biotech' | 'Misc';

export interface ProjectProps {
    image_src?: string,
    p_head: string,
    project_type?: ProjectGroup,
    category?: string,
    description: string,
    tools: string[]
    site_link?: string
    github_link?: string
}
