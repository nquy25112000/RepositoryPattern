import type { Knex } from 'knex'
import { Reader } from './IReader';
import { Write } from './IWrite';

type ReadRepository<T> = Reader<T>
type WriteRepository<T> = Write<T>

export abstract class KnexRepository<T> implements ReadRepository<T>, WriteRepository<T> {
    constructor(
        public readonly knex: Knex,
        public readonly tableName: string,
    ) { }
    public get qb(): Knex.QueryBuilder {
        return this.knex(this.tableName)
    }

    find(item: Partial<T>): Promise<T[]> {
        return this.qb
            .where(item)
            .select()
    }
    delete(id: string): Promise<boolean> {
        return this.qb
            .where('id', id)
            .del()
    }
    fillAll(): Promise<boolean> {
        return this.qb
            .select()
    }
}
