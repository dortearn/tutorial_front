import { Pageable } from "../page/Pageable";

export interface PaginatedData <TData>{
    content: TData[];
    pageable: Pageable;
    totalElements: number;
}
