import { Field } from "./field";

export interface ResourceParams {
    url?: string;
    package_id: string;
}

export interface DatastoreCreateParams {
    resource: ResourceParams;
    fields?: Field[];
    records: any[];
}