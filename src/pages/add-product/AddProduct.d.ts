// #export Add Product types here
declare namespace AddProductTypes {
  export interface Iprops {
    children: React.ReactElement;
  }
  export interface AddProductReqBody {
    name: string;
    price: number;
    category: string;
    description: string;
    avatar: string;
    developerEmail?: string;
  }
}
export { AddProductTypes };
