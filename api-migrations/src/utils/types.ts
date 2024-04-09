 import {UserStatus} from './constants'
 
 type MyMigrationsUp = (
  url: string,
  headers: AuthorizationHeader
) => Promise<void>;

 type MyMigrations = {
  version?: string ;
  name?: string ;
  timestamp?: string | null;
};

 type MigrationFile = Pick<
  MyMigrations,
  'name' | 'version'
> & {
  /** format: <YYYYMMDDHHMM-used-as-version>-<name-with-dashes>.js, e.g.: "202301201123-create-permissions-on-observation.js" */
  file: string;
  completed: boolean;
};

 type AuthorizationHeader = {
  Authorization: string;
};
 interface components {
  schemas: {
    Rights: {
      /** Unique identifier for the role. */
      id?: string;
      /** Name of the role. */
      name?: string;
      /** The role's icon. */
      icon?: string;
      users?: (string | components['schemas']['Users'])[];
    };
    Users: {
      /** Unique identifier for the user. */
      id?: string;
      /** First name of the user. */
      firstname?: string;
      /** Last name of the user. */
      lastname?: string;
      /** Unique email address for the user. */
      mail?: string;
      /** Password of the user. */
      pwd?: string;
      /** The user's location. */
      location?: string | null;
      /** The user's title. */
      title?: string | null;
      language?: string;
      /** Unique identifier of the role of this user. */
      right?: string | components['schemas']['Rights'];
      /** What theme the user is using. */
      theme?: 'light' | 'dark' | 'auto';
      /** Status of the user. */
      status?: UserStatus;
    };
  }
}

 type MyUsers = components['schemas']['Users'];

 export type { MyUsers ,AuthorizationHeader, components, MigrationFile, MyMigrations, MyMigrationsUp};