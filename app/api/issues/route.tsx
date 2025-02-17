import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { issueSchema } from "../../issueSchema";


export const POST=async(request:NextRequest)=>{
    const body = await request.json()
    //validate using zod
    const validate = issueSchema.safeParse(body)
    if(!validate.success)
        return NextResponse.json(validate.error.errors,{status:400})
    const newIssue = await prisma.issue.create({
        data:{title:body.title, description:body.description}
    })

    return NextResponse.json(newIssue,{status:201})
}