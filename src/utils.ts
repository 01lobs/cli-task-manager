export function generateId(): string {
    return (Date.now().toString(36)+Math.random().toString(36).substring(2,7))
}
export function formatDate(isoString:string):string{
    const date=new Date(isoString);
    return date.toLocaleDateString('en-US',{
        year:'numeric',
        month:'short',
        day:'numeric',
        hour: '2-digit',
        minute: '2-digit',
    })
}
