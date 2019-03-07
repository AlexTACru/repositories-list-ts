import Repository from "../models/Repositories";

export enum ActionTypes {
  GET_REPOSITORIES = "[repositories] GET_REPOSITORIES",
  GET_REPOSITORIES_RECEIVE = "[repositories] GET_REPOSITORIES_RECEIVE",
}

export interface IGetRepositoriesAction {
  payload: {
    name: string,
    /*TODO: add filter language & sort*/
  };
  type: ActionTypes.GET_REPOSITORIES;
}

export interface IRepositoriesReceive {
  items: Repository[];
  incomplete_results: boolean;
  total_count: number;
}

export interface IGetRepositoriesReceiveAction {
  payload: IRepositoriesReceive;
  type: ActionTypes.GET_REPOSITORIES_RECEIVE;
}

export const getRepositories = (name: string): IGetRepositoriesAction => ({
  payload: { name },
  type: ActionTypes.GET_REPOSITORIES,
});

export const getRepositoriesReceive = (res: IRepositoriesReceive): IGetRepositoriesReceiveAction => ({
  payload: res,
  type: ActionTypes.GET_REPOSITORIES_RECEIVE,
});


export type Action = IGetRepositoriesAction | IGetRepositoriesReceiveAction;
