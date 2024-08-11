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

export type SignUpArgs = {
  html?: string;
  name?: string;
  password: string;
  email: string;
  subject?: string;
  sendConfirmationEmail?: boolean;
};
