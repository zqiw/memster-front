export interface IGroup {
  id: string;
  name: string;
  contents: Array<IKnowledge>;
}

export interface IKnowledge {
  id: string;
  name: string;
  groupId: string;
}
