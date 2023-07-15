import cogoToast from "cogo-toast";

export const copyToClipboard = () => {
  navigator.clipboard
    .writeText("hello word")
    .then((res) => cogoToast.success("Copied successfully"))
    .catch((err) => cogoToast.error("Failed to copy"));
};
