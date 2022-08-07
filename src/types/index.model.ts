export type TService = {
    title:string,
    child: TChildService[]
}

export type TChildService = {
    title?: string,
    path: string,
    width?:string,
    rows?: number,
    cols?: number,
}