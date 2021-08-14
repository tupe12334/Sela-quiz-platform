import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

export const fromDraftToHTML = (draft) => {
  const rawContentState = convertToRaw(draft.getCurrentContent());
  const markup = draftToHtml(
    rawContentState,
    {
      trigger: "#",
      separator: " ",
    },
    false
  );
  return markup;
};
