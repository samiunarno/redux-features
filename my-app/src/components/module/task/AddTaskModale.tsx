
import * as React from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form"
import { ChevronDownIcon } from "lucide-react"
import { format } from "date-fns"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
  bookName: z.string().min(1, "Book name is required"),
  writer: z.string().min(1, "Writer name is required"),
  publicationDate: z.date().optional(),
})

type FormData = z.infer<typeof formSchema>

export function AddTaskModal() {
  const [calendarOpen, setCalendarOpen] = useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bookName: "",
      writer: "",
      publicationDate: undefined,
    },
  })

  const onSubmit = (data: FormData) => {
    console.log("📘 Submitted data:", {
      ...data,
      publicationDate: data.publicationDate
        ? format(data.publicationDate, "dd/MM/yyyy")
        : "No date selected",
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Add Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <DialogHeader>
              <DialogTitle>Add a New Book</DialogTitle>
              <DialogDescription>
                Fill in the details and submit.
              </DialogDescription>
            </DialogHeader>

            {/* Book Name */}
            <FormField
              control={form.control}
              name="bookName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Book Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter book name" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Writer */}
            <FormField
              control={form.control}
              name="writer"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Writer</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter writer's name" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Publication Date */}
            <FormField
              control={form.control}
              name="publicationDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Publication Date</FormLabel>
                  <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={`w-full justify-between text-left ${
                          !field.value ? "text-muted-foreground" : ""
                        }`}
                        type="button"
                      >
                        {field.value
                          ? format(field.value, "PPP")
                          : "Select date"}
                        <ChevronDownIcon className="ml-2 h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(date) => {
                          field.onChange(date)
                          setCalendarOpen(false)
                        }}
                        captionLayout="dropdown"
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />

            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
