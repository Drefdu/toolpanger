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
import { auth } from "@/lib/auth"
import { headers } from "next/headers"

export default async function Projects() {
  const session = await auth.api.getSession({
    headers: await headers()
  })
  return (
    <>
      <HeaderPage title={`${session?.user.name}'s projects`}>
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
