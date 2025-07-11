import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";

// Correctly typed hook
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = () => useDispatch<AppDispatch>();
