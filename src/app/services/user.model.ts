
export interface User {
    uid: string;
    email: string;
    roles: Roles;
    photoURL?: string;
    displayName?: string;
    kcusdId?: string;
    position?: string;
    gradeLevel?: Array<string>;
    site?: string;
    subjectArea?: Array<string>;
    firstName?: string;
    lastName?: string;
    hireDate?: Date;
    classDescription?: string;
    courses?: Array<string>;
    lastLogin?: Date;
  }

export interface Staff {
    kcusdId?: string;
    position?: string; 
    gradeLevel?: Array<string>;
    roles: Roles;
    site?: string;
    subjectArea?: Array<string>;
    firstName?: string;
    lastName?: string;
    hireDate?: Date;
    classDescription?: string;
    courses?: Array<string>;
}

export interface Roles {
  viewer: boolean;
  participant?: boolean;
  presenter?: boolean;
  analyst?: boolean;
  admin?: boolean;

}