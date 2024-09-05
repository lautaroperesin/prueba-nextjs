import { fixture } from "./data";

export async function GET(){
    return Response.json(fixture);
}

export async function POST(request){
    const partido = await request.json();

    const nuevoPartido = {
        id: fixture.length + 1,
        partido: partido.partido
    }

    fixture.push(nuevoPartido);

    return new Response(JSON.stringify(nuevoPartido), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 200
    });
}