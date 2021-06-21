import express from "express";

const app = express();

/*
    -- METODOS --
    GET    => Buscar uma informação
    POST   => Incluir uma informação
    PUT    => Alterar uma informação
    DELETE => Remover um dado
    PATCH  => Alterar uma informação especifica
*/

app.get("/test", (request, response) => {
    // Request  => Informação recebida do Servidor
    // Response => Informação retornada pelo Servidor

    return response.send("Olá NLW => GET")
})

app.post("/test-post", (request, response) => {
    return response.send("Olá NLW => POST")
})

app.listen(8083, () => {
    console.log(`Server is running at port: 3000`);
})