interface INode {
    id: number;
    name: string;
}
interface IArea {
    country?: INode;
    province?: INode;
    city?: INode;
    district?: INode;
    address?: string;
}
export declare function formatArea(area: IArea, options?: {
    simplify: boolean;
}): string;
export declare function formatProvince(name: string): any;
export declare function formatCity(name: string): any;
export declare function formatDistrict(name: string): string;
export {};
