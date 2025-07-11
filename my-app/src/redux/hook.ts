import { useSelector } from "react-redux";
import type { RootState } from "./store";

// Correctly typed hook
export const useAppSelector = useSelector.withTypes<RootState>();
