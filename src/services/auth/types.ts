import { Nullable } from "../../types/common.types.ts";

export type MeResponse = {
  email: string;
  name: string;
  id: string;
  isEmailVerified: boolean;
  avatar: Nullable<string>;
  created: string;
  updated: string;
};

export type UpdateMeArgs = {
  email?: string;
  name?: string;
  avatar?: Blob;
};
