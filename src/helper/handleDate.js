export default function handleNewDate(){
    return new Date().toISOString().slice(0, 10)
}

