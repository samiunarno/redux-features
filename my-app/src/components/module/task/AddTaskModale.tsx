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

export function AddTaskModal() {
  const [formData, setFormData] = useState({
    bookName: "",
    isbn: "",
    writer: "",
    copies: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("📘 Submitted data:", formData)
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
              <Label htmlFor="isbn">ISBN</Label>
              <Input
                id="isbn"
                name="isbn"
                placeholder="Enter ISBN number"
                value={formData.isbn}
                onChange={handleChange}
              />
            </div>

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
