export interface User {
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
    kcusdId?: string;
    position?: string;
    roles: Roles;
  }

export interface Staff {
    kcusdId?: string;
    position?: string; 
}

export interface Roles {
  viewer: boolean;
  participant?: boolean;
  presenter?: boolean;
  analyst?: boolean;
  admin?: boolean;

}