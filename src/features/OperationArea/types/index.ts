export interface OperationArea {
  _id: string;
  title: string;
  category: string;
  description: string;
  image: {
    asset: {
      _id: string;
      url: string;
    };
  };
  content: any[];
  highlight: boolean;
  order: number;
}
