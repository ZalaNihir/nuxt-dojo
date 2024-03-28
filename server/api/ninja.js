export default defineEventHandler((event)=>{

    // Handle Query Params
    const { name } = useQuery(event)


    // Handle Post Data

    
    return{
        message:`Hello, ${name}`
    }


})