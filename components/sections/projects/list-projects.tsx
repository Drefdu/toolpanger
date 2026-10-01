"use client"

import { useEffect, useState } from "react"
import ProjectItem from "./project-item"

interface Project {
  id: string
  title: string
  slug: string
  description: string
}

export function ListProjects() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/v1/projects")
      const data = await response.json()
      setProjects(data.data || [])
    }

    fetchData()
  }, [])

  return (
    <div className="mt-5 flex h-full w-full flex-col gap-2 px-6">
      {projects.length !== 0 ? (
        projects.map((project: Project) => (
          <ProjectItem
            key={project.id}
            title={project.title}
            slug={project.slug}
            description={project.description}
          />
        ))
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center text-neutral-500">
          There are no projects to show
        </div>
      )}
    </div>
  )
}
