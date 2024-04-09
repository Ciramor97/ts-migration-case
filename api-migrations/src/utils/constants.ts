const ROLE_ONE_ID = 'qsqrt-2345';
const ROLE_TWO_ID = 'phku-4322';
const ROLE_THREE_ID = 'dfgfhj-5678';

enum EnvVariable{
  HF_CUSTOMER_NAME = "HF_CUSTOMER_NAME",
  HOST = "HOST",
  PORT = "PORT",
}

enum UserStatus {
 Active =' active',
 Invited = 'invited',
 Draft = 'draft',
 Suspended = 'suspended',
 Deleted = 'deleted'
}

export {EnvVariable, UserStatus, ROLE_ONE_ID,ROLE_TWO_ID,ROLE_THREE_ID}