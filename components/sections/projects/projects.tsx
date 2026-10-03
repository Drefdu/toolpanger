"use client"

import { useEffect, useState } from "react"
import EmptyState from "./empty-state"
import ProjectItem from "./project-item"
import { type Project } from "@/lib/zod"

export default function ProjectsList({ projectsHandler, projects }: { projectsHandler: (projects: Project[]) => void, projects: Project[] }) {
  const [page, setPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/v1/projects")
      const data = await response.json()
      projectsHandler(data.data || [])
    }

    fetchData()
  }, [page, pageSize])

  return (
    <div className="mt-5 flex h-full w-full flex-col gap-2 px-6">
      {projects.length === 0 ? <EmptyState /> : (
        <>
          {
            projects.map((project: Project) => (
              <ProjectItem
                key={project.id}
                title={project.title}
                slug={project.slug}
                description={project.description}
              />
            ))
          }
        </>
      )}
    </div>
  )
}