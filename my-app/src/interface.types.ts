export interface ITour {
  
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "High" | "Medium" | "Low";
}
export interface IUser {
  id: string;
  name: string;
}
