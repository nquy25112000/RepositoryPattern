export interface Reader<T> {

    find(item: Partial<T>): Promise<T[]>
    delete(id: string): Promise<boolean>

}
