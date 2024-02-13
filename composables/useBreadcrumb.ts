import { VARIABLES } from "~/core/constants";

export type TBreadcrumb = {
  title: string;
};

// Path: composables/useBreadcrumb.ts
export const useBreadcrumb = (value: Partial<TBreadcrumb> = {}) => {
  const state = useState<TBreadcrumb>(VARIABLES.BREADCRUMB_STATE, () => ({
    title: "",
  }));

  if (value.title) {
    state.value.title = value.title;
  }

  return state;
};
