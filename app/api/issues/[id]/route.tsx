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