import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const tasksRouter = createTRPCRouter({
  createTask: publicProcedure
    .input(
      z.object({
        taskName: z.string().min(1),
        status: z.enum(["DONE", "ON_PROGRESS", "NOT_STARTED"]),
        priority: z.enum(["LOW", "MEDIUM", "HIGH"]),
        summary: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.task.create({
        data: {
          taskName: input.taskName,
          status: input.status,
          priority: input.priority,
          summary: input.summary,
        },
      });
    }),

  getTasks: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.task.findMany();
  }),

  updateTask: protectedProcedure
    .input(
      z.object({
        taskId: z.string(),
        // Add other required fields for updates
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // Logic to update an existing task in the database
      // Example: await ctx.db.task.update({ where: { id: input.taskId }, data: { ... } });
    }),

  deleteTask: protectedProcedure
    .input(
      z.object({
        taskId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // Logic to delete a task from the database
      // Example: await ctx.db.task.delete({ where: { id: input.taskId } });
    }),
});
