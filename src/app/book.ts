export interface IBook {
  books:Array<Books>
}
export interface Books {
    title: string,
    subtitle: string,
    isbn13: string,
    price: string,
    image: string,
    url: string
}
