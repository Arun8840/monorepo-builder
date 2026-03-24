import { useSooner } from "./use-sooner";

export { useSooner };

export const toast = {
  ...useSooner.getState(),
  useSooner,
};
