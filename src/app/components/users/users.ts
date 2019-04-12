import { Roles } from '../../services/user.model';

export class Users {
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
