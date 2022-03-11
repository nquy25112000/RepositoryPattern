import { KnexRepository } from '../Repository/repository'

export interface Product {
  id: string
  name: string
  count: number
  price: number
}

// now, we have all code implementation from BaseRepository
export class ProductRepository extends KnexRepository<Product> {
  // here, we can create all specific stuffs of Product Repository

}