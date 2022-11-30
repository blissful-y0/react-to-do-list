import { atom } from "jotai";
import { TodoCard } from "../types/todo";

export const todoAtom = atom<TodoCard[]>([]);
