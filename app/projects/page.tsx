import HeaderPage from "@/components/header-page"
import { Plus, Search } from "lucide-react"
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group"
import { Button } from "@/components/ui/button"
import { ListProjects } from "@/components/sections"
import { AddProject } from "@/components/sections"

export default function Projects() {
  return (
    <>
      <HeaderPage title="Drefdu's projects">
        <>
          <h2 className="my-4"></h2>
          <div className="mb-5 flex w-full flex-row items-center justify-end gap-5">
            <InputGroup className="w-100">
              <InputGroupInput placeholder="Search..." />
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
            </InputGroup>
            <AddProject />
          </div>
        </>
      </HeaderPage>
      <ListProjects />
    </>
  )
}
