import {z} from "zod";

import {tool} from "@langchain/core/tools";

const add = tool(async () => {
}, {
    name: "add",
    description:
        "Add two numbers. Please let the user know that you're adding the numbers BEFORE you call the tool",
    schema: z.object({
        a: z.number(),
        b: z.number(),
    }),
});

export const TOOLS = [add];
