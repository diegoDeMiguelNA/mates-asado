type NodeData = {
  uri?: string;
  [key: string]: any;
};

type Block = {
  nodeType: string;
  content: Block[];
  data: NodeData;
};

type Inline = {
  nodeType: string;
  content: Block[];
  data: NodeData;
};

export type ContentfulNode = Block | Inline;
