import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";


export const GET=async(request:NextRequest)=>{
    const users = await prisma.user.findMany({
        orderBy: {name:'asc'}
    })
    if(!users)
        return NextResponse.json('Invalid User',{status:400})
    return NextResponse.json(users,{status:200})
}