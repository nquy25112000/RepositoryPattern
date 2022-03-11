export interface Write<T> {
    fillAll(messager: string): Promise<boolean>
}