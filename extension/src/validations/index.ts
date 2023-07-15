import * as Yup from "yup";

const object = Yup.object();
const yup_string = Yup.string();

export const add_links_validations = object.shape({
  url: yup_string.required().url(),
  name: yup_string.required().min(3, "Name is too short"),
});
