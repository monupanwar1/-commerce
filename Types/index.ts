type Categroy{
  id:number;
  name:string;
  image:string
}

export type Product ={
  id:number;
  title:string;
  price:number;
  description:string;
  category:Categroy;
  image:string[];
}