'use client';

import HeaderPage from "@/components/header-page"
import { Plus, Search } from "lucide-react"
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group"
import { AddProject } from "@/components/sections"
import { useState } from "react"
import { type Project } from "@/lib/zod"
import ProjectsList from "@/components/sections/projects/projects";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])

  const addProjectHandler = (project: Project) => {
    setProjects([...projects, project])
  }

  const setProjectsHandler = (projects: Project[]) => {
    setProjects(projects)
  }

  const fetchProjects = async (page: number, pageSize: number) => {
    const response = await fetch(`/api/v1/projects?page=${page}&pageSize=${pageSize}`)
    const data = await response.json()
    setProjects(data.data || [])
  }

  return (
    <>
      <HeaderPage>
        <>
          <h2 className="my-4"></h2>
          <div className="mb-5 flex w-full flex-row items-center justify-end gap-5">
            <InputGroup className="w-100">
              <InputGroupInput placeholder="Search..." />
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
            </InputGroup>
            <AddProject projectsHandler={addProjectHandler} />
          </div>
        </>
      </HeaderPage>
      <ProjectsList projects={projects} fetchProjects={fetchProjects}  />
    </>
  )
}
