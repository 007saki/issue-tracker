import { issueSchema } from "@/app/issueSchema";
import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";



export const DELETE=async(request:NextRequest,{params}:{params:Promise<{id:string}>})=>{
        try {
            const deletedIssue = await prisma.issue.delete({
                where:{id:parseInt((await params).id)}
            })
            return NextResponse.json(deletedIssue,{status:200})
        } catch (error) {
            NextResponse.json(error,{status:404})
        }

}

export const PATCH=async(request:NextRequest,{params}:{params:Promise<{id:string}>})=>{
    const body = await request.json()
    //validate
    const validate = issueSchema.safeParse(body)
    if(!validate.success)
        return NextResponse.json(validate.error.errors,{status:400})
    //find unique
    const issue = await prisma.issue.findUnique({where:{id:parseInt((await params).id)}})
    //update issue
    const updatedIssue = await prisma.issue.update({
        where:{id:issue?.id},
        data:{title: body.title, description: body.description}
    })
    return NextResponse.json(updatedIssue,{status:201})

}