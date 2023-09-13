import { Axios } from "../../app/shared/config/axios";
import { validateArray, validateObject } from "../../utils/zod/validator";
import {
  todoResponseSchema,
  todoResponseSchemaArray
} from "./validators/schema";
import { TodoResponseDTO } from "./dto/todo.dto";

export const TodoApi = {
  async all(): Promise<{ data: TodoResponseDTO[] }> {
    return new Promise(async resolve => {
      setTimeout(async () => {
        const res = await Axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        // validate
        const validRes = await validateArray(todoResponseSchemaArray, res.data);
        // map
        const boundaries = {
          bottom: Math.floor(Math.random() * 10),
          top: 10 + Math.floor(Math.random() * 20)
        };
        resolve({
          data: validRes.slice(boundaries.bottom, boundaries.top)
        });
      }, 2000);
    });
  },

  async get(filter: { id: number }): Promise<{ data: TodoResponseDTO }> {
    const res = await Axios.get(
      `https://jsonplaceholder.typicode.com/todos/${filter.id}`
    );
    const validRes = await validateObject(todoResponseSchema, res.data);
    return {
      data: validRes
    };
  },

  async create(): Promise<void> {
    return;
  }
};
