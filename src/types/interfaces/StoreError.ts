export interface StoreError extends Error{
    'statusCode' : number,
    'message' : string
}