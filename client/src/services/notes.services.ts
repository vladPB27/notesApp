const baseUrl = 'http://localhost:5000'

interface Note {
    title: String,
    description: String,
}

export async function addNote(formValues:Note) {
    try {
        const res = await fetch(`${baseUrl}/addNote`,{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formValues)
        })
    } catch (error) {
        console.log(error);
        
    }
}