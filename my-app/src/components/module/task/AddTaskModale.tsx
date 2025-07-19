"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 as uuidv4 } from "uuid";

import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { addtour } from "@/redux/feature/tour/tourslice";

// UI Components
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";

const formSchema = z.object({
  bookName: z.string().min(1, "Book name is required"),
  writer: z.string().min(1, "Writer name is required"),
  publicationDate: z.date().optional(),
  description: z.string().min(1, "Description is required"),
  priority: z.enum(["Low", "Medium", "High"]),
  assignTo: z.string().min(1, "Please assign to a user"),
});

type FormData = z.infer<typeof formSchema>;

export function AddTaskModal() {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user.users);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bookName: "",
      writer: "",
      publicationDate: undefined,
      description: "",
      priority: "Medium",
      assignTo: "",
    },
  });

  const onSubmit = (data: FormData) => {
    const newTask = {
      id: uuidv4(),
      title: data.bookName,
      description: data.description,
      dueDate: data.publicationDate
        ? format(data.publicationDate, "dd/MM/yyyy")
        : "No date selected",
      priority: data.priority,
      assignedTo: data.assignTo, // user id
      isCompleted: false,
    };

    dispatch(addtour(newTask));
    form.reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Add Book Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <DialogHeader>
              <DialogTitle>Add a New Book</DialogTitle>
              <DialogDescription>Fill in the details and submit.</DialogDescription>
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
                      <div className="relative">
                        <Button
                          variant="outline"
                          type="button"
                          className={`w-full ${!field.value ? "text-gray-400" : ""}`}
                        >
                          {field.value ? format(field.value, "PPP") : "Select date"}
                        </Button>
                        <div className="pointer-events-none absolute right-3 top-2.5">
                          <svg
                            className="w-4 h-4 text-black dark:text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(date) => {
                          field.onChange(date);
                          setCalendarOpen(false);
                        }}
                        captionLayout="dropdown"
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <textarea
                      {...field}
                      placeholder="Enter description"
                      className="w-full rounded-md border px-3 py-2"
                      rows={4}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Priority */}
            <FormField
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Priority</FormLabel>
                  <FormControl>
                    <select {...field} className="w-full rounded-md border px-3 py-2">
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </select>
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Assign To */}
            <FormField
              control={form.control}
              name="assignTo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Assign To</FormLabel>
                  <FormControl>
                    <select {...field} className="w-full rounded-md border px-3 py-2">
                      <option value="">Select user</option>
                      {users.map((user) => (
                        <option key={user.id} value={user.id}>
                          {user.name}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Footer */}
            <DialogFooter className="flex justify-center gap-x-4">
              <DialogClose asChild>
                <Button type="button" variant="outline" className="w-[100px]">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" className="w-[100px]">
                Submit
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
