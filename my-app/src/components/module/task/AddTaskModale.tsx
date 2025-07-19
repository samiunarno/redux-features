"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
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
import { format } from "date-fns";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { addtour } from "@/redux/feature/tour/tourslice";
import { v4 as uuidv4 } from "uuid";

const formSchema = z.object({
  bookName: z.string().min(1, "Book name is required"),
  writer: z.string().min(1, "Writer name is required"),
  publicationDate: z.date().optional(),
  description: z.string().min(1, "Description is required"),
  priority: z.enum(["Low", "Medium", "High"]),
});

type FormData = z.infer<typeof formSchema>;

export function AddTaskModal() {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const dispatch = useDispatch();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bookName: "",
      writer: "",
      publicationDate: undefined,
      description: "",
      priority: "Medium",
    },
  });

  const onSubmit = (data: FormData) => {
    const newTask = {
      id: uuidv4(),
      ...data,
      publicationDate: data.publicationDate
        ? format(data.publicationDate, "dd/MM/yyyy")
        : "No date selected",
      completed: false, // ✅ Required by ITour type
    };

    console.log("Submitted Data", newTask);

    dispatch(addtour(newTask));
    form.reset();
  };

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
                    <Input
                      placeholder="Enter book name"
                      {...field}
                      className="w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-transparent dark:text-white dark:focus:ring-blue-400"
                    />
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
                    <Input
                      placeholder="Enter writer's name"
                      {...field}
                      className="w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-transparent dark:text-white dark:focus:ring-blue-400"
                    />
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
                          className={`w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-transparent dark:text-white dark:focus:ring-blue-400 ${!field.value ? "text-gray-400" : "text-black dark:text-white"}`}
                          type="button"
                        >
                          {field.value ? format(field.value, "PPP") : "Select date"}
                        </Button>
                        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                          <svg
                            className="w-4 h-4 text-black dark:text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
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
                      placeholder="Enter description"
                      className="w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-transparent dark:text-white dark:focus:ring-blue-400"
                      rows={4}
                      {...field}
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
        <div className="relative">
          <select
            {...field}
            className={`appearance-none w-full rounded-md border border-gray-300 bg-transparent text-black px-3 py-2 text-sm 
              focus:outline-none focus:ring-2 focus:ring-blue-500
              dark:border-gray-700 dark:bg-black dark:text-white dark:focus:ring-blue-400
              ${!field.value ? "text-gray-400 dark:text-gray-500" : ""}
            `}
          >
            <option value="" disabled hidden>
              Select priority
            </option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <svg
              className="w-4 h-4 text-black dark:text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </FormControl>
    </FormItem>
  )}
/>


            {/* Footer */}
            <DialogFooter className="flex justify-center gap-x-4">
              <DialogClose asChild>
                <Button type="button" variant="outline" className="px-6 py-6 h-8 w-[100px] text-base mt-4">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" className="px-6 py-6 h-8 w-[100px] text-base mt-4">
                Submit
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
} 
