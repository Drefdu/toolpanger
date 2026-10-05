"use client"

import { useEffect, useState } from "react"
import EmptyState from "./empty-state"
import ProjectItem from "./project-item"
import { type Project } from "@/lib/zod"
import { EditProject } from "./edit-project"

export default function ProjectsList({ fetchProjects, projects }: { fetchProjects: (page: number, pageSize: number) => void, projects: Project[] }) {
  const [page, setPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)
  const [selectedProject, setSelectedProject] = useState<Project>({} as Project)
  const [openEditModal, setOpenEditModal] = useState<boolean>(false)

  const handleSelectedProject = (project: Project) => {
    setSelectedProject(project)
    setOpenEditModal(true)
  }

  useEffect(() => {
    fetchProjects(page, pageSize)
  }, [page, pageSize])

  return (
    <div className="mt-5 flex h-full w-full flex-col gap-2 px-6">
      <EditProject open={openEditModal} setOpen={setOpenEditModal} selectedProject={selectedProject} fetchProjects={fetchProjects} />
      {projects.length === 0 ? <EmptyState /> : (
        <>
          {
            projects.map((project: Project) => (
              <ProjectItem
                key={project.id}
                project={project}
                projectHandler={handleSelectedProject}
              />
            ))
          }
        </>
      )}
    </div>
  )
}