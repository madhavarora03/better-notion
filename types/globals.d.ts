/* eslint-disable @typescript-eslint/no-empty-object-type */

import { User } from "./types";

export {};

declare global {
  interface CustomJwtSessionClaims extends User {}
}
