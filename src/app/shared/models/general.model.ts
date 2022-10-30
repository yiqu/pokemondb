export enum EntryMode {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  GET = 'get'
}

export enum CRUDMode {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  GET = 'get'
}

export interface FirebaseDocObsAndId {
  operationObs: Promise<void>;
  id: string;
}
