export default interface Book {
  id: number;
  attributes: {
    title: string;
    description: string;
    rating: number;
    publicationYear: number;
    author: string;
  };
}
