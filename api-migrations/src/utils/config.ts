import { AuthorizationHeader } from './types';
import {  EnvVariable} from './constants';

 function getConnectionHeaders(): AuthorizationHeader | undefined {
  return { Authorization: `Bearer xxx` };
}

 function getCustomerName() {
  return getMandatoryEnvVar(EnvVariable.HF_CUSTOMER_NAME);
}

 function buildConnectionUrlFromEnvVariables() {
  const host = getMandatoryEnvVar(EnvVariable.HOST);
  const port = getMandatoryEnvVar(EnvVariable.PORT);
  return buildConnectionUrl(host, port);
}

 function buildConnectionUrl(
  host: string,
  port: string,
  protocol: 'http' | 'https' = 'http'
) {
  return `${protocol}://${host}:${port}`;
}
/**
 * Get an environnement variable by name as a string, by default from process.env. Throw an error if the variable is not found, not a string or an empty string.
 * @param {string} name name of the environment variable
 * @param {NodeJS.ProcessEnv} [processEnv=process.env] [optional] containing the env variable, default to process.env
 * @param {string} [msg] [optional] message display if variable is not found or invalid.
 * @returns
 */
function getMandatoryEnvVar(
  name: string,
  processEnv = process.env,
  msg?: string
): string {
  const value = processEnv[name];
  if (value === undefined || value === null)
    throw new Error(msg || `Environment is missing variable ${name}`);
  if (value === '')
    throw new Error(msg || `Environment variable ${name} is an empty string`);
  if (typeof value !== 'string')
    throw new Error(msg || `Environment variable ${name} is not a string`);
  return value;
}

export {getConnectionHeaders, getCustomerName, buildConnectionUrl,buildConnectionUrlFromEnvVariables}