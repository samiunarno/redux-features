"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Calendar } from "@/components/ui/calender"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ChevronDownIcon } from "lucide-react"

export function AddTaskModal() {
  const [formData, setFormData] = useState({
    bookName: "",
    isbn: "",
    writer: "",
    copies: "",
    description: "",
    publicationDate: undefined as Date | undefined,
  })

  const [calendarOpen, setCalendarOpen] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  console.log("📘 Submitted data:", {
    ...formData,
    publicationDate:
      formData.publicationDate?.toLocaleDateString() || "No date selected",
  })
}


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Add Task</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handleSubmit} className="space-y-6">
          <DialogHeader>
            <DialogTitle>Add a New Book</DialogTitle>
            <DialogDescription>
              Fill in the details below and click submit to add the book.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            {/* Book Name */}
            <div className="grid gap-2">
              <Label htmlFor="bookName">Book Name</Label>
              <Input
                id="bookName"
                name="bookName"
                placeholder="Enter book name"
                value={formData.bookName}
                onChange={handleChange}
              />
            </div>

            


            <div className="grid gap-2">
  <Label htmlFor="description">Description</Label>
  <textarea
    id="description"
    name="description"
    placeholder="Enter description here..."
    value={formData.description}
    onChange={handleChange}
    rows={4}
    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
  />
</div>


            {/* ISBN */}
            <div className="grid gap-2">
              <Label htmlFor="isbn">ISBN</Label>
              <Input
                id="isbn"
                name="isbn"
                placeholder="Enter ISBN number"
                value={formData.isbn}
                onChange={handleChange}
              />
            </div>

            {/* Writer */}
            <div className="grid gap-2">
              <Label htmlFor="writer">Writer</Label>
              <Input
                id="writer"
                name="writer"
                placeholder="Enter writer's name"
                value={formData.writer}
                onChange={handleChange}
              />
            </div>

            {/* Number of Copies */}
            <div className="grid gap-2">
              <Label htmlFor="copies">Number of Copies</Label>
              <Input
                id="copies"
                name="copies"
                type="number"
                placeholder="Enter number of copies"
                value={formData.copies}
                onChange={handleChange}
              />
            </div>

            {/* Publication Date - Calendar Field */}
            <div className="grid gap-2">
              <Label htmlFor="publicationDate">Publication Date</Label>
              <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                <PopoverTrigger asChild open={calendarOpen} onOpenChange={setCalendarOpen}>
                  <Button
                    variant="outline"
                    id="publicationDate"
                    className="w-48 justify-between font-normal"
                    type="button"
                  >
                    {formData.publicationDate
                      ? formData.publicationDate.toLocaleDateString()
                      : "Select date"}
                    <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent open={calendarOpen} className="w-auto overflow-hidden p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={formData.publicationDate}
                    captionLayout="dropdown"
                    onSelect={(date) => {
                      setFormData((prev) => ({ ...prev, publicationDate: date }))
                      setCalendarOpen(false)
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
