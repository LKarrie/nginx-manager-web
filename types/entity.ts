import { BasicStatus, PermissionType } from './enum';

export interface UserToken {
  sessionId?: string;
  accessToken?: string;
  refreshToken?: string;
  accessTokenExpiresAt?: string;
  refresTokenExpiresAt?: string;
}

export interface UserInfo {
  id: string;
  username: string;
  fullName: string;
  email: string;
  passwordChangedAt: string;
}

export interface DefaultInfo {
  lastUpdatedAt: string;
  lastUpdatedById: string;
  lastUpdatedByName: string;
  createdAt: string;
  createdById: string;
  createdByName: string;
}

export interface Organization {
  id: string;
  name: string;
  status: 'enable' | 'disable';
  desc?: string;
  order?: number;
  children?: Organization[];
}

export interface Permission {
  id: string;
  parentId: string;
  name: string;
  label: string;
  type: PermissionType;
  route: string;
  status?: BasicStatus;
  order?: number;
  icon?: string;
  component?: string;
  hide?: boolean;
  hideTab?: boolean;
  frameSrc?: string;
  newFeature?: boolean;
  children?: Permission[];
}

export interface Role {
  id: string;
  name: string;
  label: string;
  status: BasicStatus;
  order?: number;
  desc?: string;
  permission?: Permission[];
}
