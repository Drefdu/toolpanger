"use client"

import HeaderPage from "@/components/HeaderPage";
import { BadgeCheckIcon, ChevronRightIcon, Plus, Search, Trash } from "lucide-react"
import { ChevronDownIcon, EllipsisVertical } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { InputGroup, InputGroupInput, InputGroupAddon } from "@/components/ui/input-group";

export default function Workspaces() {
    return (
        <>
            <HeaderPage title="Workspaces">
                <> 
                    <h2 className="my-4">Drefdu's Worskspaces</h2>
                    <div className="flex flex-row gap-5 items-center justify-end mb-5">
                        <InputGroup className="w-100">
                        <InputGroupInput placeholder="Search..." />
                        <InputGroupAddon>
                            <Search />
                        </InputGroupAddon>
                        </InputGroup>
                        <Button>
                            <span className="text-[12px]">New Tool</span>
                            <Plus />    
                        </Button>
                    </div> 
                </>
            </HeaderPage>
            <div className="px-5 mt-5">         
                <div className="flex flex-col gap-2 px-20">    
                    <Item variant="outline">
                        <ItemContent>
                        <ItemTitle>
                            Presta Prenda
                        </ItemTitle>
                        <ItemDescription>
                            Updated 2 days ago
                        </ItemDescription>
                        </ItemContent>
                        <ItemActions>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">
                                    <EllipsisVertical/>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-48" align="end">
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <Item size="xs" className="w-full p-2">
                                            <ItemContent className="gap-0 flex flex-row justify-between">
                                            <ItemTitle>
                                                <span>
                                                    edit
                                                </span>
                                            </ItemTitle>
                                           
                                            </ItemContent>
                                        </Item>
                                    </DropdownMenuItem>

                                    <DropdownMenuItem>
                                        <Item size="xs" className="w-full p-2">
                                            <ItemContent className="gap-0 flex flex-row justify-between">
                                            <ItemTitle>
                                                <span className="text-red-500">
                                                    delete
                                                </span>
                                            </ItemTitle>
                                            <Trash className="text-red-500"/>
                                            </ItemContent>
                                        </Item>
                                    </DropdownMenuItem>

                                     

                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                            </DropdownMenu>
                        </ItemActions>
                    </Item>
                    <Item variant="outline">
                        <ItemContent>
                        <ItemTitle>Basic Item</ItemTitle>
                        <ItemDescription>
                            A simple item with title and description.
                        </ItemDescription>
                        </ItemContent>
                        <ItemActions>
                        <Button variant="outline" size="sm">
                            Action
                        </Button>
                        </ItemActions>
                    </Item>
                    <Item variant="outline">
                        <ItemContent>
                        <ItemTitle>Basic Item</ItemTitle>
                        <ItemDescription>
                            A simple item with title and description.
                        </ItemDescription>
                        </ItemContent>
                        <ItemActions>
                        <Button variant="outline" size="sm">
                            Action
                        </Button>
                        </ItemActions>
                    </Item>
                    <Item variant="outline">
                        <ItemContent>
                        <ItemTitle>Basic Item</ItemTitle>
                        <ItemDescription>
                            A simple item with title and description.
                        </ItemDescription>
                        </ItemContent>
                        <ItemActions>
                        <Button variant="outline" size="sm">
                            Action
                        </Button>
                        </ItemActions>
                    </Item>
                    <Item variant="outline">
                        <ItemContent>
                        <ItemTitle>Basic Item</ItemTitle>
                        <ItemDescription>
                            A simple item with title and description.
                        </ItemDescription>
                        </ItemContent>
                        <ItemActions>
                        <Button variant="outline" size="sm">
                            Action
                        </Button>
                        </ItemActions>
                    </Item>
                    <Item variant="outline">
                        <ItemContent>
                        <ItemTitle>Basic Item</ItemTitle>
                        <ItemDescription>
                            A simple item with title and description.
                        </ItemDescription>
                        </ItemContent>
                        <ItemActions>
                        <Button variant="outline" size="sm">
                            Action
                        </Button>
                        </ItemActions>
                    </Item>
                    <Item variant="outline">
                        <ItemContent>
                        <ItemTitle>Basic Item</ItemTitle>
                        <ItemDescription>
                            A simple item with title and description.
                        </ItemDescription>
                        </ItemContent>
                        <ItemActions>
                        <Button variant="outline" size="sm">
                            Action
                        </Button>
                        </ItemActions>
                    </Item>
                    <Item variant="outline">
                        <ItemContent>
                        <ItemTitle>Basic Item</ItemTitle>
                        <ItemDescription>
                            A simple item with title and description.
                        </ItemDescription>
                        </ItemContent>
                        <ItemActions>
                        <Button variant="outline" size="sm">
                            Action
                        </Button>
                        </ItemActions>
                    </Item>
                    <Item variant="outline">
                        <ItemContent>
                        <ItemTitle>Basic Item</ItemTitle>
                        <ItemDescription>
                            A simple item with title and description.
                        </ItemDescription>
                        </ItemContent>
                        <ItemActions>
                        <Button variant="outline" size="sm">
                            Action
                        </Button>
                        </ItemActions>
                    </Item>
                </div>
            </div>
        </>
    )
}