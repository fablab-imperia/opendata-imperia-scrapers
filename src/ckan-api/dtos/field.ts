export interface Field {
    // name of column column
    id: string; 
    type: 'numeric'| 'text' | 'json' | 'date' | 'time' | 'timestamp' |
          'int' | 'float' | 'bool' 
    info?: {
        label?: string;
        notes?: string;
        type_override?: string;
    }
}