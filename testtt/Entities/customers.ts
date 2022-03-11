import { KnexRepository } from '../Repository/repository'

export interface Customers {
    id: string
    name: string
}

// now, we have all code implementation from BaseRepository
export class CustomersRepository extends KnexRepository<Customers> {
    //VIẾT CHỖ ĐÂY NÈ PHẢI K ANH, VÍ DỤ NHƯ KHÔNG CÓ CÁI NÀO DÙNG CHUNG THÌ VIẾT RIÊNG Ở ĐÂY PHẢI K ANH

}

