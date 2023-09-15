export interface IBasePageable {
  limit: number;
  totalPages: number;
  numberOfElements: number;
  totalElements: number;
}

export interface IBaseResponse<T> {
  code: number;
  message: string;
  data?: T;
  success: boolean;
  paginate?: IBasePageable;
}
