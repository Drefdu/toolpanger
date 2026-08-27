import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"
import {
  Field,
  FieldDescription,
  // FieldDescription,
  FieldGroup,
  FieldLabel,
  // FieldLegend,
  // FieldSeparator,
  // FieldSet,
} from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
export function AddResource() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <span className="text-[12px]">New resouce</span>
          <Plus />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>New Resource</SheetTitle>
          <SheetDescription>
            Create a new resource inside this project. Click save when
            you&apos;re done. you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <form className="grid flex-1 auto-rows-min gap-6 px-4">
          <FieldGroup>
            <div className="grid gap-3">
              <Label htmlFor="resource-title">Title</Label>
              <Input id="resource-title" placeholder="example" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="resource-url">Url</Label>
              <Input id="resource-url" placeholder="https://example.com" />
            </div>

            <Field>
              <FieldLabel htmlFor="resource-description">
                Description
              </FieldLabel>
              <Textarea
                id="resource-description"
                placeholder="Description..."
                className="resize-none"
              />
            </Field>

            <div className="grid gap-3">
              <Label htmlFor="resource-imgae">Image</Label>
              <Input
                id="resource-image"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="grid gap-3">
              <Label htmlFor="resource-tags">Tags</Label>
              <FieldDescription>There is no tags to show</FieldDescription>
              <div className="my-3"></div>
              <Field orientation="horizontal">
                <Input id="resource-tags" placeholder="Tag" />
                <Button variant="outline" type="button">
                  <Plus />
                </Button>
              </Field>
            </div>
          </FieldGroup>
        </form>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
