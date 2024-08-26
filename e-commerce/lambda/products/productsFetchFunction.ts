import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from "aws-lambda";

export async function handler(event: APIGatewayProxyEvent,
    context: Context) : Promise<APIGatewayProxyResult> {

        const method = event.httpMethod
        if (event.resource === "/products") {
            if (method === "GET") {
                console.log('GET method for products')

                return {
                    statusCode: 200,
                    body: JSON.stringify({
                        message: "GET products - OK"
                    })
                }
            }
        }

        return  {
            statusCode: 400,
            body: JSON.stringify({
                message: "Bad request"
            })
        }
    }